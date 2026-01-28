<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{
    //
    protected $fillable = [
        'id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'consent',
        'area',
        'solar_id',
        'inverter_id',
        'battery',
        'charger',
        'created_at',
        'updated_at',
        'is_valid_order'
    ];


    // Relations
    public function solarPanel()
    {
        return $this->belongsTo(SolarPanel::class, 'solar_id', 'id');
    }

    public function solarInverter()
    {
        return $this->belongsTo(SolarInverter::class, 'inverter_id', 'id');
    }
}
