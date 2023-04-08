<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customer_referral extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'phone',
        'email',
        'address',
    ];

}