<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stock_group extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'ticket_id',
        'stock',
    ];
    
}
