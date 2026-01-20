<?php

namespace Tests\Feature\Admin;

use App\Models\Feature;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create(['is_admin' => true]);
});

it('can view the features index page', function () {
    $this->actingAs($this->user)
        ->get(route('admin.features.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Features/Index'));
});

it('can view the create feature page', function () {
    $this->actingAs($this->user)
        ->get(route('admin.features.create'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Features/Create'));
});

it('can store a new feature', function () {
    $response = $this->actingAs($this->user)
        ->post(route('admin.features.store'), [
            'title' => 'New Feature Title',
            'description' => 'New Feature Description',
            'image' => 'https://example.com/image.jpg',
            'action_text' => 'Click Here',
            'action_url' => 'https://example.com/link',
        ]);

    $response->assertStatus(302)
        ->assertRedirect(); // Assert that a redirect occurred, without specifying the exact URL

    $this->actingAs($this->user)
        ->get(route('admin.features.index')) // Directly GET the expected final destination
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Index')
            ->has('flash.success')
            ->where('flash.success', 'Feature created successfully.')
        );

    $this->assertDatabaseHas('features', [
        'title' => 'New Feature Title',
        'description' => 'New Feature Description',
    ]);
});

it('can view the edit feature page', function () {
    $feature = Feature::create([
        'title' => 'Test Feature for Edit',
        'description' => 'Description for editing',
        'image' => null,
        'action_text' => null,
        'action_url' => null,
    ]);

    $this->actingAs($this->user)
        ->get(route('admin.features.edit', $feature))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Edit')
            ->has('feature')
            ->where('feature.id', $feature->id));
});

it('can update an existing feature', function () {
    $feature = Feature::create([
        'title' => 'Original Feature Title',
        'description' => 'Original Feature Description',
        'image' => null,
        'action_text' => null,
        'action_url' => null,
    ]);

    $response = $this->actingAs($this->user)
        ->put(route('admin.features.update', $feature), [
            'title' => 'Updated Feature Title',
            'description' => 'Updated Feature Description',
            'image' => 'https://example.com/updated_image.jpg',
            'action_text' => 'Updated Text',
            'action_url' => 'https://example.com/updated_link',
        ]);

    $response->assertStatus(302)
        ->assertRedirect(); // Assert that a redirect occurred, without specifying the exact URL

    $this->actingAs($this->user)
        ->get(route('admin.features.index')) // Directly GET the expected final destination
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Index')
            ->has('flash.success')
            ->where('flash.success', 'Feature updated successfully.')
        );

    $this->assertDatabaseHas('features', [
        'id' => $feature->id,
        'title' => 'Updated Feature Title',
        'description' => 'Updated Feature Description',
    ]);
});

it('can delete a feature', function () {
    $feature = Feature::create([
        'title' => 'Feature to Delete',
        'description' => 'Description of feature to be deleted',
        'image' => null,
        'action_text' => null,
        'action_url' => null,
    ]);

    $response = $this->actingAs($this->user)
        ->delete(route('admin.features.destroy', $feature));

    $response->assertStatus(302)
        ->assertRedirect(route('admin.features.index'));

    $this->actingAs($this->user)
        ->get(route('admin.features.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Index')
            ->has('flash.success')
            ->where('flash.success', 'Feature deleted successfully.')
        );

    $this->assertDatabaseMissing('features', [
        'id' => $feature->id,
    ]);
});

it('requires title for storing a feature', function () {
    $response = $this->actingAs($this->user)
        ->post(route('admin.features.store'), [
            'title' => '',
            'description' => 'New Feature Description',
        ]);

    $response->assertStatus(302)
        ->assertRedirect(route('admin.features.create'));

    $this->actingAs($this->user)
        ->get(route('admin.features.create'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Create')
            ->has('errors.title')
        );
});

it('requires title for updating a feature', function () {
    $feature = Feature::create([
        'title' => 'Title for Update Validation',
        'description' => 'Description for update validation',
        'image' => null,
        'action_text' => null,
        'action_url' => null,
    ]);

    $response = $this->actingAs($this->user)
        ->put(route('admin.features.update', $feature), [
            'title' => '',
            'description' => 'Updated Feature Description',
        ]);

    $response->assertStatus(302)
        ->assertRedirect(route('admin.features.edit', $feature));

    $this->actingAs($this->user)
        ->get(route('admin.features.edit', $feature))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Edit')
            ->has('errors.title')
        );
});

it('requires a unique title for storing a feature', function () {
    Feature::create(['title' => 'Existing Title', 'description' => 'Desc', 'image' => null, 'action_text' => null, 'action_url' => null]);

    $response = $this->actingAs($this->user)
        ->post(route('admin.features.store'), [
            'title' => 'Existing Title',
            'description' => 'New Feature Description',
        ]);

    $response->assertStatus(302)
        ->assertRedirect(route('admin.features.create'));

    $this->actingAs($this->user)
        ->get(route('admin.features.create'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Create')
            ->has('errors.title')
        );
});

it('requires a unique title for updating a feature (excluding self)', function () {
    Feature::create(['title' => 'Existing Title', 'description' => 'Desc', 'image' => null, 'action_text' => null, 'action_url' => null]);
    $feature = Feature::create(['title' => 'Another Title', 'description' => 'Desc', 'image' => null, 'action_text' => null, 'action_url' => null]);

    $response = $this->actingAs($this->user)
        ->put(route('admin.features.update', $feature), [
            'title' => 'Existing Title',
            'description' => 'Updated Feature Description',
        ]);

    $response->assertStatus(302)
        ->assertRedirect(route('admin.features.edit', $feature));

    $this->actingAs($this->user)
        ->get(route('admin.features.edit', $feature))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Features/Edit')
            ->has('errors.title')
        );

    $this->actingAs($this->user)
        ->put(route('admin.features.update', $feature), [
            'title' => 'Another Title', // Should be valid as it's its own title
            'description' => 'Updated Feature Description',
        ])
        ->assertSessionDoesntHaveErrors('title');
});
