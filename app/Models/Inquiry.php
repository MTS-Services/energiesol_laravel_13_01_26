<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    protected $casts = [
        'has_battery' => 'boolean',
        'has_charger' => 'boolean',
        'status' => 'boolean',
    ];

    public function solarPanel(): BelongsTo
    {
        return $this->belongsTo(SolarPanel::class);
    }

    public function solarInverter(): BelongsTo
    {
        return $this->belongsTo(SolarInverter::class);
    }
}
