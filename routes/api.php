<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('get-products', 'ProductController@index');
Route::get('get-products-view', 'ProductController@get_products_view');
Route::get('product/edit/{id}', 'ProductController@edit');
Route::delete('product/delete/{id}', 'ProductController@destroy');
Route::post('product/update/{id}', 'ProductController@update');
Route::post('product/add', 'ProductController@store');

Route::get('getDatatoCreateProduct', 'ProductController@get_create_data');

Route::get('get-types', 'TypeController@index');
Route::post('type/add', 'TypeController@store');
Route::delete('type/delete/{id}', 'TypeController@destroy');
Route::get('type/show/{id}', 'TypeController@show');
Route::get('type/edit/{id}', 'TypeController@edit');
Route::post('type/update/{id}', 'TypeController@update');

Route::get('get-sizes', 'SizeController@index');
Route::post('size/add', 'SizeController@store');
Route::delete('size/delete/{id}', 'SizeController@destroy');
Route::get('size/show/{id}', 'SizeController@show');
Route::get('size/edit/{id}', 'SizeController@edit');
Route::post('size/update/{id}', 'SizeController@update');

Route::get('get-ingredients', 'IngredientController@index');
Route::post('ingredient/add', 'IngredientController@store');
Route::delete('ingredient/delete/{id}', 'IngredientController@destroy');
Route::get('ingredient/show/{id}', 'IngredientController@show');
Route::get('ingredient/edit/{id}', 'IngredientController@edit');
Route::post('ingredient/update/{id}', 'IngredientController@update');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
