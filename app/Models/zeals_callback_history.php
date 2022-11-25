<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class zeals_callback_history extends Model
{
    use HasFactory;

    protected $fillable = [
        'response',
        'status_code',
    ];
}
