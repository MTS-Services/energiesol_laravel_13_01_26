<?php

namespace Database\Seeders;

use App\Models\Advantage;
use Illuminate\Database\Seeder;

class AdvantageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Advantage::insert([
            [
                'title' => 'Individuelle Beratung',
                'description' => 'Erhalten Sie maßgeschneiderte Lösungen von unseren Experten, die genau auf Ihre individuellen Bedürfnisse eingehen.',
                'icon' => '/images/advantage1.png',
            ],
            [
                'title' => 'Sofortige Preistransparenz',
                'description' => 'Kein wochenlanges Warten mehr. Berechnen Sie Ihre Solar-Investition sofort mit unserem transparenten Online-Konfigurator.',
                'icon' => '/images/advantage2.png',
            ],
            [
                'title' => 'Beste Qualität. Besserer Preis.',
                'description' => 'Wir kombinieren digitale Effizienz mit hochwertigen Komponenten, um das beste Preis-Leistungs-Verhältnis für Ihre Investition zu bieten.',
                'icon' => '/images/advantage3.png',
            ],
            [
                'title' => 'Sofortige Preistransparenz',
                'description' => 'Profitieren Sie von unserer langjährigen Erfahrung und der starken Rückendeckung führender Energiegruppen – für langfristige Zuverlässigkeit.',
                'icon' => '/images/advantage4.png',
            ],
            [
                'title' => 'Innovative Systemlösungen',
                'description' => 'Unsere smarten Energiemanagementsysteme lassen sich nahtlos in Elektrofahrzeuge und moderne Hausautomation integrieren.',
                'icon' => '/images/advantage5.png',
            ],
            [
                'title' => 'Rundum-Sorglos-Service',
                'description' => 'Von der ersten Standortanalyse und Planung bis hin zur finalen Installation und laufenden Wartung – wir übernehmen alles für Sie.',
                'icon' => '/images/advantage6.png',
            ],
        ]);
    }
}
