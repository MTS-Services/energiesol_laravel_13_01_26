<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $fillable = [
        'id',
        'title',
        'description',
        'image',
        'action_text',
        'action_url',
    ];
}
