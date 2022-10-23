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

class ReservationController extends Controller
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

        $reservation = reservation::create([
            'customer_id' => $customer->id,
            'order_id' => request('orderID'),
            'arrival_date' => $bookingDate,
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
        ]);
    }

    public function getReservationByEmail(Request $request) {
        //
        $customerIDs = customer::where('email', $request->email)
        ->pluck('id');

        $reservations = reservation::whereIn('customer_id', $customerIDs)
        ->get();

        return response()->json([
            'reservations' => $reservations,
        ]);

    }
}
