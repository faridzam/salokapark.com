<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\FrontEndMidtransController;
use App\Http\Controllers\API\FrontEndTicketController;
use App\Http\Controllers\API\FrontEndReservationController;

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
Route::post('get-midtrans-token', [FrontEndMidtransController::class, 'getTransactionToken']);
Route::post('get-midtrans-transaction-status', [FrontEndMidtransController::class, 'getMidtransTransactionStatus']);
Route::post('cancel-midtrans-transaction', [FrontEndMidtransController::class, 'cancelMidtransTransaction']);
Route::post('notification-handler', [FrontEndMidtransController::class, 'midtransNotificationHandler']);

//Ticket
Route::post('get-ticket-date', [FrontEndTicketController::class, 'getTicketDate']);

//Reservation
Route::post('create-reservation', [FrontEndReservationController::class, 'createReservation']);
Route::post('get-reservation-by-email', [FrontEndReservationController::class, 'getReservationByEmail']);
Route::post('get-reservation-by-order-id', [FrontEndReservationController::class, 'getReservationByOrderID']);
Route::post('get-reservation-detail', [FrontEndReservationController::class, 'getReservationDetail']);
