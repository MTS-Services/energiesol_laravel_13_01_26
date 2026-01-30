<?php

namespace App\Http\Requests\SolarInverter;

use Illuminate\Foundation\Http\FormRequest;

class StoreSolarInverterRequest extends FormRequest
{public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // Brand & inverter
            'brand_title' => ['required', 'string', 'max:255'],
            'brand_logo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'title' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'description' => ['required', 'string'],
            'price' => ['nullable', 'numeric', 'min:0'],
            'note' => ['required', 'string'],
            'status' => ['nullable', 'boolean'],

            // Charger
            'charger_image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'charger_title' => ['nullable', 'string', 'max:255'],
            'charger_description' => ['nullable', 'string'],
            'charger_brand_title' => ['nullable', 'string', 'max:255'],
            'charger_brand_logo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'charger_note' => ['nullable', 'string'],
            'charger_price' => ['nullable', 'numeric', 'min:0'],

            // Battery
            'battery_image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'battery_title' => ['nullable', 'string', 'max:255'],
            'battery_description' => ['nullable', 'string'],
            'battery_brand_title' => ['nullable', 'string', 'max:255'],
            'battery_brand_logo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'battery_note' => ['nullable', 'string'],
            'battery_price' => ['required', 'numeric', 'min:0'],
        ];
    }

    public function messages(): array
    {
        return [
            'charger_image.required' => 'Charger image is required.',
            'battery_image.required' => 'Battery image is required.',
            'battery_price.required' => 'Battery price is required.',
        ];
    }
}