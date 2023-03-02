<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\ticket_zeals;
use App\Models\ticket_distribution_zeals;
use App\Models\stock_zeals;
use App\Models\option_zeals;

class FrontEndZealsTicketController extends Controller
{
    public function getTicketDate(Request $request) {
        //

        $bookingDate = Carbon::createFromTimestamp(strtotime($request->date));

        //get reguler ticket
        if ($bookingDate->isWeekday()) {
            $ticketReguler = ticket_distribution_zeals::where('category_id', 1)
            ->where('option_id', 1)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket_zeals::find($value->ticket_id);
                $option = option_zeals::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        } elseif ($bookingDate->isWeekend()) {
            $ticketReguler = ticket_distribution_zeals::where('category_id', 1)
            ->where('option_id', 2)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket_zeals::find($value->ticket_id);
                $option = option_zeals::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        }

        $ticketEvent = ticket_distribution_zeals::where('category_id', '!=', 1)
        ->where('slugs_id', $request->id)
        ->where('date_start', '<=', $bookingDate)
        ->where('date_end', '>=', $bookingDate)
        ->get();

        foreach ($ticketEvent as $key => $value) {
            $stock = stock_zeals::where('ticket_id', $value->ticket_id)->value('stock');

            // certain day
            if($value->category_id === 3){
                $ticketReguler = [];
            }

            if ($stock > 0) {

                $ticket = ticket_zeals::find($value->ticket_id);
                $option = option_zeals::find($value->option_id);

                $value->name = $ticket->name;

                #price-option
                // $value->price = $ticket->price;
                if ($option->type === 'special_price') {
                    $value->price = $option->special_price;
                } elseif ($option->type === 'discount') {
                    $value->price = round($ticket->price * (100-$option->discount) / 100, -3);
                } else {
                    $value->price = $ticket->price;
                }

                $value->description = $option->description;

            }

            // certain day
            if ($value->category_id === 4) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    $ticketReguler = [];
                } else {
                    unset($ticketEvent[$key]);
                }
            };

        }

        $ticketEvent = $ticketEvent->values();

        return response()->json([
            'ticketReguler' => $ticketReguler,
            'ticketEvent' => $ticketEvent,
        ]);
    }
    
    public function getTicketDateReguler(Request $request) {
        //

        $bookingDate = Carbon::createFromTimestamp(strtotime($request->date));

        //get reguler ticket
        if ($bookingDate->isWeekday()) {
            $ticketReguler = ticket_distribution_zeals::where('category_id', 1)
            ->where('option_id', 10)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket_zeals::find($value->ticket_id);
                $option = option_zeals::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        } elseif ($bookingDate->isWeekend()) {
            $ticketReguler = ticket_distribution_zeals::where('category_id', 1)
            ->where('option_id', 11)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket_zeals::find($value->ticket_id);
                $option = option_zeals::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        }

        $ticketEvent = [];

        // $ticketEvent = ticket_distribution_zeals::where('category_id', '!=', 1)
        // ->where('slugs_id', $request->id)
        // ->where('date_start', '<=', $bookingDate)
        // ->where('date_end', '>=', $bookingDate)
        // ->get();

        // foreach ($ticketEvent as $key => $value) {
        //     $stock = stock_zeals::where('ticket_id', $value->ticket_id)->value('stock');

        //     // certain day
        //     if($value->category_id === 3){
        //         $ticketReguler = [];
        //     }

        //     if ($stock > 0) {

        //         $ticket = ticket_zeals::find($value->ticket_id);
        //         $option = option_zeals::find($value->option_id);

        //         $value->name = $ticket->name;

        //         #price-option
        //         // $value->price = $ticket->price;
        //         if ($option->type === 'special_price') {
        //             $value->price = $option->special_price;
        //         } elseif ($option->type === 'discount') {
        //             $value->price = round($ticket->price * (100-$option->discount) / 100, -3);
        //         } else {
        //             $value->price = $ticket->price;
        //         }

        //         $value->description = $option->description;

        //     }

        //     // certain day
        //     if ($value->category_id === 4) {
        //         if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
        //             $ticketReguler = [];
        //         } else {
        //             unset($ticketEvent[$key]);
        //         }
        //     };

        // }

        // $ticketEvent = $ticketEvent->values();

        return response()->json([
            'ticketReguler' => $ticketReguler,
            'ticketEvent' => $ticketEvent,
        ]);
    }
}
