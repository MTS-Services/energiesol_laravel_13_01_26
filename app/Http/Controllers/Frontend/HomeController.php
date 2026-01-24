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

    public function advantage(Request $request): Response
    {
        return Inertia::render('frontend/advantage');
    }

    public function about(Request $request): Response
    {
        return Inertia::render('frontend/about');
    }

    public function contact(Request $request): Response
    {
        return Inertia::render('frontend/contact');
    }
    
    public function configurator(Request $request): Response
    {
        return Inertia::render('frontend/configurator');
    }

    public function configuratorStep2(Request $request): Response
    {
        return Inertia::render('frontend/configurator-step2');
    }
    
    public function products(Request $request): Response
    {
        return Inertia::render('frontend/products');
    }
}
