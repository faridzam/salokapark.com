<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\ticket;
use App\Models\ticket_group;
use App\Models\ticket_distribution;
use App\Models\ticket_distribution_group;
use App\Models\stock;
use App\Models\stock_group;
use App\Models\option;
use App\Models\option_group;

class FrontEndTicketController extends Controller
{
    public function getTicketDate(Request $request) {
        //

        $bookingDate = Carbon::createFromTimestamp(strtotime($request->date));

        //get reguler ticket
        if ($bookingDate->isWeekday()) {
            $ticketReguler = ticket_distribution::where('category_id', 1)
            ->where('option_id', 1)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        } elseif ($bookingDate->isWeekend()) {
            $ticketReguler = ticket_distribution::where('category_id', 1)
            ->where('option_id', 2)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        }

        $ticketEvent = ticket_distribution::whereNotIn('category_id', [1, 9, 10])
        ->where('date_start', '<=', $bookingDate)
        ->where('date_end', '>=', $bookingDate)
        ->get();

        foreach ($ticketEvent as $key => $value) {
            $stock = stock::where('ticket_id', $value->ticket_id)->value('stock');

            if ($stock > 0) {

                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

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

            if($value->category_id === 2) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    // clear this unset to show event ticket
                    unset($ticketEvent[$key]);
                } else {
                    unset($ticketEvent[$key]);
                }
            };

            // certain day
            if($value->category_id === 3){
                $ticketReguler = [];
            }

            // certain day
            if ($value->category_id === 4) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    $ticketReguler = [];
                } else {
                    unset($ticketEvent[$key]);
                }
            };

            // Ramadhan
            if ($value->category_id === 11) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    $ticketReguler = [];
                } else {
                    $ticketReguler = [];
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

    public function getTicketDatePromo(Request $request) {
        //

        $bookingDate = Carbon::createFromTimestamp(strtotime($request->date));

        //get reguler ticket
        // if ($bookingDate->isWeekday()) {
        //     $ticketReguler = ticket_distribution::where('category_id', 1)
        //     ->where('option_id', 1)
        //     ->get();

        //     foreach ($ticketReguler as $value) {
        //         $ticket = ticket::find($value->ticket_id);
        //         $option = option::find($value->option_id);

        //         $value->name = $ticket->name;
        //         $value->price = $ticket->price;
        //         $value->description = $option->description;
        //     }
        // } elseif ($bookingDate->isWeekend()) {
        //     $ticketReguler = ticket_distribution::where('category_id', 1)
        //     ->where('option_id', 2)
        //     ->get();

        //     foreach ($ticketReguler as $value) {
        //         $ticket = ticket::find($value->ticket_id);
        //         $option = option::find($value->option_id);

        //         $value->name = $ticket->name;
        //         $value->price = $ticket->price;
        //         $value->description = $option->description;
        //     }
        // }
        $ticketReguler = [];

        $ticketEvent = ticket_distribution::where('category_id', '!=', 1)
        ->where('category_id', '!=', 9)
        ->where('category_id', '!=', 10)
        ->where('date_start', '<=', $bookingDate)
        ->where('date_end', '>=', $bookingDate)
        ->get();

        foreach ($ticketEvent as $key => $value) {
            $stock = stock::where('ticket_id', $value->ticket_id)->value('stock');

            if ($stock > 0) {

                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

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

            if($value->category_id === 2) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    //
                } else {
                    unset($ticketEvent[$key]);
                }
            };

            // certain day
            if($value->category_id === 3){
                $ticketReguler = [];
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

    public function getTicketDateRoadshow(Request $request) {
        //

        $bookingDate = Carbon::createFromTimestamp(strtotime($request->date));

        //get reguler ticket
        if ($bookingDate->isWeekday()) {
            $ticketReguler = ticket_distribution::where('ticket_id', 14)
            ->where('category_id', 9)
            ->where('option_id', 13)
            ->where('date_start', '<=', $bookingDate)
            ->where('date_end', '>=', $bookingDate)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        } elseif ($bookingDate->isWeekend()) {
            $ticketReguler = ticket_distribution::where('ticket_id', 15)
            ->where('category_id', 9)
            ->where('option_id', 14)
            ->where('date_start', '<=', $bookingDate)
            ->where('date_end', '>=', $bookingDate)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        }

        $ticketEvent = [];

        return response()->json([
            'ticketReguler' => $ticketReguler,
            'ticketEvent' => $ticketEvent,
        ]);
    }

    public function getTicketDateGroup(Request $request) {
        //

        $bookingDate = Carbon::createFromTimestamp(strtotime($request->date));

        //get reguler ticket
        if ($bookingDate->isWeekday()) {
            $ticketReguler = ticket_distribution_group::where('ticket_id', 16)
            ->where('category_id', 10)
            ->where('option_id', 15)
            ->where('date_start', '<=', $bookingDate)
            ->where('date_end', '>=', $bookingDate)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket_group::find($value->ticket_id);
                $option = option_group::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        } elseif ($bookingDate->isWeekend()) {
            $ticketReguler = ticket_distribution_group::where('ticket_id', 17)
            ->where('category_id', 10)
            ->where('option_id', 16)
            ->where('date_start', '<=', $bookingDate)
            ->where('date_end', '>=', $bookingDate)
            ->get();

            foreach ($ticketReguler as $value) {
                $ticket = ticket_group::find($value->ticket_id);
                $option = option_group::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;
            }
        }

        $ticketEvent = ticket_distribution_group::whereNotIn('category_id', [1, 9, 10, 12])
        ->where('date_start', '<=', $bookingDate)
        ->where('date_end', '>=', $bookingDate)
        ->get();

        foreach ($ticketEvent as $key => $value) {
            $stock = stock_group::where('ticket_id', $value->ticket_id)->value('stock');

            if ($stock > 0) {

                $ticket = ticket_group::find($value->ticket_id);
                $option = option_group::find($value->option_id);

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

            if($value->category_id === 2) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    // clear this unset to show event ticket
                    unset($ticketEvent[$key]);
                } else {
                    unset($ticketEvent[$key]);
                }
            };

            // certain day
            if($value->category_id === 3){
                $ticketReguler = [];
            }

            // certain day
            if ($value->category_id === 4) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    $ticketReguler = [];
                } else {
                    unset($ticketEvent[$key]);
                }
            };

            // Ramadhan
            if ($value->category_id === 11) {
                if (in_array($bookingDate->dayOfWeekIso, unserialize($value->days))) {
                    $ticketReguler = [];
                } else {
                    $ticketReguler = [];
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
}
