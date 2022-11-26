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
            $table->bigInteger('category_id');
            $table->bigInteger('option_id');
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
