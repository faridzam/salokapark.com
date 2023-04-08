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
        Schema::create('reservation_detail_referrals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reservation_id');
            $table->unsignedBigInteger('ticket_distribution_id');
            $table->integer('qty');
            $table->double('subtotal');
            $table->timestamps();

            $table->foreign('reservation_id')->references('id')->on('reservation_referrals');
            $table->foreign('ticket_distribution_id')->references('id')->on('ticket_distribution_referrals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservation_detail_referrals');
    }
};
