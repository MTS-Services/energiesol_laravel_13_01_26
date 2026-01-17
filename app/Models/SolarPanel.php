<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
