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
        Schema::create('system_settings', function (Blueprint $table) {
            $table->id();
            $table->float('vat')->default(0);
            $table->float('discount')->default(0);
            $table->float('module_unit_in_meter')->default(2.1);
            $table->float('wallbox_price')->default(1950.00);
            $table->float('evu_fees')->default(1950.00)->comment('Registration fees with Electric Supply company');
            $table->float('delivery_fees')->default(249);
            $table->float('service_charge')->default(1850.00);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('system_settings');
    }
};
