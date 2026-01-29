<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'created_at',
        'updated_at',
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

    public function estimates()
    {
        return $this->hasMany(Estimate::class);
    }
}


