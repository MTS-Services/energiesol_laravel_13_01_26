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
            'brand_title' => 'SolarTech',
            'brand_logo' => 'solartec_logo.png',
            'title' => 'SolarTech X100',
            'image' => 'solartec_x100.png',
            'description' => 'High efficiency solar panel with advanced technology',
            'price' => 299.99,
            'note' => 'Best for residential use.',
            'status' => true,
        ],
        [
            'brand_title' => 'EcoPower',
            'brand_logo' => 'ecopower_logo.png',
            'title' => 'EcoPower Pro',
            'image' => 'ecopower_pro.png',
            'description' => 'Durable and reliable solar panel for all weather conditions',
            'price' => 349.99,
            'note' => 'Ideal for commercial installations.',
            'status' => true,
        ]
        );
    }
}
