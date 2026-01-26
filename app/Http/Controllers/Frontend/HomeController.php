<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\FeatureService;

class HomeController extends Controller
{
    public function __construct(protected FeatureService $featureService)
    {
        //
    }

    public function home(Request $request): Response
    {
        $features = $this->featureService->latest();
        return Inertia::render('frontend/home', [
            'features' => $features,
        ]);
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

    public function configuratorStep3(Request $request): Response
    {
        return Inertia::render('frontend/configurator-step3');
    }

    public function configuratorStep4(Request $request): Response
    {
        return Inertia::render('frontend/configurator-step4');
    }

    public function configuratorStep5(Request $request): Response
    {
        return Inertia::render('frontend/configurator-step5');
    }

    public function configuratorStep6(Request $request): Response
    {
        return Inertia::render('frontend/configurator-step6');
    }
    
    public function products(Request $request): Response
    {
        return Inertia::render('frontend/products');
    }

    public function orderSuccess(Request $request): Response
    {
        return Inertia::render('frontend/order-success');
    }

}
