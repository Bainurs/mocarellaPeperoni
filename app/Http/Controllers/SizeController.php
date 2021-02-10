<?php

namespace App\Http\Controllers;

use App\Size;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SizeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $size = Size::all();
        return response()->json($size);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $size = Size::create($request->all());
        $size->save();
        return response()->json('', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $size = Size::find($id);
        return response()->json($size);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $size = Size::find($id);
        return response()->json($size);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $size = Size::find($id);
        $size->update($request->all());
        dd($size=Size::find($id));
        return response()->json('',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $size = Size::find($id);
        $size->delete();
        return response()->json('Deleted',200);
    }
}
