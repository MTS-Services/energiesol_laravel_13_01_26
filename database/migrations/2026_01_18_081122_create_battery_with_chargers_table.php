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
        Schema::create('battery_with_chargers', function (Blueprint $table) {
            $table->id();
            $table->string('yes_image')->nullable();
            $table->string('no_image')->nullable();
            $table->string('type')->comment('battery , charger')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('battery_with_chargers');
    }
};
