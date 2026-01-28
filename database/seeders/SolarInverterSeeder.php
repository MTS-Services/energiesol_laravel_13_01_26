<?php

namespace Database\Seeders;

use App\Models\SolarInverter;
use Illuminate\Database\Seeder;

class SolarInverterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SolarInverter::factory()->count(10)->create();
    }
}
