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
        Schema::table('solar_inverters', function (Blueprint $table) {
            $table->integer('warranty_years')->after('status')->nullable();
            $table->decimal('efficiency', 5, 2)->after('warranty_years')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('solar_inverters', function (Blueprint $table) {
            $table->dropColumn('warranty_years');
            $table->dropColumn('efficiency');
        });
    }
};