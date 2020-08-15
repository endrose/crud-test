<?php

namespace App\Http\Controllers;

use App\Biodata;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //
    public function index()
    {
        return view('Company.index');
    }
}
