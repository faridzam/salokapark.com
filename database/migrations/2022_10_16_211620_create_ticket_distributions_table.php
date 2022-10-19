<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_distributions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('ticket_id');
            $table->enum('type', ['weekdays', 'weekends', 'onlyCertainDay', 'onlyCertainDate', 'onlyCertainMonth', 'onlyCertainPeriod',]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ticket_distributions');
    }
};
