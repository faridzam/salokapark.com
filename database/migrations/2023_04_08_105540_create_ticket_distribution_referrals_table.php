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
        Schema::create('ticket_distribution_referrals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ticket_id');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('option_id');
            $table->enum('type', ['weekdays', 'weekends', 'onlyCertainDay', 'onlyCertainDate', 'onlyCertainMonth', 'onlyCertainPeriod', 'onlyCertainPaymentMethod', 'withCouponCode']);
            $table->integer('min_qty');
            $table->integer('max_qty');
            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->String('days')->nullable();
            $table->string('coupon_code')->nullable();
            $table->string('payment_method')->nullable();
            $table->boolean('isActive')->default(true);
            $table->timestamps();

            $table->foreign('ticket_id')->references('id')->on('ticket_referrals');
            $table->foreign('category_id')->references('id')->on('category_referrals');
            $table->foreign('option_id')->references('id')->on('option_referrals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ticket_distribution_referrals');
    }
};
