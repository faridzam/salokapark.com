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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('customer_id');
            $table->bigInteger('payment_method_id')->nullable();
            $table->bigInteger('reservation_option_id')->default(1);
            $table->string('snap_token')->nullable();
            $table->string('order_id');
            $table->string('booking_code')->nullable();
            $table->date('arrival_date')->nullable();
            $table->double('bill');
            $table->enum('status', ['created', 'payment', 'pending', 'settlement', 'capture', 'deny', 'cancel', 'expire', 'failure']);
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
        Schema::dropIfExists('reservations');
    }
};
