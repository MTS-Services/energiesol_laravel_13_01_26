<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemSetting extends Model
{
    //
    protected $fillable = [
        'id',
        'vat',
        'discount',
        'module_unit_in_meter',
        'wallbox_price',
        'evu_fees',
        'delivery_fees',
        'service_charge',
        'generate_electricity_per_module',
        'unit_price',
        'wallbox_boost_electricity',

    ];
}
