<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreEstimateRequest extends FormRequest
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
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'consent' => ['required', 'boolean'],
            'area' => ['required', 'numeric'],
            'solar_id' => ['required', 'integer', 'exists:solar_panels,id'],
            'inverter_id' => ['required', 'integer', 'exists:solar_inverters,id'],
            'battery' => ['nullable', 'boolean'],
            'charger' => ['nullable', 'boolean'],
            'is_valid_order' => ['nullable', 'boolean'],
            'status' => ['nullable', 'boolean'],
        ];
    }
}
