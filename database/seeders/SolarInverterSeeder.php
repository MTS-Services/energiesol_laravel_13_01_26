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
        SolarInverter::insert([
            [
            'brand_title' => 'Fronius',
            'brand_logo' => 'fronius_logo.png',
            'title' => 'Symo 10.0-3-M',
            'image' => 'symo_10.0-3-m.png',
            'description' => 'The Fronius Symo is the inverter for optimized energy management.',
            'battery_image'=> 'symo_10.0-3-m_battery.png',
            'charger_image' => 'symo_10.0-3-m_charger.png',
            'charger_price' => 500.00,
            'battery_price' => 500.00,
            'price' => 1500.00,
            'note' => 'Three-phase, transformerless, for maximum flexibility.',
            'status' => true,
        ], 
        [
            'brand_title' => 'SMA',
            'brand_logo' => 'sma_logo.png',
            'title' => 'Sunny Boy 5.0-US',
            'image' => 'sunny_boy_5.0-us.png',
            'description' => 'Reliable and efficient inverter for residential PV systems.',
            'price' => 1200.00,
            'charger_image' => 'sunny_boy_5.0-us_charger.png',
            'battery_image' => 'sunny_boy_5.0-us_battery.png',
            'charger_price' => 500.00,
            'battery_price' => 500.00,
            'note' => 'Single-phase, string inverter with ShadeFix optimization.',
            'status' => true,
        ]
        ]);
    }
}