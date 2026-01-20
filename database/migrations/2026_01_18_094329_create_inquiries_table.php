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
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();
            $table->integer('area');
            $table->unsignedBigInteger('solar_panel_id');
            $table->unsignedBigInteger('solar_inverter_id');
            $table->boolean('has_battery')->default(false);
            $table->boolean('has_charger')->default(false);
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('phone_number')->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();

            $table->foreign('solar_panel_id')->references('id')->on('solar_panels')->onDelete('cascade');
            $table->foreign('solar_inverter_id')->references('id')->on('solar_inverters')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};
