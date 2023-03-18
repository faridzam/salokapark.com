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
        Schema::create('survey_visits', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('owner');
            $table->tinyInteger('frequency');
            $table->tinyInteger('referal');
            $table->tinyInteger('isRecommended');
            $table->string('notes')->nullable();
            $table->timestamps();

            $table->foreign('owner')->references('id')->on('survey_customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survey_visits');
    }
};
