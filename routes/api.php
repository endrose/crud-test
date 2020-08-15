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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', 'Api\AuthController@register')->name('register');
Route::post('/login', 'Api\AuthController@login');
route::get('/users', 'Api\UserController@index')->name('index.user');
Route::middleware('auth:api')->post('/logout', 'Api\AuthController@logout')->name('token.logout');


Route::resource('crud', 'Api\CrudController')->only('index', 'show', 'update', 'store', 'destroy');

Route::resource('company', 'Api\CompanyController')->only('index', 'show', 'update', 'store', 'destroy');
Route::resource('biodata', 'Api\BiodataController')->only('index', 'show', 'update', 'destroy', 'store');
