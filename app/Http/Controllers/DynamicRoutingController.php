<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Crypt;

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
    public function renderLandscapeComponent(Request $request, $slugs) {
        //
        return Inertia::render("Landscape/Landscape", [
            'slugs' => $slugs,
        ]);
    }
    public function renderAnimalComponent(Request $request, $slugs) {
        //
        return Inertia::render("Animal/Animal", [
            'slugs' => $slugs,
        ]);
    }
    public function renderZealsTicket(Request $request, $slugs) {
        //
        return Inertia::render("ZealsTicket/SalokaTicket", [
            'id_zeals' => $slugs,
        ]);
    }
}
