<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\survey_customer;
use App\Models\survey_satisfaction;
use App\Models\survey_visit;

class SurveyController extends Controller
{
    //
    public function storeCustomer(Request $request){
        //
        $stored_customer = survey_customer::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);

        return response()->json([
            'customer' => $stored_customer,
        ]);
    }
    public function storeSatisfaction(Request $request){
        //
        $stored_satisfaction = survey_satisfaction::create([
            'owner' => $request->owner,
            'rides' => $request->rides,
            'facilities' => $request->facilities,
            'hospitality' => $request->hospitality,
            'services' => $request->services,
            'equivalence' => $request->equivalence,
            'notes' => $request->notes,
        ]);
    }
    public function storeVisit(Request $request){
        //
        $stored_visit = survey_visit::create([
            'owner' => $request->owner,
            'frequency' => $request->frequency,
            'referal' => $request->referal,
            'isRecommended' => $request->isRecommended,
            'notes' => $request->notes,
        ]);

        $customer = survey_customer::find($request->owner);

        return response()->json([
            'customer' => $customer->name,
        ]);
    }
}
