<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Feature::create([
            'title' => 'Mit Erfahrung und persönlicher Stärke',
            'description' => 'Profitieren Sie von der Kompetenz und dem fundierten Know-how eines jungen, engagierten Unternehmens. Unsere Lösungen basieren auf langjähriger Branchenerfahrung und ermöglichen einen sicheren sowie nachhaltigen Übergang zu erneuerbaren Energien.',
            'image' => '/images/feature1.png',
            'action_text' => 'Unsere Geschichte',
            'action_url' => route('contact').'#contact',
        ]);

        Feature::create([
            'title' => 'Premiumqualität, fairer Preis',
            'description' => 'Durch unsere vereinfachten Prozesse und ein starkes Netzwerk ausgewählter Fachpartner reduzieren wir Kosten und steigern gleichzeitig die Effizienz. So bieten wir Ihnen hochwertige Solartechnologie zu attraktiven Konditionen – mit einem überzeugenden Preis-Leistungs-Verhältnis.',
            'image' => '/images/feature2.png',
            'action_text' => 'Unsere Geschichte',
            'action_url' => route('contact').'#contact',
        ]);

        Feature::create([
            'title' => '24/7 Monitoring & Support',
            'description' => 'Unser engagiertes Team überwacht Ihre Solaranlage rund um die Uhr und steht Ihnen jederzeit mit persönlichem Support zur Seite – zuverlässig, schnell und kompetent.',
            'image' => '/images/feature3.png',
            'action_text' => 'Kontaktieren Sie uns',
            'action_url' => route('contact').'#contact',
        ]);
    }
}
