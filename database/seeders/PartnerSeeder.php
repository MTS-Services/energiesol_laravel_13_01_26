<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Partner::create([
            'name' => 'Energy Solutions Inc.',
            'image' => null, // Placeholder, or specify a path to a dummy image if available in storage
        ]);

        Partner::create([
            'name' => 'Solar Innovations',
            'image' => null,
        ]);

        Partner::create([
            'name' => 'Green Power Co.',
            'image' => null,
        ]);
    }
}
