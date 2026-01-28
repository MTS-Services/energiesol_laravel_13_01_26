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
            'brand_title' => 'Trina',
            'brand_logo' => '/images/solartec_logo.png',
            'title' => 'Preisbewusste Exzellenz',
            'image' => '/images/solar-panel1.png',
            'description' => 'Erzielen Sie überlegene Leistung bei der besten Rendite Ihrer Investition.',
            'price' => 299.99,
            'note' => 'Vertex S+ TSM-NEG9R.2',
            'status' => true,
        ]);

        SolarPanel::create([
            'brand_title' => 'Aiko',
            'brand_logo' => '/images/ecopower_logo.png',
            'title' => 'Maximale Leistungsausgabe',
            'image' => '/images/solar-panel2.png',
            'description' => 'Fortschrittliche Technologie für die höchstmögliche Energieerzeugung entwickelt.',
            'price' => 349.99,
            'note' => 'Neostar 35+',
            'status' => true,
        ]);
    }
}
