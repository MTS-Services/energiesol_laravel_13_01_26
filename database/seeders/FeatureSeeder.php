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
            'title' => 'Advanced Analytics',
            'description' => 'Gain deep insights into your solar panel performance with our advanced analytics tools.',
            'image' => 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Analytics',
            'action_text' => 'Learn More',
            'action_url' => '/features/analytics',
        ]);

        Feature::create([
            'title' => 'Smart Energy Management',
            'description' => 'Optimize your energy consumption and savings with intelligent energy management systems.',
            'image' => 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Energy',
            'action_text' => 'Get Started',
            'action_url' => '/features/energy-management',
        ]);

        Feature::create([
            'title' => '24/7 Monitoring & Support',
            'description' => 'Our dedicated team provides continuous monitoring and support for your solar systems.',
            'image' => 'https://via.placeholder.com/150/008000/FFFFFF?text=Support',
            'action_text' => 'Contact Us',
            'action_url' => '/features/support',
        ]);
    }
}
