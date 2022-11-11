<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Carbon\Carbon;
use App\Meta;
use Illuminate\Support\Facades\Event;
use Laravel\Octane\Events\RequestReceived;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        config(['app.locale' => 'id']);
	    Carbon::setLocale('id');

        Event::listen(function (RequestReceived $_) {
            Meta::cleanup();
        });
    }
}
