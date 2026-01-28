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
        Schema::create('solar_inverters', function (Blueprint $table) {
            $table->id();
            $table->string('brand_title');
            $table->string('brand_logo')->nullable();
            $table->string('title');
            $table->string('image')->nullable();
            $table->string('description');
            $table->decimal('price', 15, 2)->nullable();
            $table->string('note');
            $table->string('charger_image');
            $table->string('charger_title')->nullable();
            $table->string('charger_description')->nullable();
            $table->string('charger_brand_title')->nullable();
            $table->string('charger_brand_logo')->nullable();
            $table->string('charger_note')->nullable();
            $table->decimal('charger_price', 15, 2)->nullable();
            $table->string('battery_image');
            $table->string('battery_title')->nullable();
            $table->string('battery_description')->nullable();
            $table->string('battery_brand_title')->nullable();
            $table->string('battery_brand_logo')->nullable();
            $table->string('battery_note')->nullable();
            $table->decimal('battery_price', 15, 2);
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('solar_inverters');
    }
};
