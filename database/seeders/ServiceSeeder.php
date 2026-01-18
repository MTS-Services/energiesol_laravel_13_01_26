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
            'title' => 'Solar Panel Installation',
            'sub_title' => 'Professional installation of solar panels for homes and businesses.',
            'image' => 'services/images/solar_installation.jpg',
            'description' => 'Our expert team provides seamless and efficient solar panel installation services, ensuring optimal performance and energy savings. We handle everything from design to final setup, using high-quality materials and industry best practices.',
        ]);

        Service::create([
            'title' => 'Solar Panel Maintenance',
            'sub_title' => 'Regular maintenance and cleaning to maximize solar panel efficiency.',
            'image' => 'services/images/solar_maintenance.jpg',
            'description' => 'Keep your solar panels running at peak efficiency with our comprehensive maintenance services. We offer cleaning, inspection, and repair to ensure your system performs optimally year-round, extending its lifespan and saving you money.',
        ]);

        Service::create([
            'title' => 'Battery Storage Solutions',
            'sub_title' => 'Integrate battery storage with your solar system for uninterrupted power.',
            'image' => 'services/images/battery_storage.jpg',
            'description' => 'Enhance your energy independence with our advanced battery storage solutions. Store excess solar energy for use during outages or at night, reducing your reliance on the grid and providing a reliable power supply.',
        ]);
    }
}
