<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;

class ContentController extends Controller
{

    public function getProvince(Request $request){
        //
        $client = new Client();
        $response = $client->get('https://api.goapi.id/v1/regional/provinsi', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept'     => 'application/json',
                'X-API-KEY' => 'IGeq0jGC8BEQOTa4PFDRiMY94Vdt7w',
            ],
        ]);

        return response()->json([
            'status' => json_decode($response->getBody()),
        ]);
    }
    public function getRegency(Request $request){
        //
        $client = new Client();
        $url = 'https://api.goapi.id/v1/regional/kota?provinsi_id='.$request->province_id;
        $response = $client->get($url, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept'     => 'application/json',
                'X-API-KEY' => 'IGeq0jGC8BEQOTa4PFDRiMY94Vdt7w',
            ],
        ]);

        return response()->json([
            'status' => json_decode($response->getBody()),
        ]);
    }
    
    public function getWeatherNow(Request $request){
        //
        $client = new Client();
        $response = $client->get('https://api.open-meteo.com/v1/forecast?latitude=-7.2807&longitude=110.4596&current_weather=true&timezone=Asia%2FBangkok', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept'     => 'application/json',
            ],
        ]);

        return response()->json([
            'status' => json_decode($response->getBody()),
        ]);
    }
    public function getContentPeta(Request $request){
        //
        $image = DB::table('petas')->latest()->value('gambar');
        $pdf = DB::table('petas')->latest()->value('pdf');

        return response()->json([
            'image' => $image,
            'pdf' => $pdf,
        ]);
    }

    public function downloadPeta(Request $request, $filename){

        $name = 'peta_saloka.pdf';
        $tempFile = tempnam(sys_get_temp_dir(), $name);
        copy('https://dashboard.salokapark.com/public/peta/'.$filename, $tempFile);

        return response()->download($tempFile, $name);

    }

    public function getContentRestaurant(Request $request){
        //
        $restos = DB::table('daftar_restos')->where('status', 1)->orderBy('nourut', 'asc')->get();

        return response()->json([
            'restos' => $restos,
        ]);
    }
    
    public function getContentMerchandise(Request $request){
        //
        $merchandise = DB::table('daftar_souvenirs')->orderBy('nourut', 'asc')->get();

        return response()->json([
            'merchandise' => $merchandise,
        ]);
    }
    
    public function getContentFaqs(Request $request){
        //
        $faqs = DB::table('faqs')->orderBy('no_urut', 'asc')->get();

        return response()->json([
            'faqs' => $faqs,
        ]);
    }

    public function getContentZones(Request $request){
        //
        $zones = DB::table('zonas')->orderBy('no_urut', 'asc')->get();

        return response()->json([
            'zones' => $zones,
        ]);
    }
    public function getContentPromo(Request $request){
        //
        $promo = DB::table('promosi_lists')->where('type', "Promosi")->orderBy('no_urut', 'asc')->get();

        return response()->json([
            'promo' => $promo,
        ]);
    }
    public function getContentPromoEvent(Request $request){
        //
        $promo = DB::table('promosi_lists')->where('type', "Promosi Event")->orderBy('no_urut', 'asc')->get();

        return response()->json([
            'promo' => $promo,
        ]);
    }
    public function getContentShowEvent(Request $request){
        //
        $showEvent = DB::table('event_lists')->orderBy('no_urut', 'asc')->get();

        return response()->json([
            'showEvent' => $showEvent,
        ]);
    }
    public function getContentGroup(Request $request){
        //
        $group = DB::table('group_lists')->orderBy('nourut', 'asc')->get();

        return response()->json([
            'group' => $group,
        ]);
    }
    public function getContentGroupFaqs(Request $request){
        //
        $faqs = DB::table('group_faqs')->orderBy('no_urut', 'asc')->get();

        return response()->json([
            'faqs' => $faqs,
        ]);
    }
    public function getContentWahana(Request $request){
        //
        $wahana = DB::table('konten_zonas')->where('idzona', $request->id)->get();

        return response()->json([
            'wahana' => $wahana,
        ]);
    }
    public function getContentRekomendasiZona(Request $request){
        //
        $zones = DB::table('zonas')->where('id', '!=', $request->id)->get();

        return response()->json([
            'zones' => $zones,
        ]);
    }
    public function getContentMerchandiseZona(Request $request){
        //
        $merchandise = DB::table('daftar_souvenirs')->where('idzona', $request->id)->get();

        return response()->json([
            'merchandise' => $merchandise,
        ]);
    }
    public function getContentPromoBanner(Request $request){
        //
        $promoBanner = DB::table('promosis')->latest()->value('gambar');

        return response()->json([
            'promoBanner' => $promoBanner,
        ]);
    }
    public function getContentShowEventBanner(Request $request){
        //
        $showEventBanner = DB::table('events')->latest()->value('gambar');

        return response()->json([
            'showEventBanner' => $showEventBanner,
        ]);
    }
    public function getContentRestaurantBanner(Request $request){
        //
        $restoBanner = DB::table('restos')->latest()->value('gambar');

        return response()->json([
            'restoBanner' => $restoBanner,
        ]);
    }
    public function getContentRekomendasiRestaurant(Request $request){
        //
        $restos = DB::table('daftar_restos')->where('status', 1)->where('id', '!=', $request->id)->get();

        return response()->json([
            'restos' => $restos,
        ]);
    }
    public function getContentGroupBanner(Request $request){
        //
        $groupBanner = DB::table('groups')->latest()->value('gambar');

        return response()->json([
            'groupBanner' => $groupBanner,
        ]);
    }

    //details
    public function getContentMerchandiseDetail(Request $request){
        //
        $merchandise = DB::table('daftar_souvenirs')->where('link', $request->slugs)->get();

        return response()->json([
            'merchandise' => $merchandise,
        ]);
    }
    public function getContentPromoDetail(Request $request){
        //
        $promo = DB::table('promosi_lists')->where('link', $request->slugs)->get();

        return response()->json([
            'promo' => $promo,
        ]);
    }
    public function getContentRestaurantDetail(Request $request){
        //
        $resto = DB::table('daftar_restos')->where('status', 1)->where('link', $request->slugs)->get();

        return response()->json([
            'resto' => $resto,
        ]);
    }
    public function getContentShowEventDetail(Request $request){
        //
        $showEvent = DB::table('event_lists')->where('link', $request->slugs)->get();

        return response()->json([
            'showEvent' => $showEvent,
        ]);
    }
    public function getContentZonesDetail(Request $request){
        //
        $zone = DB::table('zonas')->where('link', $request->slugs)->get();

        return response()->json([
            'zone' => $zone,
        ]);
    }
}
