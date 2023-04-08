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
        Schema::create('reservation_referrals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('payment_method_id')->nullable();
            $table->unsignedBigInteger('reservation_option_id')->default(1);
            $table->unsignedBigInteger('sales_id');
            $table->string('snap_token')->nullable();
            $table->string('zeals_code')->nullable();
            $table->string('order_id');
            $table->string('booking_code')->nullable();
            $table->date('arrival_date')->nullable();
            $table->double('bill');
            $table->enum('status', ['created', 'payment', 'pending', 'settlement', 'capture', 'deny', 'cancel', 'expire', 'failure']);
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customer_referrals');
            $table->foreign('payment_method_id')->references('id')->on('payment_methods');
            $table->foreign('reservation_option_id')->references('id')->on('reservation_option_referrals');
            $table->foreign('sales_id')->references('id')->on('referrers');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservation_referrals');
    }
};
