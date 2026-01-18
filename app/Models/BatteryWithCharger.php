<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BatteryWithCharger extends Model
{
    //
    protected $fillable = [
        'yes_image',
        'no_image',
        'type',
    ];
}
