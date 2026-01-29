<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    //
    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'status',
        'estimate_id',
        'booking_date',
    ];
    
    public function estimate()
    {
        return $this->belongsTo(Estimate::class);
    }
}
