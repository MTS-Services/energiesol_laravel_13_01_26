<?php

use App\Models\SolarPanel;
use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseCount;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\assertDatabaseMissing;

beforeEach(function () {
    $this->user = User::factory()->create(['is_admin' => true]);
    actingAs($this->user);
});

it('can display the solar panels index page', function () {
    $this->get(route('admin.solar-panels.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('admin/solar-panels/index'));
});

it('requires authentication to access solar panels index page', function () {
    actingAs(User::factory()->create(['is_admin' => false]));
    $this->get(route('admin.solar-panels.index'))
        ->assertForbidden();
});

it('can display the solar panels create page', function () {
    $this->get(route('admin.solar-panels.create'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('admin/solar-panels/create'));
});

it('can create a new solar panel', function () {
    $solarPanelData = SolarPanel::factory()->make()->toArray();

    $this->post(route('admin.solar-panels.store'), $solarPanelData)
        ->assertRedirect(route('admin.solar-panels.index'))
        ->assertSessionHas('success', 'Solar panel created successfully.');

    assertDatabaseHas('solar_panels', [
        'brand_title' => $solarPanelData['brand_title'],
        'title' => $solarPanelData['title'],
        'price' => $solarPanelData['price'],
    ]);
});

it('can display the solar panels edit page', function () {
    $solarPanel = SolarPanel::factory()->create();

    $this->get(route('admin.solar-panels.edit', $solarPanel))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Admin/SolarPanels/Edit')->has('solarPanel'));
});

it('can update an existing solar panel', function () {
    $solarPanel = SolarPanel::factory()->create();
    $updatedData = [
        'brand_title' => 'Updated Brand',
        'title' => 'Updated Title',
        'price' => 999.99,
        'description' => 'Updated description',
        'note' => 'Updated note',
        'status' => false,
    ];

    $this->put(route('admin.solar-panels.update', $solarPanel), $updatedData)
        ->assertRedirect(route('admin.solar-panels.index'))
        ->assertSessionHas('success', 'Solar panel updated successfully.');

    assertDatabaseHas('solar_panels', array_merge(['id' => $solarPanel->id], $updatedData));
});

it('can delete a solar panel', function () {
    $solarPanel = SolarPanel::factory()->create();

    $this->delete(route('admin.solar-panels.destroy', $solarPanel))
        ->assertRedirect()
        ->assertSessionHas('success', 'Solar panel deleted successfully');

    assertDatabaseMissing('solar_panels', ['id' => $solarPanel->id]);
});

it('validates creation of solar panel', function () {
    $this->post(route('admin.solar-panels.store'), [])
        ->assertSessionHasErrors(['brand_title', 'title', 'price', 'description', 'note']);
});

it('validates update of solar panel', function () {
    $solarPanel = SolarPanel::factory()->create();

    $this->put(route('admin.solar-panels.update', $solarPanel), [
        'brand_title' => '',
        'title' => '',
        'price' => 'not-a-number',
        'description' => '',
        'note' => '',
    ])
        ->assertSessionHasErrors(['brand_title', 'title', 'price', 'description', 'note']);
});