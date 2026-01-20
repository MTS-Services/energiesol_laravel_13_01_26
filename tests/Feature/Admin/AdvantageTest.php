<?php

use App\Models\Advantage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\assertDatabaseMissing;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->refreshApplication(); // Explicitly refresh the application
    $this->user = User::factory()->create(['is_admin' => true]);
    actingAs($this->user);
});

it('can display the advantages index page', function () {
    $this->get(route('admin.advantages.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('admin/advantages/index'));
});

it('requires authentication to access advantages index page', function () {
    actingAs(User::factory()->create(['is_admin' => false]));
    $this->get(route('admin.advantages.index'))
        ->assertForbidden();
});

it('can display the advantages create page', function () {
    $this->get(route('admin.advantages.create'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('admin/advantages/create'));
});

it('can create a new advantage', function () {
    $advantageData = [
        'title' => 'Test Advantage',
        'description' => 'This is a test description.',
        'icon' => 'test-icon',
    ];

    $this->post(route('admin.advantages.store'), $advantageData)
        ->assertRedirect(route('admin.advantages.index'))
        ->assertSessionHas('success', 'Advantage created successfully.');

    assertDatabaseHas('advantages', [
        'title' => $advantageData['title'],
        'description' => $advantageData['description'],
        'icon' => $advantageData['icon'],
    ]);
});

it('can display the advantages edit page', function () {
    $advantage = Advantage::create([
        'title' => 'Existing Advantage',
        'description' => 'Existing description',
        'icon' => 'existing-icon',
    ]);

    $this->get(route('admin.advantages.edit', $advantage))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('admin/advantages/edit')->has('advantage'));
});

it('can update an existing advantage', function () {
    $advantage = Advantage::create([
        'title' => 'Existing Advantage',
        'description' => 'Existing description',
        'icon' => 'existing-icon',
    ]);
    $updatedData = [
        'title' => 'Updated Advantage Title',
        'description' => 'Updated description content',
        'icon' => 'updated-icon',
    ];

    $this->put(route('admin.advantages.update', $advantage), $updatedData)
        ->assertRedirect(route('admin.advantages.index'))
        ->assertSessionHas('success', 'Advantage updated successfully.');

    assertDatabaseHas('advantages', array_merge(['id' => $advantage->id], $updatedData));
});

it('can delete an advantage', function () {
    $advantage = Advantage::create([
        'title' => 'Advantage to Delete',
        'description' => 'Description to delete',
        'icon' => 'icon-to-delete',
    ]);

    $this->delete(route('admin.advantages.destroy', $advantage))
        ->assertRedirect()
        ->assertSessionHas('success', 'Advantage deleted successfully');

    assertDatabaseMissing('advantages', ['id' => $advantage->id]);
});

it('validates creation of advantage', function () {
    $this->post(route('admin.advantages.store'), [])
        ->assertSessionHasErrors(['title', 'description', 'icon']);
});

it('validates update of advantage', function () {
    $advantage = Advantage::create([
        'title' => 'Existing Advantage',
        'description' => 'Existing description',
        'icon' => 'existing-icon',
    ]);

    $this->put(route('admin.advantages.update', $advantage), [
        'title' => '',
        'description' => '',
        'icon' => '',
    ])
        ->assertSessionHasErrors(['title']); // Only title is required. description and icon are nullable.
});
