<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\referrer;
use App\Models\customer;
use App\Models\customer_referral;
use App\Models\customer_zeals;
use App\Models\customer_group;
use App\Models\reservation;
use App\Models\reservation_referral;
use App\Models\reservation_zeals;
use App\Models\reservation_group;
use App\Models\reservation_detail;
use App\Models\reservation_detail_referral;
use App\Models\reservation_detail_zeals;
use App\Models\reservation_detail_group;
use App\Models\ticket_distribution;
use App\Models\ticket_distribution_referral;
use App\Models\ticket_distribution_zeals;
use App\Models\ticket_distribution_group;
use App\Models\ticket;
use App\Models\ticket_referral;
use App\Models\ticket_zeals;
use App\Models\ticket_group;
use App\Models\option;
use App\Models\option_referral;
use App\Models\option_zeals;
use App\Models\option_group;

class FrontEndReservationController extends Controller
{
    //
    public function createReservation(Request $request) {
        //
        $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate));

        $customer = customer::create([
            'name' => request('name'),
            'phone' => request('phone'),
            'email' => request('email'),
            'address' => request('address'),
        ]);

        $totalBill = 0;

        foreach ($request->ticketOrder as $key => $value) {
            if ($value['quantity'] > 0) {
                $totalBill += ($value['quantity'] * $value['price']);
            }
        };

        $sex = reservation::count();

        $reservation = reservation::create([
            'customer_id' => $customer->id,
            'order_id' => Carbon::now()->format('y').sprintf('%05d', substr(strval($sex), -5)),
            'arrival_date' => $bookingDate,
            'zeals_code' => $request->zeals_code,
            'bill' => $totalBill,
            'status' => "created",
        ]);

        foreach ($request->ticketOrder as $key => $value) {
            if ($value['quantity'] > 0) {
                $ticketDistribution = ticket_distribution::find($value['ticket_id']);
                $ticket = ticket::find($ticketDistribution->ticket_id);
                $option = option::find($ticketDistribution->option_id);

                switch ($option->type) {
                    case 'reguler':

                        $price = $ticket->price;

                        reservation_detail::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);

                        break;
                    case 'discount':
                        $price = $ticket->price * (100 - $option->discount) / 100;

                        reservation_detail::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    case 'special_price':
                        $price = $option->special_price;

                        reservation_detail::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    case 'buy_x_get_y':
                        # code...
                        break;
                    case 'cashback':
                        # code...
                        break;
                    case 'others':
                        $price = $ticket->price;

                        reservation_detail::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    default:
                        # code...
                        break;
                }
            }
        };

        return response()->json([
            'reservation_id' => $reservation->id,
            'order_id' => $reservation->order_id
        ]);
    }

    public function createReservationReferral(Request $request) {
        //

        $url_param_string = request('url_param');
        $ciphering = "AES-128-CTR";
        $iv_length = openssl_cipher_iv_length($ciphering);
        $options = 0;
        // $encryption_iv = '3139708993011870';
        // $encryption_key = "@encryptedByZam";
        // $encryption = openssl_encrypt($url_param_string, $ciphering, $encryption_key, $options, $encryption_iv);
        $decryption_iv = '3139708993011870';
        $decryption_key = "@encryptedByZam";
        $decryption = openssl_decrypt ($url_param_string, $ciphering, $decryption_key, $options, $decryption_iv);

        $referrer = referrer::where('name', $decryption)
        ->where('url_param', $url_param_string)
        ->first();

        if($referrer){
            $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate));

            $customer = customer_referral::create([
                'name' => request('name'),
                'phone' => request('phone'),
                'email' => request('email'),
                'address' => request('address'),
            ]);

            $totalBill = 0;

            foreach ($request->ticketOrder as $key => $value) {
                if ($value['quantity'] > 0) {
                    $totalBill += ($value['quantity'] * $value['price']);
                }
            };

            $sex = reservation_referral::count();

            $reservation = reservation_referral::create([
                'customer_id' => $customer->id,
                'sales_id' => $referrer->id,
                'order_id' => 'ref-'.Carbon::now()->format('y').sprintf('%05d', substr(strval($sex), -5)),
                'arrival_date' => $bookingDate,
                'zeals_code' => $request->zeals_code,
                'bill' => $totalBill,
                'status' => "created",
            ]);

            foreach ($request->ticketOrder as $key => $value) {
                if ($value['quantity'] > 0) {
                    $ticketDistribution = ticket_distribution_referral::find($value['ticket_id']);
                    $ticket = ticket_referral::find($ticketDistribution->ticket_id);
                    $option = option_referral::find($ticketDistribution->option_id);

                    switch ($option->type) {
                        case 'reguler':

                            $price = $ticket->price;

                            reservation_detail_referral::create([
                                'reservation_id' => $reservation->id,
                                'ticket_distribution_id' => $value['ticket_id'],
                                'qty' => $value['quantity'],
                                'subtotal' => $price*$value['quantity'],
                            ]);

                            break;
                        case 'discount':
                            $price = $ticket->price * (100 - $option->discount) / 100;

                            reservation_detail_referral::create([
                                'reservation_id' => $reservation->id,
                                'ticket_distribution_id' => $value['ticket_id'],
                                'qty' => $value['quantity'],
                                'subtotal' => $price*$value['quantity'],
                            ]);
                            break;
                        case 'special_price':
                            $price = $option->special_price;

                            reservation_detail_referral::create([
                                'reservation_id' => $reservation->id,
                                'ticket_distribution_id' => $value['ticket_id'],
                                'qty' => $value['quantity'],
                                'subtotal' => $price*$value['quantity'],
                            ]);
                            break;
                        case 'buy_x_get_y':
                            # code...
                            break;
                        case 'cashback':
                            # code...
                            break;
                        case 'others':
                            $price = $ticket->price;

                            reservation_detail_referral::create([
                                'reservation_id' => $reservation->id,
                                'ticket_distribution_id' => $value['ticket_id'],
                                'qty' => $value['quantity'],
                                'subtotal' => $price*$value['quantity'],
                            ]);
                            break;
                        default:
                            # code...
                            break;
                    }
                }
            }

        } else {
            //
            throw new Exception("Error Processing Request", 1);
        }

        return response()->json([
            'reservation_id' => $reservation->id,
            'order_id' => $reservation->order_id,
            'referrer_name' => $referrer->name
        ]);
    }

    public function createReservationGroup(Request $request) {
        //
        $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate));

        $customer = customer_group::create([
            'name' => request('name'),
            'company_name' => request('companyName'),
            'phone' => request('phone'),
            'email' => request('email'),
            'address' => request('address'),
        ]);

        $totalBill = 0;

        foreach ($request->ticketOrder as $key => $value) {
            if ($value['quantity'] > 0) {
                $totalBill += ($value['quantity'] * $value['price']);
            }
        };

        $sex = reservation_group::count();

        $reservation = reservation_group::create([
            'customer_id' => $customer->id,
            'order_id' => "ro-".Carbon::now()->format('y').sprintf('%05d', substr(strval($sex), -5)),
            'arrival_date' => $bookingDate,
            'zeals_code' => $request->zeals_code,
            'bill' => $totalBill,
            'status' => "created",
        ]);

        foreach ($request->ticketOrder as $key => $value) {
            if ($value['quantity'] > 0) {
                $ticketDistribution = ticket_distribution_group::find($value['ticket_id']);
                $ticket = ticket_group::find($ticketDistribution->ticket_id);
                $option = option_group::find($ticketDistribution->option_id);

                switch ($option->type) {
                    case 'reguler':

                        $price = $ticket->price;

                        reservation_detail_group::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);

                        break;
                    case 'discount':
                        $price = $ticket->price * (100 - $option->discount) / 100;

                        $created_reservation_detail = reservation_detail_group::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);

                        if ($ticketDistribution->category_id === 11 || $ticketDistribution->category_id === 12 || $ticketDistribution->id === 26) {
                            $quantity_bonus = floor($created_reservation_detail->qty / 15);
                            reservation_detail_group::create([
                                'reservation_id' => $reservation->id,
                                'ticket_distribution_id' => 24,
                                'qty' => $quantity_bonus*2,
                                'subtotal' => 0,
                            ]);
                        }

                        break;
                    case 'special_price':
                        $price = $option->special_price;

                        reservation_detail_group::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    case 'buy_x_get_y':
                        # code...
                        break;
                    case 'cashback':
                        # code...
                        break;
                    case 'others':
                        $price = $ticket->price;

                        reservation_detail_group::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    default:
                        # code...
                        break;
                }
            }
        };

        return response()->json([
            'reservation_id' => $reservation->id,
            'order_id' => $reservation->order_id
        ]);
    }

    public function createReservationZeals(Request $request) {
        //
        $bookingDate = Carbon::createFromTimestamp(strtotime($request->bookingDate));

        $customer = customer_zeals::create([
            'name' => request('name'),
            'phone' => request('phone'),
            'email' => request('email'),
            'address' => request('address'),
        ]);

        $totalBill = 0;

        foreach ($request->ticketOrder as $key => $value) {
            if ($value['quantity'] > 0) {
                $totalBill += ($value['quantity'] * $value['price']);
            }
        };

        $sex = reservation_zeals::count();

        $reservation = reservation_zeals::create([
            'customer_id' => $customer->id,
            'reservation_option_id' => $request->reservationOptionID,
            'order_id' => "ze-".Carbon::now()->format('y').sprintf('%05d', substr(strval($sex), -5)),
            'arrival_date' => $bookingDate,
            'zeals_code' => $request->zeals_code,
            'bill' => $totalBill,
            'status' => "created",
        ]);

        foreach ($request->ticketOrder as $key => $value) {
            if ($value['quantity'] > 0) {
                $ticketDistribution = ticket_distribution::find($value['ticket_id']);
                $ticket = ticket_zeals::find($ticketDistribution->ticket_id);
                $option = option_zeals::find($ticketDistribution->option_id);

                switch ($option->type) {
                    case 'reguler':

                        $price = $ticket->price;

                        reservation_detail_zeals::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);

                        break;
                    case 'discount':
                        $price = $ticket->price * (100 - $option->discount) / 100;

                        reservation_detail_zeals::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    case 'special_price':
                        $price = $option->special_price;

                        reservation_detail_zeals::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    case 'buy_x_get_y':
                        # code...
                        break;
                    case 'cashback':
                        # code...
                        break;
                    case 'others':
                        $price = $ticket->price;

                        reservation_detail_zeals::create([
                            'reservation_id' => $reservation->id,
                            'ticket_distribution_id' => $value['ticket_id'],
                            'qty' => $value['quantity'],
                            'subtotal' => $price*$value['quantity'],
                        ]);
                        break;
                    default:
                        # code...
                        break;
                }
            }
        };

        return response()->json([
            'reservation_id' => $reservation->id,
            'order_id' => $reservation->order_id
        ]);
    }

    public function getReservationByEmail(Request $request) {
        //
        $customerIDs = customer::where('email', $request->email)
        ->pluck('id');
        $customerGroupIDs = customer_group::where('email', $request->email)
        ->pluck('id');
        $customerZealsIDs = customer_zeals::where('email', $request->email)
        ->pluck('id');

        $reservations = reservation::whereIn('customer_id', $customerIDs)
        ->where('status', '!=', 'created')
        ->orderBy('created_at', 'desc')
        ->limit(5)
        ->get();
        $reservationsGroup = reservation_group::whereIn('customer_id', $customerGroupIDs)
        ->where('status', '!=', 'created')
        ->orderBy('created_at', 'desc')
        ->limit(5)
        ->get();
        $reservationsZeals = reservation_zeals::whereIn('customer_id', $customerZealsIDs)
        ->where('status', '!=', 'created')
        ->orderBy('created_at', 'desc')
        ->limit(5)
        ->get();

        return response()->json([
            'reservations' => $reservations,
            'reservationsGroup' => $reservationsGroup,
            'reservationsZeals' => $reservationsZeals,
        ]);

    }

    public function getReservationDetail(Request $request) {

        if ($request->type === 'reguler') {
            $reservation = reservation::find($request->id);
            $reservationDetail = reservation_detail::where('reservation_id', $request->id)->get();
            $customer = customer::find($reservation->customer_id);

            foreach ($reservationDetail as $key =>$value) {
                $ticketDistribution = ticket_distribution::find($value->ticket_distribution_id);
                $ticket = ticket::find($ticketDistribution->ticket_id);
                $value->name = $ticket->name;
            }

        }elseif ($request->type === 'group') {
            $reservation = reservation_group::find($request->id);
            $reservationDetail = reservation_detail_group::where('reservation_id', $request->id)->get();
            $customer = customer_group::find($reservation->customer_id);

            foreach ($reservationDetail as $key =>$value) {
                $ticketDistribution = ticket_distribution_group::find($value->ticket_distribution_id);
                $ticket = ticket_group::find($ticketDistribution->ticket_id);
                $value->name = $ticket->name;
            }

        } elseif ($request->type === 'zeals') {
            $reservation = reservation_zeals::find($request->id);
            $reservationDetail = reservation_detail_zeals::where('reservation_id', $request->id)->get();
            $customer = customer_zeals::find($reservation->customer_id);

            foreach ($reservationDetail as $key =>$value) {
                $ticketDistribution = ticket_distribution_zeals::find($value->ticket_distribution_id);
                $ticket = ticket_zeals::find($ticketDistribution->ticket_id);
                $value->name = $ticket->name;
            }
        }

        return response()->json([
            'reservation' => $reservation,
            'reservationDetail' => $reservationDetail,
            'customer' => $customer,
        ]);
    }

    public function getReservationByOrderID(Request $request) {
        //
        $reservation = reservation::where('order_id', $request->orderID)->first();
        $reservationDetail = reservation_detail::where('reservation_id', $request->orderID)->get();
        $customer = customer::find($reservation->customer_id);

        foreach ($reservationDetail as $key =>$value) {
            $ticketDistribution = ticket_distribution::find($value->ticket_distribution_id);
            $ticket = ticket::find($ticketDistribution->ticket_id);
            $value->name = $ticket->name;
        }

        return response()->json([
            'reservation' => $reservation,
            'reservationDetail' => $reservationDetail,
            'customer' => $customer,
        ]);
    }
}
