<?php

namespace App\Http\Controllers;

use App\Ingredient;
use App\Product;
use App\Http\Controllers\Controller;
use App\Type;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Product::all();
        return response()->json($product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create($request->all());
        $product->ingredients()->attach($request->ingredients);
        return response()->json('',200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::with('ingredients')->find($id);
        $types = Type::all();
        $ingredients = Ingredient::all();
        return response()->json([
            'product' => $product,
            'types' => $types,
            'ingredients' => $ingredients, ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::with('ingredients')->find($id);
        $types = Type::all();
        $ingredients = Ingredient::all();
        return response()->json([
            'product' => $product,
            'types' => $types,
            'ingredients' => $ingredients, ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $product = Product::find($id);
        $product->update($request->all());
        $product->ingredients()->sync($request->ingredients);
        return response()->json('',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->ingredients()->detach();
        $product->delete();
        return response()->json('',200);
    }

    public function get_create_data()
    {
        $types = Type::all();
        $ingredients = Ingredient::all();
        return [ 'types' => $types,
                 'ingredients' => $ingredients, ];
    }

    public function get_products_view()
    {
        $product = Product::all();
        $types = Type::all();
        $ingredients = Ingredient::all();
        return response()->json([
            'product' => $product,
            'types' => $types,
            'ingredients' => $ingredients, ]);
    }
}
