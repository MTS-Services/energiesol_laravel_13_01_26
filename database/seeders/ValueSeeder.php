<?php

namespace Database\Seeders;

use App\Models\Value;
use Illuminate\Database\Seeder;

class ValueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Value::create([
            'title' => 'Moderne Technologie, schnell geliefert',
            'description' => 'Durch unsere effizient strukturierten, digitalen Prozesse vermeiden wir unnötige Verzögerungen und beschleunigen die Umsetzung Ihres Projekts. Wir arbeiten ohne veraltete Lagerbestände und setzen konsequent auf aktuelle, leistungsstarke Solarmodule und moderne Komponenten – für maximale Effizienz und Zukunftssicherheit.',
            'image' => '/images/values1.png',
            'action_text' => 'Konfigurator starten',
            'action_url' => route('configurator'),
        ]);

        Value::create([
            'title' => 'Ein Partner, auf den Sie zählen können',
            'description' => 'Bei Energie Solution Nord erhalten Sie mehr als nur Solarmodule. Von der ersten Anfrage bis zur finalen, fachgerechten Installation steht Ihnen ein persönlicher Ansprechpartner zur Seite und begleitet Sie durch jeden technischen Schritt.

Unser Anspruch ist es, die gesamte Planung, Koordination und Umsetzung für Sie zu übernehmen – damit Ihr Wechsel zu sauberer Energie reibungslos, transparent und stressfrei verläuft.',
            'image' => '/images/values2.png',
            'action_text' => 'Konfigurator starten',
            'action_url' => route('configurator'),
        ]);

    }
}
