<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\post;
use function Pest\Laravel\put;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->admin = User::factory()->create(['is_admin' => true]);
    actingAs($this->admin);
});

test('it can create a solar inverter with all fields and images', function () {
    Storage::fake('public');

    $data = [
        'brand_title' => 'Test Brand',
        'title' => 'Test Inverter',
        'description' => 'Test Description',
        'price' => 1000,
        'note' => 'Test Note',
        'status' => true,
        'charger_price' => 200,
        'battery_price' => 300,
        'brand_logo' => UploadedFile::fake()->image('brand_logo.jpg'),
        'image' => UploadedFile::fake()->image('inverter.jpg'),
        'charger_image' => UploadedFile::fake()->image('charger.jpg'),
        'battery_image' => UploadedFile::fake()->image('battery.jpg'),
    ];

    $response = post(route('admin.solar-inverters.store'), $data);

    $response->assertRedirect(route('admin.solar-inverters.index'));
    $response->assertSessionHas('success', 'Solar inverter created successfully.');

    $this->assertDatabaseHas('solar_inverters', [
        'brand_title' => 'Test Brand',
        'title' => 'Test Inverter',
    ]);

    $solarInverter = \App\Models\SolarInverter::where('brand_title', 'Test Brand')->first();

    Storage::disk('public')->assertExists($solarInverter->brand_logo);
    Storage::disk('public')->assertExists($solarInverter->image);
    Storage::disk('public')->assertExists($solarInverter->charger_image);
    Storage::disk('public')->assertExists($solarInverter->battery_image);
});

test('it can update a solar inverter with all fields and images', function () {
    Storage::fake('public');

    $solarInverter = \App\Models\SolarInverter::factory()->create();

    $old_brand_logo = $solarInverter->brand_logo;
    $old_image = $solarInverter->image;
    $old_charger_image = $solarInverter->charger_image;
    $old_battery_image = $solarInverter->battery_image;

    $data = [
        'brand_title' => 'Updated Brand',
        'title' => 'Updated Inverter',
        'description' => 'Updated Description',
        'price' => 1500,
        'note' => 'Updated Note',
        'status' => false,
        'charger_price' => 250,
        'battery_price' => 350,
        'brand_logo' => UploadedFile::fake()->image('updated_brand_logo.jpg'),
        'image' => UploadedFile::fake()->image('updated_inverter.jpg'),
        'charger_image' => UploadedFile::fake()->image('updated_charger.jpg'),
        'battery_image' => UploadedFile::fake()->image('updated_battery.jpg'),
    ];

    $response = put(route('admin.solar-inverters.update', $solarInverter), $data);

    $response->assertRedirect(route('admin.solar-inverters.index'));
    $response->assertSessionHas('success', 'Solar inverter updated successfully.');

    $this->assertDatabaseHas('solar_inverters', [
        'id' => $solarInverter->id,
        'brand_title' => 'Updated Brand',
        'title' => 'Updated Inverter',
    ]);

    $solarInverter->refresh();

    Storage::disk('public')->assertExists($solarInverter->brand_logo);
    Storage::disk('public')->assertExists($solarInverter->image);
    Storage::disk('public')->assertExists($solarInverter->charger_image);
    Storage::disk('public')->assertExists($solarInverter->battery_image);

    Storage::disk('public')->assertMissing($old_brand_logo);
    Storage::disk('public')->assertMissing($old_image);
    Storage::disk('public')->assertMissing($old_charger_image);
    Storage::disk('public')->assertMissing($old_battery_image);
});
