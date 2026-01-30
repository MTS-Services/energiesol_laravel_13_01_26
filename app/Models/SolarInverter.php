<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SolarInverter extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand_title',
        'brand_logo',
        'title',
        'image',
        'description',
        'price',
        'note',
        'charger_image',
        'battery_image',
        'charger_price',
        'battery_price',
        'status',
        'charger_title',
        'charger_description',
        'charger_brand_title',
        'charger_brand_logo',
        'charger_note',
        'battery_title',
        'battery_description',
        'battery_brand_title',
        'battery_brand_logo',
        'battery_note',
    ];

    protected $appends = [
        'brand_logo_url',
        'image_url',
        'charger_image_url',
        'charger_brand_logo_url',
        'battery_image_url',
        'battery_brand_logo_url',
    ];

    public function estimates()
    {
        return $this->hasMany(Estimate::class);
    }

    /**
     * Reusable file URL resolver
     */
    protected function resolveFileUrl($path)
    {
        if (!$path) {
            return null;
        }

        if (Str::startsWith($path, ['http://', 'https://'])) {
            return $path;
        }

        return Storage::disk('public')->exists($path)
            ? Storage::disk('public')->url($path)
            : null;
    }

    /* =========================
       Brand / Product Images
    ========================== */

    public function getBrandLogoUrlAttribute()
    {
        return $this->resolveFileUrl($this->brand_logo);
    }

    public function getImageUrlAttribute()
    {
        return $this->resolveFileUrl($this->image);
    }

    /* =========================
       Charger Images & Logos
    ========================== */

    public function getChargerImageUrlAttribute()
    {
        return $this->resolveFileUrl($this->charger_image);
    }

    public function getChargerBrandLogoUrlAttribute()
    {
        return $this->resolveFileUrl($this->charger_brand_logo);
    }

    /* =========================
       Battery Images & Logos
    ========================== */

    public function getBatteryImageUrlAttribute()
    {
        return $this->resolveFileUrl($this->battery_image);
    }

    public function getBatteryBrandLogoUrlAttribute()
    {
        return $this->resolveFileUrl($this->battery_brand_logo);
    }
}
