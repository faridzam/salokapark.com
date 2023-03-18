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
        Schema::create('survey_satisfactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('owner');
            $table->tinyInteger('rides');
            $table->tinyInteger('facilities');
            $table->tinyInteger('hospitality');
            $table->tinyInteger('services');
            $table->tinyInteger('equivalence');
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
        Schema::dropIfExists('survey_satisfactions');
    }
};
