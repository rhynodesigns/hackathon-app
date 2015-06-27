<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    protected $fillable = [
        "name",
        "address",
        "availableSpaces",
        "hours",
        "price"
    ];
}
