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
            'title' => 'Umfassende Solarexpertise.',
            'sub_title' => 'VOLLSERVICEANSATZ',
            'image' => '/images/service1.jpg',
            'description' => 'Als Ihr Komplettanbieter für Solarenergie unterstützen wir Sie in jedem Schritt –
von der ersten Beratung bis zur finalen Inbetriebnahme und dem Netzanschluss. Unser digitaler Prozess sorgt für Klarheit, Komfort und volle Transparenz.',
        ]);

        Service::create([
            'title' => 'Nahtloses Projektmanagement',
            'sub_title' => 'PROJEKTDURCHFÜHRUNG',
            'image' => '/images/service2.jpg',
            'description' => 'Wir übernehmen die komplette Umsetzung Ihrer Solaranlage – von der Beschaffung hochwertiger Komponenten bis zur Koordination der professionellen Installation –
und gewährleisten so ein reibungsloses und zuverlässiges Erlebnis.',
        ]);

        Service::create([
            'title' => 'Maximale Planungs-Effizienz',
            'sub_title' => 'SYSTEMPLANUNG',
            'image' => '/images/service3.jpg',
            'description' => 'Unsere datengestützte Planung gewährleistet durch präzise Dachanalyse und intelligentes Systemdesign eine optimale Paneelplatzierung und langfristige Leistungsfähigkeit.

So sichern wir Ihnen maximale Energieerträge und eine nachhaltige Rendite über die gesamte Lebensdauer Ihrer Anlage.',
        ]);
        Service::create([
            'title' => 'Problemloser Netzanschluss',
            'sub_title' => 'Netzanschluss',
            'image' => '/images/service4.png',
            'description' => 'Wir übernehmen sämtliche Genehmigungsverfahren, die technische Abstimmung sowie die komplette Dokumentation, um Ihre Anlage reibungslos und sicher an das lokale Stromnetz anzuschließen.
Dabei kümmern wir uns um alle bürokratischen Details, damit Sie sich entspannt auf Ihre eigene saubere Energie freuen können.',
        ]);
    }
}
