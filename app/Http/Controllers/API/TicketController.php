<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\ticket;
use App\Models\ticket_distribution;
use App\Models\stock;
use App\Models\option;

class TicketController extends Controller
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

        $ticketEvent = ticket_distribution::where('category_id', '!=', 1)
        ->where('date_start', '>=', $bookingDate)
        ->where('date_end', '<=', $bookingDate)
        ->get();

        foreach ($ticketEvent as $value) {
            $stock = stock::where('ticket_id', $value->ticket_id)->value('stock');

            if ($stock > 0) {

                $ticket = ticket::find($value->ticket_id);
                $option = option::find($value->option_id);

                $value->name = $ticket->name;
                $value->price = $ticket->price;
                $value->description = $option->description;

            }
        }

        return response()->json([
            'ticketReguler' => $ticketReguler,
            'ticketEvent' => $ticketEvent,
        ]);
    }
}
