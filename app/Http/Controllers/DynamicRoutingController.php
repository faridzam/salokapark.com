<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

class DynamicRoutingController extends Controller
{
    //
    public function renderDetailComponent(Request $request, $category, $slugs) {
        //
        return Inertia::render("details/".$category, [
            'category' => $category,
            'slugs' => $slugs,
        ]);
    }
}
