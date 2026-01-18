<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    //
    protected $fillable = [
        'area',
        'solar_panel_id',
        'solar_inverter_id',
        'has_battery',
        'has_charger',
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'status',
    ];
}
