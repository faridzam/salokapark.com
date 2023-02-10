<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\FrontEndMidtransController;
use App\Http\Controllers\API\FrontEndTicketController;
use App\Http\Controllers\API\FrontEndReservationController;
use App\Http\Controllers\API\ContentController;

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

//CMS Zona
Route::get('get-content-peta', [ContentController::class, 'getContentPeta']);
Route::get('download-peta/{filename}', [ContentController::class, 'downloadPeta']);
//CMS Restaurant
Route::get('get-content-restaurant', [ContentController::class, 'getContentRestaurant']);
Route::get('get-content-restaurant-banner', [ContentController::class, 'getContentRestaurantBanner']);
Route::post('get-content-restaurant-detail', [ContentController::class, 'getContentRestaurantDetail']);
//CMS Merchandise
Route::get('get-content-merchandise', [ContentController::class, 'getContentMerchandise']);
Route::post('get-content-merchandise-zona', [ContentController::class, 'getContentMerchandiseZona']);
Route::post('get-content-merchandise-detail', [ContentController::class, 'getContentMerchandiseDetail']);
//CMS Faqs
Route::get('get-content-faqs', [ContentController::class, 'getContentFaqs']);
//CMS Zones
Route::get('get-content-zones', [ContentController::class, 'getContentZones']);
Route::post('get-content-rekomendasi-zona', [ContentController::class, 'getContentRekomendasiZona']);
Route::post('get-content-zones-detail', [ContentController::class, 'getContentZonesDetail']);
//CMS promo
Route::get('get-content-promo', [ContentController::class, 'getContentPromo']);
Route::get('get-content-promo-banner', [ContentController::class, 'getContentPromoBanner']);
Route::post('get-content-promo-detail', [ContentController::class, 'getContentPromoDetail']);
//CMS promo event
Route::get('get-content-promoEvent', [ContentController::class, 'getContentPromoEvent']);
//CMS show event
Route::get('get-content-showEvent', [ContentController::class, 'getContentShowEvent']);
Route::get('get-content-showEvent-banner', [ContentController::class, 'getContentShowEventBanner']);
Route::post('get-content-showEvent-detail', [ContentController::class, 'getContentShowEventDetail']);
//CMS Rombongan
Route::get('get-content-group', [ContentController::class, 'getContentGroup']);
Route::get('get-content-group-banner', [ContentController::class, 'getContentGroupBanner']);
Route::get('get-content-group-faqs', [ContentController::class, 'getContentGroupFaqs']);
//CMS Wahana
Route::post('get-content-wahana', [ContentController::class, 'getContentWahana']);
