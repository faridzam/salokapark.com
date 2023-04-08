<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation_detail_referral extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'reservation_id',
        'ticket_distribution_id',
        'qty',
        'subtotal',
    ];
}
