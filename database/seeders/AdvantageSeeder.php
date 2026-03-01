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
                'description' => 'Profitieren Sie von maßgeschneiderten Lösungen, die exakt auf Ihre persönlichen Anforderungen und Ihren Energiebedarf abgestimmt sind – kompetent, transparent und verständlich erklärt.',
                'icon' => '/images/advantage1.png',
            ],
            [
                'title' => 'Sofortige Preistransparenz',
                'description' => 'Kein wochenlanges Warten auf ein Angebot. Mit unserem Online-Konfigurator erhalten Sie in wenigen Minuten eine transparente und nachvollziehbare Einschätzung Ihrer Solar-Investition.',
                'icon' => '/images/advantage2.png',
            ],
            [
                'title' => 'Beste Qualität. Bester Preis.',
                'description' => 'Durch effiziente, digital optimierte Prozesse und den Einsatz hochwertiger Komponenten bieten wir Ihnen maximale Qualität zu attraktiven Konditionen – für ein starkes und nachhaltiges Preis-Leistungs-Verhältnis.',
                'icon' => '/images/advantage3.png',
            ],
            [
                'title' => 'Langfristige Sicherheit',
                'description' => 'Profitieren Sie von unserer langjährigen Branchenerfahrung und der starken Zusammenarbeit mit etablierten Partnern – für nachhaltige Stabilität und zuverlässige Lösungen über viele Jahre hinweg.',
                'icon' => '/images/advantage4.png',
            ],
            [
                'title' => 'Innovative Systemlösungen',
                'description' => 'Unsere intelligenten Energiemanagementsysteme integrieren sich nahtlos in Elektrofahrzeuge und moderne Hausautomationslösungen. So vernetzen Sie Erzeugung, Speicherung und Verbrauch effizient – für maximale Unabhängigkeit und Kontrolle.',
                'icon' => '/images/advantage5.png',
            ],
            [
                'title' => 'Rundum-Sorglos-Service',
                'description' => 'Von der ersten Standortanalyse über die detaillierte Planung bis zur fachgerechten Installation und laufenden Betreuung – wir koordinieren und überwachen alle Schritte für Sie. So erhalten Sie eine sorgenfreie Umsetzung aus einer Hand.',
                'icon' => '/images/advantage6.png',
            ],
        ]);
    }
}
