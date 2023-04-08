<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class referrer extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'phone',
        'address',
        'url_param',
    ];
}
