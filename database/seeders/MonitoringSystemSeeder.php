<?php

namespace Database\Seeders;

use App\Models\MonitoringSystem;
use Illuminate\Database\Seeder;

class MonitoringSystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        MonitoringSystem::create([
            'title' => 'Advanced Monitoring System',
            'sub_title' => 'Real-time Data Tracking',
            'description' => 'Our monitoring system provides real-time data tracking and analytics for optimal performance.',
            'image' => 'images/monitoring_system.png',
        ]);
    }
}
