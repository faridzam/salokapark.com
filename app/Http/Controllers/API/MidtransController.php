<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\reservation;

class MidtransController extends Controller
{

    public function __construct(){
        $this->serverKey = 'SB-Mid-server-Mcyaglb-OqsipP7H_PPvHnLD';
        $this->isProduction = false;
        $this->isSanitized = true;
        $this->is3ds = true;
    }

    //
    public function getTransactionToken(Request $request){
        //

        // try {
            // Set your Merchant Server Key
            \Midtrans\Config::$serverKey = $this->serverKey;
            // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
            \Midtrans\Config::$isProduction = $this->isProduction;
            // Set sanitization on (default)
            \Midtrans\Config::$isSanitized = $this->isSanitized;
            // Set 3DS transaction for credit card to true
            \Midtrans\Config::$is3ds = $this->is3ds;

            $totalBill = 0;
            $itemDetails = [];

            foreach ($request->ticketOrder as $key => $value) {
                if ($value['quantity'] > 0) {
                    $totalBill += ($value['quantity'] * $value['price']);
                    array_push($itemDetails, [
                        'id' => $value['ticket_id'],
                        'name' => $value['ticket_name'],
                        'quantity' => $value['quantity'],
                        'price' => $value['price'],
                    ]);
                }
            };

            $dtNow = Carbon::now();
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate));
            $expireInMinutes = $bookingDate->diffInMinutes($dtNow->copy());

            $params = array(
                'transaction_details' => array(
                    'order_id' => $request->orderID,
                    'gross_amount' => $totalBill,
                ),
                'item_details' => $itemDetails,
                'credit_card' => array(
                    'secure' => true,
                ),
                'customer_details' => array(
                    'first_name' => $request->name,
                    'last_name' => "",
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'address' => $request->address,
                ),
                "expiry" => array(
                    "start_time" => Carbon::now()->format('Y-m-d H:i:s')." +0700",
                    "unit" => "minutes",
                    "duration" => $expireInMinutes,
                )
            );

            $reservation = reservation::find(request('reservationID'));

            if ($reservation->snap_token === NULL) {

                $snapToken = \Midtrans\Snap::getSnapToken($params);
                $reservation->snap_token = $snapToken;
                $reservation->updated_at = Carbon::now();
                $reservation->update();

            } else {
                $snapToken = $reservation->snapToken;
            }

            return response()->json([
                'token' => $reservation->snap_token,
            ]);
        // } catch (\Throwable $th) {

            // $client = new Client();
            // $response = $client->get('https://api.sandbox.midtrans.com/v2/'.$request->orderID.'/status', [
            //     'auth' => [
            //         'SB-Mid-server-Mcyaglb-OqsipP7H_PPvHnLD',
            //         "",
            //     ],
            //     'headers' => [
            //         'Content-Type' => 'application/json',
            //         'Accept'     => 'application/json',
            //     ],
            // ]);

            // return response()->json([
            //     'status' => json_decode($response->getBody()),
            // ]);

        // }
    }

    public function getMidtransTransactionStatus(Request $request) {
        //
        $client = new Client();
        $response = $client->get('https://api.sandbox.midtrans.com/v2/'.$request->orderID.'/status', [
            'auth' => [
                $this->serverKey,
                "",
            ],
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept'     => 'application/json',
            ],
        ]);

        return response()->json([
            'status' => json_decode($response->getBody()),
        ]);

    }

    public function cancelMidtransTransaction(Request $request) {
        //

        $client = new Client();
        $response = $client->post('https://api.sandbox.midtrans.com/v2/'.$request->orderID.'/cancel', [
            'auth' => [
                $this->serverKey,
                "",
            ],
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept'     => 'application/json',
            ],
        ]);

        return response()->json([
            'status' => json_decode($response->getBody()),
        ]);
    }

    public function midtransNotificationHandler(Request $request) {
        require_once(dirname(__FILE__) . '/Midtrans.php');
        \Midtrans\Config::$isProduction = $this->isProduction;
        \Midtrans\Config::$serverKey = $this->serverKey;
        $notif = new \Midtrans\Notification();

        $transaction = $notif->transaction_status;
        $type = $notif->payment_type;
        $order_id = $notif->order_id;
        $fraud = $notif->fraud_status;

        if ($transaction == 'capture') {
            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card'){
                if($fraud == 'challenge'){
                    // TODO set payment status in merchant's database to 'Challenge by FDS'
                    // TODO merchant should decide whether this transaction is authorized or not in MAP
                    echo "Transaction order_id: " . $order_id ." is challenged by FDS";
                }
                else {
                    // TODO set payment status in merchant's database to 'Success'
                    echo "Transaction order_id: " . $order_id ." successfully captured using " . $type;
                }
                }
            }
            else if ($transaction == 'settlement'){
                // TODO set payment status in merchant's database to 'Settlement'
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'status' => 'settlement',
                ]);
            }
            else if($transaction == 'pending'){
                // TODO set payment status in merchant's database to 'Pending'
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'status' => 'pending',
                ]);
            }
            else if ($transaction == 'deny') {
                // TODO set payment status in merchant's database to 'Denied'
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'status' => 'deny',
                ]);
            }
            else if ($transaction == 'expire') {
                // TODO set payment status in merchant's database to 'expire'
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'status' => 'expire',
                ]);
            }
            else if ($transaction == 'cancel') {
                // TODO set payment status in merchant's database to 'Denied'
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'status' => 'cancel',
                ]);
        }
    }
}
