<?php

namespace Database\Seeders;

use App\Models\SolarPanel;
use Illuminate\Database\Seeder;

class SolarPanelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        SolarPanel::create([
            'brand_title' => 'TrinaSolar',
            'brand_logo' => 'solartec_logo.png',
            'title' => 'Budget-Friendly Excellence',
            'image' => 'solartec_x100.png',
            'description' => 'Get superior power output with the best return on your investment.',
            'price' => 299.99,
            'note' => 'Trina V ertex s+ 455Wp (Glass-Glass',
            'status' => true,
        ],
        [
            'brand_title' => 'EcoPower',
            'brand_logo' => 'ecopower_logo.png',
            'title' => 'Ultimate Power Output',
            'image' => 'ecopower_pro.png',
            'description' => 'Advanced technology engineered for the highest possible energy generation.',
            'price' => 349.99,
            'note' => 'Aiko V ertex s+ 455Wp (Glass-Glass}',
            'status' => true,
        ]
        );
    }
}
