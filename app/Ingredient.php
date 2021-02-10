<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $fillable = [
        'name',
        'weight'
    ];
    public $timestamps = false;
    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_ingredients');
    }
}
