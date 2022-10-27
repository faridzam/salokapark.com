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
    return Inertia::location('http://localhost:8000/ticket');

    //whole site
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
})->name('welcome');

Route::get('/ticket', function () {
    return Inertia::render('Ticket/Ticket');
})->name('ticket');

Route::get('/ticket/data-pemesan', function () {
    return Inertia::render('Ticket/DataPemesan');
})->name('dataPemesan');

Route::get('/ticket/konfirmasi-pembayaran', function () {
    return Inertia::render('Ticket/KonfirmasiPembayaran');
})->name('konfirmasiPembayaran');

// Route::get('/ticket/finished-transaction', function () {
//     return Inertia::render('Ticket/FinishedTransaction');
// })->name('finishedTransaction');

Route::get('/ticket/check-status', function () {
    return Inertia::render('Ticket/CheckStatus');
})->name('checkStatus');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
