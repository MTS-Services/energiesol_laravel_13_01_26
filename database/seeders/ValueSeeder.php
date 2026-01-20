<?php

namespace Database\Seeders;

use App\Models\Value;
use Illuminate\Database\Seeder;

class ValueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Value::create([
            'title' => 'Our Mission',
            'description' => 'To accelerate the transition to sustainable energy by providing reliable and affordable solar solutions.',
            'image' => 'mission_image.png',
            'action_text' => 'Learn More',
            'action_url' => '/about-us',
        ]);

        Value::create([
            'title' => 'Our Vision',
            'description' => 'A world where clean energy is accessible to everyone, powering a brighter, more sustainable future.',
            'image' => 'vision_image.png',
            'action_text' => 'Join Us',
            'action_url' => '/careers',
        ]);

        Value::create([
            'title' => 'Our Commitment',
            'description' => 'We are committed to quality, innovation, and customer satisfaction, ensuring every project meets the highest standards.',
            'image' => 'commitment_image.png',
            'action_text' => 'Our Projects',
            'action_url' => '/projects',
        ]);
    }
}
