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
    ];
}
