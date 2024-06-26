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
        Schema::create('payment_method_zeals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['gopay', 'qris', 'cstore', 'credit_card', 'echannel', 'bank_transfer', 'bca_klikpay', 'bca_klikbca', 'bri_epay']);
            $table->string('corporate_name')->nullable();
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
        Schema::dropIfExists('payment_method_zeals');
    }
};
