<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticket_distribution_zeals extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'ticket_id',
        'category_id',
        'option_id',
        'slugs',
        'type',
        'min_qty',
        'max_qty',
        'date_start',
        'date_end',
        'day',
        'coupon_code',
        'payment_method',
        'isActive',
    ];
    
}
