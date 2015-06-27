<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    protected $fillable = [
        "name",
        "address",
        "totalSpaces",
        "availableSpaces",
        "hours",
        "price",
        "latitude",
        "longitude"
    ];

    public function setPriceAttribute($price)
    {
        $this->attributes['price'] = str_replace('$', '', $price);
    }
}
