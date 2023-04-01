<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

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
        $satisfaction = survey_satisfaction::where('owner', $request->owner)->first();

        $client = new Client([
            'headers' => [
                'Accept' => 'application/json',
                'content-type' => 'application/json'
            ],
        ]);

        $response = $client->post('http://192.168.0.75:8000/api/InsertSurvey', [
            'json' => [
                "customers" => [
                    "idUser" => $customer->id,
                    "name" => $customer->name,
                    "phone" => $customer->phone,
                    "address" => $customer->address
                ],
                "statisfactions" => [
                    "rides" => $satisfaction->rides,
                    "facilities" => $satisfaction->facilities,
                    "hospitality" => $satisfaction->hospitality,
                    "services" => $satisfaction->services,
                    "equivalence" => $satisfaction->equivalence,
                    "notes" => $satisfaction->notes
                ],
                "visits" => [
                    "frequency" => $stored_visit->frequency,
                    "referal" => $stored_visit->referal,
                    "isRecommended" => $stored_visit->isRecommended,
                    "notes" => $stored_visit->notes
                ],
            ]
        ]);

        // $response = Http::withoutVerifying()
        // ->withOptions([
        //     'headers' => ['Content-Type' => 'application/json'],
        //     "verify" => false
        // ])
        // ->post('https://surveyops.salokapark.app/api/InsertSurvey', [
        //     "customers" => [
        //         "idUser" => $customer->id,
        //         "name" => $customer->name,
        //         "phone" => $customer->phone,
        //         "address" => $customer->address
        //     ],
        //     "statisfactions" => [
        //         "rides" => $satisfaction->rides,
        //         "facilities" => $satisfaction->facilities,
        //         "hospitality" => $satisfaction->hospitality,
        //         "services" => $satisfaction->services,
        //         "equivalence" => $satisfaction->equivalence,
        //         "notes" => $satisfaction->notes
        //     ],
        //     "visits" => [
        //         "frequency" => $stored_visit->frequency,
        //         "referal" => $stored_visit->referal,
        //         "isRecommended" => $stored_visit->isRecommended,
        //         "notes" => $stored_visit->notes
        //     ],
        // ]);

        return response()->json([
            'customer' => $customer->name,
            'response' => $response->getBody(),
        ]);
    }
}
