<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('estimates', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone');
            $table->boolean('consent');
            $table->unsignedBigInteger('area');
            $table->unsignedBigInteger('solar_id');
            $table->unsignedBigInteger('inverter_id');
            $table->boolean('battery');
            $table->boolean('charger');
            $table->boolean('is_valid_order')->default(false);
            $table->timestamps();


            $table->foreign('solar_id')->references('id')->on('solar_panels')->onDelete('cascade');
            $table->foreign('inverter_id')->references('id')->on('solar_inverters')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estimates');
    }
};
