<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeatureStoreRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255', 'unique:features,title'],
            'description' => ['nullable', 'string'],
            'image' => ['nullable', 'string'], // Assuming string for now, could be 'image' if file upload is implemented
            'action_text' => ['nullable', 'string', 'max:255'],
            'action_url' => ['nullable', 'string', 'max:255', 'url'],
        ];
    }
}
