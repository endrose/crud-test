<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/crud', 'CrudController@index')->name('crud.index');
Route::get('/company', 'CompanyController@index')->name(('company.index'));
Route::get('/biodata', 'BiodataController@index')->name('biodata.index');
Route::get('/crudvuex', 'CrudVuexController@index')->name('crudvuex.index');
Route::get('/users', 'UserController@index')->name('users.index');
