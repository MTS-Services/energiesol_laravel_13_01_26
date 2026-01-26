<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\FeatureService;
use App\Services\ServiceService;
use App\Services\AdvantageService;
use App\Services\ValueService;

class HomeController extends Controller
{
    public function __construct(
        protected FeatureService $featureService,
        protected ServiceService $serviceService,
        protected AdvantageService $advantageService,
        protected ValueService $valueService,
     )
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
        $services = $this->serviceService->latest();
        $advantages = $this->advantageService->latest();
        return Inertia::render('frontend/service', [
            'services' => $services,
            'advantages' => $advantages,
        ]);
    }

    public function advantage(Request $request): Response
    {
        $advantages = $this->advantageService->latest();
        $values = $this->valueService->latest();
        return Inertia::render('frontend/advantage', [
            'advantages' => $advantages,
            'values' => $values,
        ]);
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
