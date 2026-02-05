<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEstimateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['nullable', 'string', 'max:255'],
            'last_name' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'consent' => ['nullable', 'boolean'],
            'area' => ['nullable', 'numeric'],
            'solar_id' => ['nullable', 'integer', 'exists:solar_panels,id'],
            'inverter_id' => ['nullable', 'integer', 'exists:solar_inverters,id'],
            'battery' => ['nullable', 'boolean'],
            'charger' => ['nullable', 'boolean'],
            'is_valid_order' => ['nullable', 'boolean'],
            'status' => ['nullable', 'boolean'],
        ];
    }
}
