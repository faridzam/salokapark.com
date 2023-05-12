<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\referrer;
use App\Models\ticket;
use App\Models\ticket_referral;
use App\Models\ticket_zeals;
use App\Models\ticket_group;
use App\Models\option;
use App\Models\option_referral;
use App\Models\option_zeals;
use App\Models\option_group;
use App\Models\ticket_distribution;
use App\Models\ticket_distribution_referral;
use App\Models\ticket_distribution_zeals;
use App\Models\ticket_distribution_group;
use App\Models\reservation;
use App\Models\reservation_referral;
use App\Models\reservation_zeals;
use App\Models\reservation_group;
use App\Models\reservation_detail;
use App\Models\reservation_detail_referral;
use App\Models\reservation_detail_zeals;
use App\Models\reservation_detail_group;
use App\Models\customer;
use App\Models\customer_referral;
use App\Models\customer_zeals;
use App\Models\customer_group;
use App\Models\reserved;
use App\Models\reserved_referral;
use App\Models\reserved_zeals;
use App\Models\reserved_group;
use App\Models\payment_method;
use App\Models\zeals_callback_history;

class FrontEndMidtransController extends Controller
{

    public function __construct(){
        $this->serverKey = 'Mid-server-vDvFh0-mEQcapYlBhoNayo4E';
        $this->isProduction = true;
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
                    $ticketDistribution = ticket_distribution::find($value['ticket_id']);
                    $ticket = ticket::find($ticketDistribution->ticket_id);
                    $option = option::find($ticketDistribution->option_id);

                    switch ($option->type) {
                        case 'reguler':
                            $price = $ticket->price;

                            break;
                        case 'discount':
                            $price = $ticket->price * (100 - $option->discount) / 100;

                            break;
                        case 'special_price':
                            $price = $option->special_price;

                            break;
                        case 'buy_x_get_y':
                            # code...
                            break;
                        case 'cashback':
                            # code...
                            break;
                        case 'others':
                            $price = $ticket->price;

                            break;
                        default:
                            # code...
                            break;
                    }

                    $totalBill += ($value['quantity'] * $price);
                    array_push($itemDetails, [
                        'id' => $value['ticket_id'],
                        'name' => $value['ticket_name'],
                        'quantity' => $value['quantity'],
                        'price' => $price,
                    ]);
                }
            };

            $dtNow = Carbon::now();
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate))->startOfDay();
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

    public function getTransactionTokenReferral(Request $request){
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
                    $ticketDistribution = ticket_distribution_referral::find($value['ticket_id']);
                    $ticket = ticket_referral::find($ticketDistribution->ticket_id);
                    $option = option_referral::find($ticketDistribution->option_id);

                    switch ($option->type) {
                        case 'reguler':
                            $price = $ticket->price;

                            break;
                        case 'discount':
                            $price = $ticket->price * (100 - $option->discount) / 100;

                            break;
                        case 'special_price':
                            $price = $option->special_price;

                            break;
                        case 'buy_x_get_y':
                            # code...
                            break;
                        case 'cashback':
                            # code...
                            break;
                        case 'others':
                            $price = $ticket->price;

                            break;
                        default:
                            # code...
                            break;
                    }

                    $totalBill += ($value['quantity'] * $price);
                    array_push($itemDetails, [
                        'id' => $value['ticket_id'],
                        'name' => $value['ticket_name'],
                        'quantity' => $value['quantity'],
                        'price' => $price,
                    ]);
                }
            };

            $dtNow = Carbon::now();
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate))->startOfDay();
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

            $reservation = reservation_referral::find(request('reservationID'));

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

    public function getTransactionTokenGroup(Request $request){
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
                    $ticketDistribution = ticket_distribution_group::find($value['ticket_id']);
                    $ticket = ticket_group::find($ticketDistribution->ticket_id);
                    $option = option_group::find($ticketDistribution->option_id);

                    switch ($option->type) {
                        case 'reguler':

                            $price = $ticket->price;

                            break;
                        case 'discount':
                            $price = $ticket->price * (100 - $option->discount) / 100;

                            break;
                        case 'special_price':
                            $price = $option->special_price;

                            break;
                        case 'buy_x_get_y':
                            # code...
                            break;
                        case 'cashback':
                            # code...
                            break;
                        case 'others':
                            $price = $ticket->price;

                            break;
                        default:
                            # code...
                            break;
                    }
                    $totalBill += ($value['quantity'] * $price);
                    array_push($itemDetails, [
                        'id' => $value['ticket_id'],
                        'name' => $value['ticket_name'],
                        'quantity' => $value['quantity'],
                        'price' => $price,
                    ]);
                }
            };

            $dtNow = Carbon::now();
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate))->startOfDay();
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

            $reservation = reservation_group::find(request('reservationID'));

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

    public function getTransactionTokenZeals(Request $request){
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
                    $ticketDistribution = ticket_distribution_zeals::find($value['ticket_id']);
                    $ticket = ticket_zeals::find($ticketDistribution->ticket_id);
                    $option = option_zeals::find($ticketDistribution->option_id);

                    switch ($option->type) {
                        case 'reguler':

                            $price = $ticket->price;

                            break;
                        case 'discount':
                            $price = $ticket->price * (100 - $option->discount) / 100;

                            break;
                        case 'special_price':
                            $price = $option->special_price;

                            break;
                        case 'buy_x_get_y':
                            # code...
                            break;
                        case 'cashback':
                            # code...
                            break;
                        case 'others':
                            $price = $ticket->price;

                            break;
                        default:
                            # code...
                            break;
                    }
                    $totalBill += ($value['quantity'] * $price);
                    array_push($itemDetails, [
                        'id' => $value['ticket_id'],
                        'name' => $value['ticket_name'],
                        'quantity' => $value['quantity'],
                        'price' => $price,
                    ]);
                }
            };

            $dtNow = Carbon::now();
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate))->startOfDay();
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

            $reservation = reservation_zeals::find(request('reservationID'));

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
        $response = $client->get('https://api.midtrans.com/v2/'.$request->orderID.'/status', [
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
        $response = $client->post('https://api.midtrans.com/v2/'.$request->orderID.'/cancel', [
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
        $grossAmount = $notif->gross_amount;

        if (mb_substr($order_id, 0, 3) === "ze-") {
            switch ($type) {
                case 'gopay':
                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 1,
                    ]);
                    break;
                case 'qris':
                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 2,
                    ]);
                    break;
                case 'cstore':

                    if ($notif->store = 'alfamart') {
                        $reservation = reservation_zeals::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 3,
                        ]);
                    } elseif ($notif->store = 'indomaret') {
                        $reservation = reservation_zeals::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 4,
                        ]);
                    }
                    break;
                case 'bank_transfer':

                    if ($notif->permata_va_number) {
                        $reservation = reservation_zeals::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 9,
                        ]);
                    } elseif ($notif->va_numbers[0]->bank) {
                        switch ($notif->va_numbers[0]->bank) {
                            case 'bca':
                                $reservation = reservation_zeals::where('order_id', $order_id)
                                ->update([
                                    'payment_method_id' => 5,
                                ]);
                                break;
                            case 'bni':
                                $reservation = reservation_zeals::where('order_id', $order_id)
                                ->update([
                                    'payment_method_id' => 6,
                                ]);
                                break;
                            case 'bri':
                                $reservation = reservation_zeals::where('order_id', $order_id)
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
                    $reservation = reservation_zeals::where('order_id', $order_id)
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
                    $reservationData = reservation_zeals::where('order_id', $order_id)->first();
                    $bookingCode = date('Ymd', strtotime( $reservationData->arrival_date )).$reservationData->payment_method_id.$reservationData->reservation_option_id.$reservationData->id;

                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'booking_code' => $bookingCode,
                        'status' => 'settlement',
                    ]);

                    $reserved = reserved_zeals::create([
                        'reservation_id' => $reservationData->id,
                        'customer_id' => $reservationData->customer_id,
                        'status' => 0,
                    ]);

                    $affiliateID = '571343950';
                    // $zealsCallback = Http::post('https://demo.zeals.asia/apiv1/AMPcallback/', [
                    //     'encrypted_code' => $reservationData->zeals_code,
                    //     'aff_id' => $affiliateID,
                    //     'unique_random_code' => $order_id,
                    //     'transaction_value' => $reservationData->bill
                    // ])
                    // ->throw()
                    // ->json();

                    $client = new Client([
                        'headers' => ['Content-Type' => 'application/json']
                    ]);

                    $customer = customer_zeals::find($reservationData->customer_id);
                    $reservationBill = $reservationData->bill;
                    if ($reservationBill === (double)$grossAmount) {
                        $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasi', [
                            'json' => [
                                'name' => $customer->name,
                                'booking_code' => $bookingCode,
                                'email' => $customer->email,
                                'arrival' => $reservationData->arrival_date,
                                'status' => 100,
                            ]
                        ]);
                    }

                    if(is_null($reservationData->zeals_code)){
                        //
                    } else {
                        $response = $client->post('https://app.zeals.asia/apiv1/AMPcallback', [
                            'json' => [
                                'encrypted_code' => $reservationData->zeals_code,
                                'aff_id' => $affiliateID,
                                'unique_random_code' => $order_id,
                                'transaction_value' => $reservationData->bill
                            ]
                        ]);
                        $data = json_decode($response->getBody(), true);

                        zeals_callback_history::create([
                            'response' => $response->getBody()->getContents(),
                            'status_code' => $response->getStatusCode(),
                        ]);
                    }

                    // $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
                    // $context = stream_context_create($opts);
                    // // $header = file_get_contents('https://www.example.com',false,$context);
                    // $header = file_get_contents('https://demo.zeals.asia/platform/api/AMPcallback/'.$affiliateID.'/CMP00000050', false, $context);

                }
                else if($transaction == 'pending'){
                    // TODO set payment status in merchant's database to 'Pending'
                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'status' => 'pending',
                    ]);
                }
                else if ($transaction == 'deny') {
                    // TODO set payment status in merchant's database to 'Denied'
                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'status' => 'deny',
                    ]);
                }
                else if ($transaction == 'expire') {
                    // TODO set payment status in merchant's database to 'expire'
                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'status' => 'expire',
                    ]);
                }
                else if ($transaction == 'cancel') {
                    // TODO set payment status in merchant's database to 'Denied'
                    $reservation = reservation_zeals::where('order_id', $order_id)
                    ->update([
                        'status' => 'cancel',
                    ]);
            }
        } elseif (mb_substr($order_id, 0, 3) === "ro-") {
            switch ($type) {
                case 'gopay':
                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 1,
                    ]);
                    break;
                case 'qris':
                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 2,
                    ]);
                    break;
                case 'cstore':

                    if ($notif->store = 'alfamart') {
                        $reservation = reservation_group::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 3,
                        ]);
                    } elseif ($notif->store = 'indomaret') {
                        $reservation = reservation_group::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 4,
                        ]);
                    }
                    break;
                case 'bank_transfer':

                    if ($notif->permata_va_number) {
                        $reservation = reservation_group::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 9,
                        ]);
                    } elseif ($notif->va_numbers[0]->bank) {
                        switch ($notif->va_numbers[0]->bank) {
                            case 'bca':
                                $reservation = reservation_group::where('order_id', $order_id)
                                ->update([
                                    'payment_method_id' => 5,
                                ]);
                                break;
                            case 'bni':
                                $reservation = reservation_group::where('order_id', $order_id)
                                ->update([
                                    'payment_method_id' => 6,
                                ]);
                                break;
                            case 'bri':
                                $reservation = reservation_group::where('order_id', $order_id)
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
                    $reservation = reservation_group::where('order_id', $order_id)
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
                    $reservationData = reservation_group::where('order_id', $order_id)->first();
                    $bookingCode = date('Ymd', strtotime( $reservationData->arrival_date )).$reservationData->payment_method_id.$reservationData->reservation_option_id.$reservationData->id;

                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'booking_code' => $bookingCode,
                        'status' => 'settlement',
                    ]);

                    $reserved = reserved_group::create([
                        'reservation_id' => $reservationData->id,
                        'customer_id' => $reservationData->customer_id,
                        'status' => 0,
                    ]);

                    $affiliateID = '571343950';
                    // $zealsCallback = Http::post('https://demo.zeals.asia/apiv1/AMPcallback/', [
                    //     'encrypted_code' => $reservationData->zeals_code,
                    //     'aff_id' => $affiliateID,
                    //     'unique_random_code' => $order_id,
                    //     'transaction_value' => $reservationData->bill
                    // ])
                    // ->throw()
                    // ->json();

                    $client = new Client([
                        'headers' => ['Content-Type' => 'application/json']
                    ]);

                    //customer
                    $customer = customer_group::find($reservationData->customer_id);
                    //reservation
                    $reservationDetail = reservation_detail_group::where('reservation_id', $reservationData->id)->where('subtotal', '>', 0)->first();
                    $ticketDistribution = ticket_distribution_group::find($reservationDetail->ticket_distribution_id);
                    $ticket = ticket_group::find($ticketDistribution->ticket_id);
                    //bonus
                    // $reservationDetailBonus = reservation_detail_group::where('reservation_id', $reservationData->id)->where('subtotal', '=', 0)->first();
                    // $ticketDistributionBonus = ticket_distribution_group::find($reservationDetailBonus->ticket_distribution_id);
                    // $ticketBonus = ticket_group::find($ticketDistributionBonus->ticket_id);
                    //payment
                    $paymentMethod = payment_method::find($reservationData->payment_method_id);
                    $reservationBill = $reservationData->bill;
                    if ($reservationBill === (double)$grossAmount) {
                        if ($reservationDetailBonus) {
                            $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasigrup', [
                                'json' => [
                                    'arrival' => $reservationData->arrival_date,
                                    'name' => $customer->name,
                                    'company_name' => $customer->company_name,
                                    'phone' => $customer->phone,
                                    'email' => $customer->email,
                                    'address' => $customer->address,
                                    'ticket_name' => $ticket->name,
                                    'qty' => $reservationDetail->qty,
                                    'subtotal' => $reservationDetail->subtotal,
                                    "bonus_ticket" => $ticketBonus->name,
                                    "bonus_qty" => $reservationDetailBonus->qty,
                                    "bonus_subtotal" => $reservationDetail->subtotal,
                                    'total' => $reservationDetail->subtotal + $reservationDetailBonus->subtotal,
                                    'booking_code' => $bookingCode,
                                    'payment_method' => $paymentMethod->name,
                                    'pay_date' => Carbon::today()->toDateString(),
                                    'status' => 100,
                                ]
                            ]);
                        }else {
                            $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasigrup', [
                                'json' => [
                                    'arrival' => $reservationData->arrival_date,
                                    'name' => $customer->name,
                                    'company_name' => $customer->company_name,
                                    'phone' => $customer->phone,
                                    'email' => $customer->email,
                                    'address' => $customer->address,
                                    'ticket_name' => $ticket->name,
                                    'qty' => $reservationDetail->qty,
                                    'subtotal' => $reservationDetail->subtotal,
                                    "bonus_ticket" => "Tiket Bonus",
                                    "bonus_qty" => 0,
                                    "bonus_subtotal" => 0,
                                    'total' => $reservationDetail->subtotal,
                                    'booking_code' => $bookingCode,
                                    'payment_method' => $paymentMethod->name,
                                    'pay_date' => Carbon::today()->toDateString(),
                                    'status' => 100,
                                ]
                            ]);
                        }
                    }

                    if(is_null($reservationData->zeals_code)){
                        //
                    } else {
                        $response = $client->post('https://app.zeals.asia/apiv1/AMPcallback', [
                            'json' => [
                                'encrypted_code' => $reservationData->zeals_code,
                                'aff_id' => $affiliateID,
                                'unique_random_code' => $order_id,
                                'transaction_value' => $reservationData->bill
                            ]
                        ]);
                        $data = json_decode($response->getBody(), true);

                        zeals_callback_history::create([
                            'response' => $response->getBody()->getContents(),
                            'status_code' => $response->getStatusCode(),
                        ]);
                    }

                    // $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
                    // $context = stream_context_create($opts);
                    // // $header = file_get_contents('https://www.example.com',false,$context);
                    // $header = file_get_contents('https://demo.zeals.asia/platform/api/AMPcallback/'.$affiliateID.'/CMP00000050', false, $context);

                }
                else if($transaction == 'pending'){
                    // TODO set payment status in merchant's database to 'Pending'
                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'status' => 'pending',
                    ]);
                }
                else if ($transaction == 'deny') {
                    // TODO set payment status in merchant's database to 'Denied'
                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'status' => 'deny',
                    ]);
                }
                else if ($transaction == 'expire') {
                    // TODO set payment status in merchant's database to 'expire'
                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'status' => 'expire',
                    ]);
                }
                else if ($transaction == 'cancel') {
                    // TODO set payment status in merchant's database to 'Denied'
                    $reservation = reservation_group::where('order_id', $order_id)
                    ->update([
                        'status' => 'cancel',
                    ]);
            }
        } elseif (mb_substr($order_id, 0, 4) === "ref-") {
            switch ($type) {
                case 'gopay':
                    $reservation = reservation_referral::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 1,
                    ]);
                    break;
                case 'qris':
                    $reservation = reservation_referral::where('order_id', $order_id)
                    ->update([
                        'payment_method_id' => 2,
                    ]);
                    break;
                case 'cstore':

                    if ($notif->store = 'alfamart') {
                        $reservation = reservation_referral::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 3,
                        ]);
                    } elseif ($notif->store = 'indomaret') {
                        $reservation = reservation_referral::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 4,
                        ]);
                    }
                    break;
                case 'bank_transfer':

                    if ($notif->permata_va_number) {
                        $reservation = reservation_referral::where('order_id', $order_id)
                        ->update([
                            'payment_method_id' => 9,
                        ]);
                    } elseif ($notif->va_numbers[0]->bank) {
                        switch ($notif->va_numbers[0]->bank) {
                            case 'bca':
                                $reservation = reservation_referral::where('order_id', $order_id)
                                ->update([
                                    'payment_method_id' => 5,
                                ]);
                                break;
                            case 'bni':
                                $reservation = reservation_referral::where('order_id', $order_id)
                                ->update([
                                    'payment_method_id' => 6,
                                ]);
                                break;
                            case 'bri':
                                $reservation = reservation_referral::where('order_id', $order_id)
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
                    $reservation = reservation_referral::where('order_id', $order_id)
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
                $reservationData = reservation_referral::where('order_id', $order_id)->first();
                $bookingCode = date('Ymd', strtotime( $reservationData->arrival_date )).$reservationData->payment_method_id.$reservationData->reservation_option_id.$reservationData->id;

                $reservation = reservation_referral::where('order_id', $order_id)
                ->update([
                    'booking_code' => $bookingCode,
                    'status' => 'settlement',
                ]);

                $reserved = reserved_referral::create([
                    'reservation_id' => $reservationData->id,
                    'customer_id' => $reservationData->customer_id,
                    'status' => 0,
                ]);

                $affiliateID = '571343950';
                // $zealsCallback = Http::post('https://demo.zeals.asia/apiv1/AMPcallback/', [
                //     'encrypted_code' => $reservationData->zeals_code,
                //     'aff_id' => $affiliateID,
                //     'unique_random_code' => $order_id,
                //     'transaction_value' => $reservationData->bill
                // ])
                // ->throw()
                // ->json();

                $client = new Client([
                    'headers' => ['Content-Type' => 'application/json']
                ]);

                $customer = customer_referral::find($reservationData->customer_id);
                $reservationBill = $reservationData->bill;
                if ((double)$grossAmount === $reservationBill) {
                    $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasi', [
                        'json' => [
                            'name' => $customer->name,
                            'booking_code' => $bookingCode,
                            'email' => $customer->email,
                            'arrival' => $reservationData->arrival_date,
                            'status' => 100,
                        ]
                    ]);
                }

                if(is_null($reservationData->zeals_code)){
                    //
                } else {
                    $response = $client->post('https://app.zeals.asia/apiv1/AMPcallback', [
                        'json' => [
                            'encrypted_code' => $reservationData->zeals_code,
                            'aff_id' => $affiliateID,
                            'unique_random_code' => $order_id,
                            'transaction_value' => $reservationData->bill
                        ]
                    ]);
                    $data = json_decode($response->getBody(), true);

                    zeals_callback_history::create([
                        'response' => $response->getBody()->getContents(),
                        'status_code' => $response->getStatusCode(),
                    ]);
                }

                // $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
                // $context = stream_context_create($opts);
                // // $header = file_get_contents('https://www.example.com',false,$context);
                // $header = file_get_contents('https://demo.zeals.asia/platform/api/AMPcallback/'.$affiliateID.'/CMP00000050', false, $context);

            }
            else if($transaction == 'pending'){
                // TODO set payment status in merchant's database to 'Pending'
                $reservation = reservation_referral::where('order_id', $order_id)
                ->update([
                    'status' => 'pending',
                ]);
            }
            else if ($transaction == 'deny') {
                // TODO set payment status in merchant's database to 'Denied'
                $reservation = reservation_referral::where('order_id', $order_id)
                ->update([
                    'status' => 'deny',
                ]);
            }
            else if ($transaction == 'expire') {
                // TODO set payment status in merchant's database to 'expire'
                $reservation = reservation_referral::where('order_id', $order_id)
                ->update([
                    'status' => 'expire',
                ]);
            }
            else if ($transaction == 'cancel') {
                // TODO set payment status in merchant's database to 'Denied'
                $reservation = reservation_referral::where('order_id', $order_id)
                ->update([
                    'status' => 'cancel',
                ]);
            }
        } else {
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
                $reservationData = reservation::where('order_id', $order_id)->first();
                $bookingCode = date('Ymd', strtotime( $reservationData->arrival_date )).$reservationData->payment_method_id.$reservationData->reservation_option_id.$reservationData->id;

                if ($reservationData->status !== 'settlement') {
                    $reservation = reservation::where('order_id', $order_id)
                ->update([
                    'booking_code' => $bookingCode,
                    'status' => 'settlement',
                ]);

                $reserved = reserved::create([
                    'reservation_id' => $reservationData->id,
                    'customer_id' => $reservationData->customer_id,
                    'status' => 0,
                ]);

                $affiliateID = '571343950';
                // $zealsCallback = Http::post('https://demo.zeals.asia/apiv1/AMPcallback/', [
                //     'encrypted_code' => $reservationData->zeals_code,
                //     'aff_id' => $affiliateID,
                //     'unique_random_code' => $order_id,
                //     'transaction_value' => $reservationData->bill
                // ])
                // ->throw()
                // ->json();

                $client = new Client([
                    'headers' => ['Content-Type' => 'application/json']
                ]);

                $customer = customer::find($reservationData->customer_id);
                $reservationBill = $reservationData->bill;
                if ((double)$grossAmount === $reservationBill) {
                    $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasi', [
                        'json' => [
                            'name' => $customer->name,
                            'booking_code' => $bookingCode,
                            'email' => $customer->email,
                            'arrival' => $reservationData->arrival_date,
                            'status' => 100,
                        ]
                    ]);
                }

                if(is_null($reservationData->zeals_code)){
                    //
                } else {
                    $response = $client->post('https://app.zeals.asia/apiv1/AMPcallback', [
                        'json' => [
                            'encrypted_code' => $reservationData->zeals_code,
                            'aff_id' => $affiliateID,
                            'unique_random_code' => $order_id,
                            'transaction_value' => $reservationData->bill
                        ]
                    ]);
                    $data = json_decode($response->getBody(), true);

                    zeals_callback_history::create([
                        'response' => $response->getBody()->getContents(),
                        'status_code' => $response->getStatusCode(),
                    ]);
                }

                // $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
                // $context = stream_context_create($opts);
                // // $header = file_get_contents('https://www.example.com',false,$context);
                // $header = file_get_contents('https://demo.zeals.asia/platform/api/AMPcallback/'.$affiliateID.'/CMP00000050', false, $context);
                }

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

    public function testBotmailGroup(Request $request){
        //
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        if ($request->bonus_qty > 0) {
            $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasigrup', [
                'json' => [
                    'arrival' => $request->arrival,
                    'name' => $request->name,
                    'company_name' => $request->company_name,
                    'phone' => $request->phone,
                    'email' => $request->email,
                    'address' => $request->address,
                    'ticket_name' => $request->ticket_name,
                    'qty' => $request->qty,
                    'subtotal' => $request->subtotal,
                    "bonus_ticket" => $request->bonus_ticket,
                    "bonus_qty" => $request->bonus_qty,
                    "bonus_subtotal" => $request->bonus_subtotal,
                    'total' => $request->total,
                    'booking_code' => $request->booking_code,
                    'payment_method' => $request->payment_method,
                    'pay_date' => Carbon::today()->toDateString(),
                    'status' => 100,
                ]
            ]);
        }else {
            $responseMail = $client->post('https://botmail.salokapark.app/api/data/reservasigrup', [
                'json' => [
                    'arrival' => $request->arrival,
                    'name' => $request->name,
                    'company_name' => $request->company_name,
                    'phone' => $request->phone,
                    'email' => $request->email,
                    'address' => $request->address,
                    'ticket_name' => $request->ticket_name,
                    'qty' => $request->qty,
                    'subtotal' => $request->subtotal,
                    "bonus_ticket" => $request->bonus_ticket,
                    "bonus_qty" => $request->bonus_qty,
                    "bonus_subtotal" => $request->bonus_subtotal,
                    'total' => $request->total,
                    'booking_code' => $request->booking_code,
                    'payment_method' => $request->payment_method,
                    'pay_date' => Carbon::today()->toDateString(),
                    'status' => 100,
                ]
            ]);
        }
    }
}
