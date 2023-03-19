<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\FrontEndMidtransController;
use App\Http\Controllers\API\FrontEndTicketController;
use App\Http\Controllers\API\FrontEndZealsTicketController;
use App\Http\Controllers\API\FrontEndReservationController;
use App\Http\Controllers\API\ContentController;
use App\Http\Controllers\API\visitorController;
use App\Http\Controllers\API\SurveyController;

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
//survey
Route::post('store-customer', [SurveyController::class, 'storeCustomer']);
Route::post('store-satisfaction', [SurveyController::class, 'storeSatisfaction']);
Route::post('store-visit', [SurveyController::class, 'storeVisit']);
//visitor
Route::post('add-visitor', [visitorController::class, 'addVisitor']);
Route::post('get-visitor', [visitorController::class, 'getVisitor']);

//get location
Route::get('get-province', [ContentController::class, 'getProvince']);
Route::post('get-regency', [ContentController::class, 'getRegency']);

//weather
Route::get('get-weather-now', [ContentController::class, 'getWeatherNow']);

//midtrans
Route::post('get-midtrans-token', [FrontEndMidtransController::class, 'getTransactionToken']);
Route::post('get-midtrans-token-zeals', [FrontEndMidtransController::class, 'getTransactionTokenZeals']);
Route::post('get-midtrans-token-group', [FrontEndMidtransController::class, 'getTransactionTokenGroup']);
Route::post('get-midtrans-transaction-status', [FrontEndMidtransController::class, 'getMidtransTransactionStatus']);
Route::post('cancel-midtrans-transaction', [FrontEndMidtransController::class, 'cancelMidtransTransaction']);
Route::post('notification-handler', [FrontEndMidtransController::class, 'midtransNotificationHandler']);
Route::post('test-botmail-group', [FrontEndMidtransController::class, 'testBotmailGroup']);

//Ticket
Route::post('get-ticket-date', [FrontEndTicketController::class, 'getTicketDate']);
Route::post('get-ticket-date-promo', [FrontEndTicketController::class, 'getTicketDatePromo']);
Route::post('get-ticket-date-group', [FrontEndTicketController::class, 'getTicketDateGroup']);
Route::post('get-ticket-date-roadshow', [FrontEndTicketController::class, 'getTicketDateRoadshow']);
Route::post('get-ticket-date-zeals', [FrontEndZealsTicketController::class, 'getTicketDate']);
Route::post('get-ticket-date-zeals-reguler', [FrontEndZealsTicketController::class, 'getTicketDateReguler']);

//Reservation
Route::post('create-reservation', [FrontEndReservationController::class, 'createReservation']);
Route::post('create-reservation-zeals', [FrontEndReservationController::class, 'createReservationZeals']);
Route::post('create-reservation-group', [FrontEndReservationController::class, 'createReservationGroup']);
Route::post('get-reservation-by-email', [FrontEndReservationController::class, 'getReservationByEmail']);
Route::post('get-reservation-by-order-id', [FrontEndReservationController::class, 'getReservationByOrderID']);
Route::post('get-reservation-detail', [FrontEndReservationController::class, 'getReservationDetail']);

//CMS Zona
Route::get('get-content-peta', [ContentController::class, 'getContentPeta']);
Route::get('download-peta/{filename}', [ContentController::class, 'downloadPeta']);
//CMS Restaurant
Route::get('get-content-restaurant', [ContentController::class, 'getContentRestaurant']);
Route::post('get-content-rekomendasi-restaurant', [ContentController::class, 'getContentRekomendasiRestaurant']);
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
