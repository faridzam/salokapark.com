<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class survey_satisfaction extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'owner',
        'rides',
        'facilities',
        'hospitality',
        'services',
        'equivalence',
        'notes',
    ];
}
