<?php

namespace Database\Seeders;

use App\Models\BatteryWithCharger;
use Illuminate\Database\Seeder;

class BatteryWithChargerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BatteryWithCharger::insert([
            [
                'yes_image' => 'battery/yes.jpg',
                'no_image' => 'battery/no.jpg',
                'type' => 'battery',
            ],
            [
                'yes_image' => 'charger/yes.jpg',
                'no_image' => 'charger/no.jpg',
                'type' => 'charger',
            ],
        ]);
    }
}
