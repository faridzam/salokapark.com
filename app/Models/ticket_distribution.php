<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticket_distribution extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'ticket_id',
        'category_id',
        'option_id',
        'type',
        'min_qty',
        'max_qty',
        'date_start',
        'date_end',
        'coupon_code',
        'payment_method',
        'isActive',
    ];
}
