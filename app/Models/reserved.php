<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reserved extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'reservation_id',
        'customer_id',
        'status',
    ];

}
