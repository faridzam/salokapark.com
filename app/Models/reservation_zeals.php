<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation_zeals extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'customer_id',
        'payment_method_id',
        'reservation_option_id',
        'snap_token',
        'order_id',
        'zeals_code',
        'booking_code',
        'arrival_date',
        'bill',
        'status',
    ];
    
}
