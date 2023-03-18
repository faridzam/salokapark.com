<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class survey_visit extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'owner',
        'frequency',
        'referal',
        'isRecommended',
        'notes',
    ];
}
