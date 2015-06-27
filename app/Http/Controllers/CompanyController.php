<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{

    public function index()
    {
        $companies = [];

        $companies[] = [
            'id' => 1,
            'name' => 'Park Corp',
        ];

        $companies[] = [
            'id' => 2,
            'name' => 'Awesome Company',
        ];

        $companies[] = [
            'id' => 3,
            'name' => 'Third Company',
        ];

        $companies[] = [
            'id' => 27,
            'name' => 'Last Company',
        ];

        return collect($companies);
    }

    public function store()
    {
        dd(Input::all());
    }
}
