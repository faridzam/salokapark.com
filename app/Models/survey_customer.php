<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class survey_customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'phone',
        'address',
    ];
}
