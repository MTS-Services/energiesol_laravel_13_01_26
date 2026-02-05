<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Partner extends Model
{
    protected $fillable = [
        'name',
        'image',
    ];
    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
         if (!$this->image) {
            return null;
        }

        if (Str::startsWith($this->image, ['http://', 'https://'])) {
            return $this->image;
        }

        return Storage::disk('public')->exists($this->image)
            ? Storage::disk('public')
            ->url($this->image)
            : null;
    }
}
