<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\customer;
use App\Models\reservation;
use App\Models\reservation_detail;
use App\Models\ticket_distribution;
use App\Models\ticket;
use App\Models\option;

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

    public function getReservationByEmail(Request $request) {
        //
        $customerIDs = customer::where('email', $request->email)
        ->pluck('id');

        $reservations = reservation::whereIn('customer_id', $customerIDs)
        ->where('status', '!=', 'created')
        ->orderBy('created_at', 'desc')
        ->limit(5)
        ->get();

        return response()->json([
            'reservations' => $reservations,
        ]);

    }

    public function getReservationDetail(Request $request) {

        $reservation = reservation::find($request->id);
        $reservationDetail = reservation_detail::where('reservation_id', $request->id)->get();
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
