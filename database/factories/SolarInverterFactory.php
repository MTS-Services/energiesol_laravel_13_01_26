<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SolarInverter>
 */
class SolarInverterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'brand_title' => $this->faker->company,
            'brand_logo' => UploadedFile::fake()->image('logo.jpg')->store('images/solar-inverters', 'public'),
            'title' => $this->faker->sentence,
            'image' => UploadedFile::fake()->image('image.jpg')->store('images/solar-inverters', 'public'),
            'description' => $this->faker->paragraph,
            'price' => $this->faker->randomFloat(2, 100, 2000),
            'note' => $this->faker->sentence,
            'charger_title' => $this->faker->sentence,
            'charger_description' => $this->faker->paragraph,
            'charger_brand_title' => $this->faker->company,
            'charger_brand_logo' => UploadedFile::fake()->image('logo.jpg')->store('images/solar-inverters', 'public'),
            'charger_note' => $this->faker->sentence,
            'charger_image' => UploadedFile::fake()->image('charger.jpg')->store('images/solar-inverters', 'public'),
            'battery_image' => UploadedFile::fake()->image('battery.jpg')->store('images/solar-inverters', 'public'),
            'battery_title' => $this->faker->sentence,
            'battery_description' => $this->faker->paragraph,
            'battery_brand_title' => $this->faker->company,
            'battery_brand_logo' => UploadedFile::fake()->image('logo.jpg')->store('images/solar-inverters', 'public'),
            'battery_note' => $this->faker->sentence,
            'charger_price' => $this->faker->randomFloat(2, 50, 500),
            'battery_price' => $this->faker->randomFloat(2, 100, 1000),
            'status' => $this->faker->boolean,
            'warranty_years' => $this->faker->numberBetween(5, 25),
            'efficiency' => $this->faker->randomFloat(2, 95, 99),
        ];
    }
}
