<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Value extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'image',
        'action_text',
        'action_url',
    ];
}
