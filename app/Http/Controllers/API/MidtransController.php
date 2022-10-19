<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class MidtransController extends Controller
{
    //
    public function getTransactionToken(Request $request){
        //

        // try {
            // Set your Merchant Server Key
            \Midtrans\Config::$serverKey = 'SB-Mid-server-Mcyaglb-OqsipP7H_PPvHnLD';
            // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
            \Midtrans\Config::$isProduction = false;
            // Set sanitization on (default)
            \Midtrans\Config::$isSanitized = true;
            // Set 3DS transaction for credit card to true
            \Midtrans\Config::$is3ds = true;

            $totalBill = 0;
            $itemDetails = [];

            foreach ($request->ticketOrder as $key => $value) {
                $totalBill += ($value['quantity'] * $value['price']);
                array_push($itemDetails, $value);
            };

            $params = array(
                'transaction_details' => array(
                    'order_id' => $request->orderID,
                    'gross_amount' => $totalBill,
                ),
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
            );

            $snapToken = \Midtrans\Snap::getSnapToken($params);

            return response()->json([
                'token' => $snapToken
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
                'SB-Mid-server-Mcyaglb-OqsipP7H_PPvHnLD',
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
                'SB-Mid-server-Mcyaglb-OqsipP7H_PPvHnLD',
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
}
