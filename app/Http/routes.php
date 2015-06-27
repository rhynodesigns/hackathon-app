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

Route::resource('companies', 'CompanyController');
Route::get('companies/{id}/lots', 'LotController@index');
Route::post('companies/{id}/lots', 'LotController@store');

Route::get('lots', 'LotController@all');

Route::get('reservations', function () {

    $reservations = [];

    $reservations[] = [
        'id' => 1,
        'reservation_key' => 12438434
    ];

    $reservations[] = [
        'id' => 2,
        'reservation_key' => 97134873
    ];

    $reservations[] = [
        'id' => 3,
        'reservation_key' => 78438292
    ];

    $reservations[] = [
        'id' => 4,
        'reservation_key' => 32419341
    ];

    $reservations[] = [
        'id' => 5,
        'reservation_key' => 45354234
    ];

    $reservations[] = [
        'id' => 6,
        'reservation_key' => 98734995
    ];

    return collect($reservations);
});
