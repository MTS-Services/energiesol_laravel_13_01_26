<?php

namespace Database\Factories;

use App\Models\SolarPanel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SolarPanel>
 */
class SolarPanelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = SolarPanel::class;

    public function definition(): array
    {
        return [
            'brand_title' => $this->faker->company(),
            'brand_logo' => $this->faker->imageUrl(),
            'title' => $this->faker->sentence(),
            'image' => $this->faker->imageUrl(),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 100, 1000),
            'note' => $this->faker->sentence(),
            'status' => $this->faker->boolean(),
        ];
    }
}
