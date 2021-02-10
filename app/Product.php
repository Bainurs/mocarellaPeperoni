<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'type_id',
        'size_id',
        'price',
        'img'
    ];

    protected $casts = [
        'size' => 'collection',
        'price' => 'collection'
    ];
    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'product_ingredients');
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }
}
