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
            'title' => 'Ein Partner, auf den Sie zählen können.',
            'description' => 'Bei Energiesol bieten wir mehr als nur Solarmodule Von Ihrer ersten Anfrage bis zur finalen professionellen Installation begleitet Sie ein persönlicher Experte durch jeden technischen Schritt. > Unser Ziel ist es,
die Komplexität von Planung und Montage für Sie zu übernehmen, damit Sie einen reibungslosen, transparenten und stressfreien Wechsel zu sauberer Energie genießen können.',
            'image' => '/images/values1.png',
            'action_text' => 'Konfigurator starten',
            'action_url' => route('configurator'),
        ]);

        Value::create([
            'title' => 'Moderne Technologie, schnell geliefert.',
            'description' => 'Dank unserer effizienten digitalen Prozesse vermeiden wir unnötige Verzögerungen. Wir führen keine alten Lagerbestände – stattdessen stellen wir sicher,
dass Ihr System immer die neuesten und fortschrittlichsten Solarmodule und Komponenten erhält, die aktuell auf dem Markt verfügbar sind.',
            'image' => '/images/values2.png',
            'action_text' => 'Konfigurator starten',
            'action_url' => route('configurator'),
        ]);

    }
}
