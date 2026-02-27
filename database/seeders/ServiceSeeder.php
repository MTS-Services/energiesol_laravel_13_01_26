<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::create([
            'title' => 'Wir übernehmen – Sie profitieren',
            'sub_title' => 'Rundum-Sorglos-Service',
            'image' => '/images/service1.jpg',
            'description' => 'Als Ihr Dienstleister für Solarprojekte planen, koordinieren und überwachen wir sämtliche Schritte für Sie – von der ersten Beratung bis zur Inbetriebnahme und dem Netzanschluss.

Wir steuern alle beteiligten Fachpartner, behalten Termine, Qualität und Kosten im Blick und sorgen für einen reibungslosen Ablauf. So erhalten Sie maximale Transparenz und minimale Eigenaufwände – während wir uns um die vollständige Umsetzung kümmern.' ]);

        Service::create([
            'title' => 'Nahtlose Umsetzung mit starken Fachpartnern',
            'sub_title' => 'PROJEKTBEGLEITUNG',
            'image' => '/images/service2.jpg',
            'description' => 'Wir begleiten den vollständigen Bau Ihrer Solaranlage gemeinsam mit unseren qualifizierten Fachpartnern – von der Materialauswahl bis zur finalen Installation. Dabei achten wir konsequent auf eine präzise, fachgerechte Ausführung und höchste Qualitätsstandards.',
        ]);

        Service::create([
            'title' => 'Maximale Planungseffizienz',
            'sub_title' => 'SYSTEMPLANUNG',
            'image' => '/images/service3.jpg',
            'description' => 'Mit einer präzisen Dachanalyse und einem durchdachten Systemdesign planen wir Ihre Anlage exakt nach den Gegebenheiten vor Ort. So erreichen wir eine optimale Modulplatzierung, hohe Energieerträge und eine dauerhaft wirtschaftliche Lösung über die gesamte Lebensdauer Ihrer Solaranlage.',
        ]);
        Service::create([
            'title' => 'Reibungslose Inbetriebnahme',
            'sub_title' => 'NETZANSCHLUSS',
            'image' => '/images/service4.png',
            'description' => 'Wir bereiten sämtliche Unterlagen vollständig vor und überwachen die Netzanmeldung sorgfältig bis zur finalen Freigabe. Dabei halten wir Sie jederzeit über den aktuellen Stand informiert, sodass Sie stets genau wissen, wie es um Ihre Anlage steht.

Während wir uns um sämtliche Formalitäten kümmern, können Sie sich entspannt auf Ihre eigene saubere Energie freuen.',
        ]);
    }
}
