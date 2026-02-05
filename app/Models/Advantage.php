<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Advantage extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'icon',
    ];
    
    protected $appends = [
        'icon_url',
    ];

    public function getIconUrlAttribute()
    {
        if (!$this->icon) {
            return null;
        }
        
        if (Str::startsWith($this->icon, ['http://', 'https://'])) {
            return $this->icon;
        }
        
        return Storage::disk('public')->exists($this->icon)
            ? Storage::disk('public')->url($this->icon)
            : null;
    }
}
