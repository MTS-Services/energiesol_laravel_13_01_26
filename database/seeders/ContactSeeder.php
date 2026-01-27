<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Contact::insert([
            [
                'first_name' => 'John',
                'last_name' => 'Doe',
                'email' => 'john.doe@example.com',
                'phone_number' => '+1234567890',
            ],
            [
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'email' => 'jane.smith@example.com',
                'phone_number' => '+1234567891',
            ],
            [
                'first_name' => 'Alice',
                'last_name' => 'Johnson',
                'email' => 'alice.johnson@example.com',
                'phone_number' => '+1234567892',
            ],
            [
                'first_name' => 'Bob',
                'last_name' => 'Brown',
                'email' => 'bob.brown@example.com',
                'phone_number' => '+1234567893',
            ],
            [
                'first_name' => 'Charlie',
                'last_name' => 'Davis',
                'email' => 'charlie.davis@example.com',
                'phone_number' => '+1234567894',
            ],
            [
                'first_name' => 'David',
                'last_name' => 'Miller',
                'email' => 'david.miller@example.com',
                'phone_number' => '+1234567895',
            ],
            [
                'first_name' => 'Emily',
                'last_name' => 'Wilson',
                'email' => 'emily.wilson@example.com',
                'phone_number' => '+1234567896',
            ],
            [
                'first_name' => 'Frank',
                'last_name' => 'Anderson',
                'email' => 'frank.anderson@example.com',
                'phone_number' => '+1234567897',
            ],
        ]);
    }
}
