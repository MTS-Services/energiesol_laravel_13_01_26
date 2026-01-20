<?php

namespace Database\Seeders;

use App\Models\Inquiry;
use Illuminate\Database\Seeder;


class InquirySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Inquiry::insert([
            [
                'first_name' => 'Michael',
                'last_name' => 'Scott',
                'email' => 'michael.scott@example.com',
                'phone_number' => '+1234567890',
                'area' => 50,
                'solar_panel_id' => 1,
                'solar_inverter_id' => 1,
                'has_battery' => true,
                'has_charger' => false,
                'status' => false,

            ],
            [
                'first_name' => 'Pam',
                'last_name' => 'Beesly',
                'email' => 'pam.beesly@example.com',
                'phone_number' => '+1234567891',
                'area' => 100,
                'solar_panel_id' => 2,
                'solar_inverter_id' => 2,
                'has_battery' => false,
                'has_charger' => true,
                'status' => false,
            ],
        ]);
    }
}
