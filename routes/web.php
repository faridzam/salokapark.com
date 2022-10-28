<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome');
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
