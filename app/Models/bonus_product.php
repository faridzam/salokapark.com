<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bonus_product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'type',
        'coupon_code',
        'description',
        'created_at',
        'updated_at',
    ];

}
