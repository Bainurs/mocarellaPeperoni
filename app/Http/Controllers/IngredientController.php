<?php

namespace App\Http\Controllers;

use App\Ingredient;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ingredient = Ingredient::all();
        return response()->json($ingredient);
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
        $ingredient = Ingredient::create($request->all());
        $ingredient->save();
        return response()->json('Ingredient created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ingredient = Ingredient::find($id);
        return response()->json($ingredient);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ingredient = Ingredient::find($id);
        return response()->json($ingredient);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $ingredient = Ingredient::find($id)->update($request->all());
        return response()->json('Ingredient updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ingredient = Ingredient::find($id);
        $ingredient->delete();
        return response()->json('Element deleted');
    }
}
