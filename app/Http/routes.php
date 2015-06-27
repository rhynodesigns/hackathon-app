<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('pages.index');
});
Route::get('contact', function () {
    return view('pages.contact');
});


Route::resource('companies', 'CompanyController');
Route::get('companies/{id}/lots', 'LotController@index');
Route::post('companies/{id}/lots', 'LotController@store');
