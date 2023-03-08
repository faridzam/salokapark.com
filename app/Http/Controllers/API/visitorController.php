<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\visitor;

class visitorController extends Controller
{
    public function addVisitor(Request $request){
        //
        $visitors = visitor::where('page', $request->page)->first();
        $visitors->qty += 1;
        $visitors->update();
    }

    public function getVisitor(Request $request){
        //
        $visitors = visitor::where('page', $request->page)->first();

        return response()->json([
            'visitor' => $visitors,
        ]);
    }
}
