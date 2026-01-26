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
            'title' => 'Mit Branchenexpertise',
            'description' => 'Profitieren Sie von der Stabilität und dem umfassenden Know-how eines weltweit führenden Energieunternehmens. Unsere Lösungen basieren auf jahrzehntelanger Erfahrung und gewährleisten einen sicheren und nachhaltigen Übergang zu erneuerbarer Energie.',
            'image' => '/images/feature1.png',
            'action_text' => 'Unsere Geschichte',
            'action_url' => '/features/analytics',
        ]);

        Feature::create([
            'title' => 'Premiumqualität, fairer Preis',
            'description' => 'Durch den Einsatz vollständig digitalisierter Prozesse senken wir unsere Gemeinkosten und bieten Ihnen so erstklassige Solartechnologie zu einem wettbewerbsfähigen Preis. Profitieren Sie vom besten Preis-Leistungs-Verhältnis der Branche.',
            'image' => '/images/feature2.png',
            'action_text' => 'Unsere Geschichte',
            'action_url' => '/features/energy-management',
        ]);

        Feature::create([
            'title' => '24/7 Monitoring & Support',
            'description' => 'Our dedicated team provides continuous monitoring and support for your solar systems.',
            'image' => '/images/feature3.png',
            'action_text' => 'Contact Us',
            'action_url' => '/features/support',
        ]);
    }
}
