<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payment_method_zeals extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'type',
        'corporate_name',
    ];
    
}
