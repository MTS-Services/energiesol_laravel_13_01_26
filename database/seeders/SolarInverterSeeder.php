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
            'brand_title' => 'EcoFlow',
            'brand_logo' => '/images/eco-flow-logo.png',
            'title' => 'Komplettlösung',
            'image' => '/images/inverter1.png',
            'description' => 'Genießen Sie bis zu 2300 W AC-Leistung und betreiben Sie mühelos Geräte mit hohem Strombedarf.',
            'price' => 100.01,
            'note' => 'STREAM Ultra X',
            'charger_title' => 'Schnelles & Grünes Laden',
            'charger_description' => 'Laden Sie Ihr E-Fahrzeug mit sauberer Solarenergie und senken Sie sofort Ihre Kraftstoffkosten.',
            'charger_brand_title' => 'Smart',
            'charger_brand_logo' => '/images/charger-logo.png',
            'charger_note' => 'Smart EV Wallbox (7,2 kW / 22 kW)',
            'charger_image' =>'/images/charger.png',
            'battery_image' => '/images/battery.png',
            'battery_title' => 'Zuverlässige Stromspeicherung',
            'battery_description' => 'LiFePO4-Hochkapazitätsbatterie für Ihr Zuhause, mit Energie die ganze Nacht und bei Stromausfällen.',
            'battery_brand_title' => 'GSL Energy',
            'battery_brand_logo' => '/images/battery_brand_logo.png',
            'battery_note' => '20 kWh (oder 15 kWh) Lithium-Batteriestapel',
            'charger_price' => 100,
            'battery_price' => 100,
            ],
            [
            'brand_title' => 'HUAWEI',
            'brand_logo' => '/images/eco-flow-logo.png',
            'title' => 'Preis-Leistung',
            'image' => '/images/inverter2.png',
            'description' => 'Steigern Sie Ihre Performance und sichern Sie die optimale Rendite für jede Investition.',
            'price' => 100.01,
            'note' => 'Smart PV Global',
            'charger_title' => 'Schnelles & Grünes Laden',
            'charger_description' => 'Laden Sie Ihr E-Fahrzeug mit sauberer Solarenergie und senken Sie sofort Ihre Kraftstoffkosten.',
            'charger_brand_title' => 'Smart',
            'charger_brand_logo' => '/images/charger-logo.png',
            'charger_note' => 'Smart EV Wallbox (7,2 kW / 22 kW)',
            'charger_image' =>'/images/charger.png',
            'battery_image' => '/images/battery.png',
            'battery_title' => 'Zuverlässige Stromspeicherung',
            'battery_description' => 'LiFePO4-Hochkapazitätsbatterie für Ihr Zuhause, mit Energie die ganze Nacht und bei Stromausfällen.',
            'battery_brand_title' => 'GSL Energy',
            'battery_brand_logo' => '/images/battery_brand_logo.png',
            'battery_note' => '20 kWh (oder 15 kWh) Lithium-Batteriestapel',
            'charger_price' => 100,
            'battery_price' => 100,
            ],
            [
            'brand_title' => 'Zig Energy',
            'brand_logo' => '/images/eco-flow-logo.png',
            'title' => 'Leistung',
            'image' => '/images/inverter3.png',
            'description' => 'Unübertroffene Qualität, die das beste Preis-Leistungs-Verhältnis Ihrer Investition bietet.',
            'price' => 100.01,
            'note' => ' V ertex s+ 455Wp (Glass-Glass',
            'charger_title' => 'Schnelles & Grünes Laden',
            'charger_description' => 'Laden Sie Ihr E-Fahrzeug mit sauberer Solarenergie und senken Sie sofort Ihre Kraftstoffkosten.',
            'charger_brand_title' => 'Smart',
            'charger_brand_logo' => '/images/charger-logo.png',
            'charger_note' => 'Smart EV Wallbox (7,2 kW / 22 kW)',
            'charger_image' =>'/images/charger.png',
            'battery_image' => '/images/battery.png',
            'battery_title' => 'Zuverlässige Stromspeicherung',
            'battery_description' => 'LiFePO4-Hochkapazitätsbatterie für Ihr Zuhause, mit Energie die ganze Nacht und bei Stromausfällen.',
            'battery_brand_title' => 'GSL Energy',
            'battery_brand_logo' => '/images/battery_brand_logo.png',
            'battery_note' => '20 kWh (oder 15 kWh) Lithium-Batteriestapel',
            'charger_price' => 100,
            'battery_price' => 100,
            ]
            
        ]);
    }
}
