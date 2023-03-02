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
        Schema::create('reservation_option_zeals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['reguler', 'discount', 'special_price', 'buy_x_get_y', 'cashback', 'products', 'others']);
            $table->double('discount')->nullable();
            $table->double('special_price')->nullable();
            $table->double('cashback')->nullable();
            $table->integer('ticket_buy')->nullable();
            $table->integer('ticket_bonus')->nullable();
            $table->integer('product_bonus_id')->nullable();
            $table->string('description')->nullable();
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
        Schema::dropIfExists('reservation_option_zeals');
    }
};
