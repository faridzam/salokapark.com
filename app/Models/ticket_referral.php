<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticket_referral extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'price',
    ];
}
