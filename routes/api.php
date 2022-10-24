<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\MidtransController;
use App\Http\Controllers\API\TicketController;
use App\Http\Controllers\API\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//midtrans
Route::post('get-midtrans-token', [MidtransController::class, 'getTransactionToken']);
Route::post('get-midtrans-transaction-status', [MidtransController::class, 'getMidtransTransactionStatus']);
Route::post('cancel-midtrans-transaction', [MidtransController::class, 'cancelMidtransTransaction']);
Route::post('notification-handler', [MidtransController::class, 'midtransNotificationHandler']);

//Ticket
Route::post('get-ticket-date', [TicketController::class, 'getTicketDate']);

//Reservation
Route::post('create-reservation', [ReservationController::class, 'createReservation']);
Route::post('get-reservation-by-email', [ReservationController::class, 'getReservationByEmail']);
Route::post('get-reservation-detail', [ReservationController::class, 'getReservationDetail']);
