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
    ];
}
