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
                'title' => 'High Efficiency',
                'description' => 'Our solar panels offer high efficiency and performance in various weather conditions.',
                'icon' => 'solar-panel-icon.png',
            ],
            [
                'title' => 'Durability',
                'description' => 'Built to last, our solar panels are designed to withstand harsh environmental factors.',
                'icon' => 'durability-icon.png',
            ],
            [
                'title' => 'Cost Savings',
                'description' => 'Save on energy bills with our affordable and efficient solar solutions.',
                'icon' => 'cost-savings-icon.png',
            ],
            [
                'title' => 'Eco-Friendly',
                'description' => 'Reduce your carbon footprint with our environmentally friendly solar panels.',
                'icon' => 'eco-friendly-icon.png',
            ],
            [
                'title' => 'Easy Installation',
                'description' => 'Our solar panels are designed for quick and easy installation.',
                'icon' => 'easy-installation-icon.png',
            ],
            [
                'title' => 'Longevity',
                'description' => 'Enjoy long-term performance with our durable solar panels.',
                'icon' => 'longevity-icon.png',
            ],
        ]);
    }
}
