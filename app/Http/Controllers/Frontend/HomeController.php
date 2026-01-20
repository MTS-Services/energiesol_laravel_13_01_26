<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{

    public function home(Request $request): Response
    {
        return Inertia::render('frontend/home');
    }
    public function service(Request $request): Response
    {
        return Inertia::render('frontend/service');
    }
}
