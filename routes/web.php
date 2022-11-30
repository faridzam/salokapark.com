<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DynamicRoutingController;
use App\Meta;

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

    Meta::addMeta('title', 'saloka theme park');
    Meta::addMeta('description', 'saloka theme park, taman bermain terbaik dan terbesar di jawa tengah');
    Meta::addMeta('keyword', 'saloka theme park, saloka, theme park, taman bermain, jawa tengah, wahana');
    //only ticket webdev
    // return Inertia::location('https://webdev.salokapark.com/ticket');
    //only ticket local
    return Inertia::location('http://localhost:8000/ticket');
    //whole site
    // return Inertia::render('Welcome');
})->name('welcome');

// Ticket
Route::get('/ticket', function () {
    Meta::addMeta('title', 'saloka theme park - tiket');
    Meta::addMeta('description', 'pesan tiket taman bermain saloka theme park dan bermain sepuasnya bersama keluarga.');
    Meta::addMeta('keyword', 'saloka theme park, saloka, theme park, tiket saloka, pesan tiket saloka');
    return Inertia::render('Ticket/Ticket');
})->name('ticket');

Route::get('/ticket/pilih-ticket', function () {
    return Inertia::render('Ticket/SalokaTicket');
})->name('pilihTicket');

Route::get('/ticket/data-pemesan', function () {
    return Inertia::render('Ticket/DataPemesan');
})->name('dataPemesan');

Route::get('/ticket/konfirmasi-pembayaran', function () {
    return Inertia::render('Ticket/KonfirmasiPembayaran');
})->name('konfirmasiPembayaran');

Route::get('/ticket/check-status', function () {
    Meta::addMeta('title', 'saloka theme park - cek status pemesanan');
    Meta::addMeta('description', 'check saloka theme park ticket reservation payment status / cek status pemesanan tiket saloka theme park');
    return Inertia::render('Ticket/CheckStatus');
})->name('checkStatus');

// Promotion
Route::get('/promosi', function () {
    Meta::addMeta('title', 'saloka theme park - promosi');
    Meta::addMeta('description', 'saloka theme park event, show & promotion / promosi, pertunjukan, dan event di saloka theme park');
    return Inertia::render('Promotion/Promotion');
})->name('promotion');

// Zone
Route::get('/zona', function () {
    Meta::addMeta('title', 'saloka theme park - zona');
    Meta::addMeta('description', 'maps and zone in saloka theme park / peta dan zona di saloka theme park');
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
