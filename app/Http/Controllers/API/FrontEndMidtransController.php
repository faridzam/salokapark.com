<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\reservation;

class FrontEndMidtransController extends Controller
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
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate))->endOfDay();
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

            if (!$reservation->snap_token) {

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
        \Midtrans\Config::$isProduction = $this->isProduction;
        \Midtrans\Config::$serverKey = $this->serverKey;
        $notif = new \Midtrans\Notification();

        $transaction = $notif->transaction_status;
        $type = $notif->payment_type;
        $order_id = $notif->order_id;
        $fraud = $notif->fraud_status;

        switch ($type) {
            case 'gopay':
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'payment_method_id' => 1,
                ]);
                break;
            case 'qris':
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'payment_method_id' => 2,
                ]);
                break;
            case 'cstore':

                if ($notif->store = 'alfamart') {
                    $reservation = reservation::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 3,
                    ]);
                } elseif ($notif->store = 'indomaret') {
                    $reservation = reservation::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 4,
                    ]);
                }
                break;
            case 'bank_transfer':

                if ($notif->permata_va_number) {
                    $reservation = reservation::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 9,
                    ]);
                } elseif ($notif->va_numbers[0]->bank) {
                    switch ($notif->va_numbers[0]->bank) {
                        case 'bca':
                            $reservation = reservation::where('order_id', $order_id)
                            ->update([
                                'payment_method_id' => 5,
                            ]);
                            break;
                        case 'bni':
                            $reservation = reservation::where('order_id', $order_id)
                            ->update([
                                'payment_method_id' => 6,
                            ]);
                            break;
                        case 'bri':
                            $reservation = reservation::where('order_id', $order_id)
                            ->update([
                                'payment_method_id' => 7,
                            ]);
                            break;

                        default:
                            # code...
                            break;
                    }
                }
                break;
            case 'echannel':
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'payment_method_id' => 8,
                ]);
                break;

            default:
                # code...
                break;
        }

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
                $arrival_date = reservation::where('order_id', $order_id)->value('arrival_date');
                $bookingCode = $arrival_date->format('ymd');
                $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'booking_code' => $bookingCode,
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
