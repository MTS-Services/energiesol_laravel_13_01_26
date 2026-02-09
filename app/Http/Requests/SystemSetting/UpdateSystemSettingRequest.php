<?php

namespace App\Http\Requests\SystemSetting;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSystemSettingRequest extends FormRequest
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
            'vat' => ['required', 'numeric'],
            'discount' => ['required', 'numeric'],
            'module_unit_in_meter' => ['required', 'numeric'],
            'wallbox_price' => ['required', 'numeric'],
            'evu_fees' => ['required', 'numeric'],
            'delivery_fees' => ['required', 'numeric'],
            'service_charge' => ['required', 'numeric'],
        ];
    }
}
