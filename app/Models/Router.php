<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Router extends Model
{
    use HasFactory;

    public $guarded = [];
    public function getRouteKeyName()
    {
        return 'slug';
    }
}