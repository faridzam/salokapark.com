<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DynamicRoutingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    //only ticket
    // return Inertia::location('https://webdev.salokapark.com/ticket');
    // return Inertia::location('http://localhost:8000/ticket');

    //whole site
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

// Ticket
Route::get('/ticket', function () {
    return Inertia::render('Ticket/Ticket');
})->name('ticket');

Route::get('/ticket/data-pemesan', function () {
    return Inertia::render('Ticket/DataPemesan');
})->name('dataPemesan');

Route::get('/ticket/konfirmasi-pembayaran', function () {
    return Inertia::render('Ticket/KonfirmasiPembayaran');
})->name('konfirmasiPembayaran');

Route::get('/ticket/check-status', function () {
    return Inertia::render('Ticket/CheckStatus');
})->name('checkStatus');

// Promotion
Route::get('/promosi', function () {
    return Inertia::render('Promotion/Promotion');
})->name('promotion');

// Zone
Route::get('/zona', function () {
    return Inertia::render('Zone/Zone');
})->name('zone');

// Show & Event
Route::get('/show-event', function () {
    return Inertia::render('ShowEvent/ShowEvent');
})->name('showEvent');

// Restaurant
Route::get('/restaurant', function () {
    return Inertia::render('Restaurant/Restaurant');
})->name('restaurant');

// Restaurant
Route::get('/merchandise', function () {
    return Inertia::render('Merchandise/Merchandise');
})->name('merchandise');

// About
Route::get('/tentang', function () {
    return Inertia::render('About/About');
})->name('about');

// Dynamic Routing
Route::get('/{category}/{slugs}', [DynamicRoutingController::class, 'renderDetailComponent']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
