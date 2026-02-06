<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SolarPanel extends Model
{
    //
    protected $fillable = [
        'brand_title',
        'brand_logo',
        'title',
        'image',
        'description',
        'price',
        'note',
        'status',
        'created_at',
        'updated_at',
    ];

    protected $appends = [
        'image_url','brand_logo_url',
    ];

    // Relations
    public function estimates()
    {
        return $this->hasMany(Estimate::class);
    }

    public function getBrandLogoUrlAttribute()
    {
        if (!$this->brand_logo) {
            return null;
        }

        if (Str::startsWith($this->brand_logo, ['http://', 'https://'])) {
            return $this->brand_logo;
        }

        return Storage::disk('public')->exists($this->brand_logo)
            ? Storage::disk('public')->url($this->brand_logo)
            : null;
    }

    public function getImageUrlAttribute()
    {
        if (!$this->image) {
            return null;
        }

        if (Str::startsWith($this->image, ['http://', 'https://'])) {
            return $this->image;
        }

        return Storage::disk('public')->exists($this->image)
            ? Storage::disk('public')->url($this->image)
            : null;
    }


}
