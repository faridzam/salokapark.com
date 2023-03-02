<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation_option_group extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'type',
        'discounts',
        'special_price',
        'ticket_buy',
        'ticket_bonus',
        'cashback',
        'description',
    ];
    
}
