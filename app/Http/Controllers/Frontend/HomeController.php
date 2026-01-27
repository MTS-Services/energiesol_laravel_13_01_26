<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\FeatureService;
use App\Services\ServiceService;
use App\Services\AdvantageService;
use App\Services\ContactService;
use App\Services\SolarInverterService;
use App\Services\SolarPanelService;
use App\Services\ValueService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;

class HomeController extends Controller
{
    public function __construct(
        protected FeatureService $featureService,
        protected ServiceService $serviceService,
        protected AdvantageService $advantageService,
        protected ValueService $valueService,
        protected ContactService $contactService,
        protected SolarPanelService $solarPanelService,
        protected SolarInverterService $solarInverterService,
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

    public function configuratorStep2($area = null)
    {
        if(!$area){
            return redirect()->route('configurator');
        }


        $solarPanels = $this->solarPanelService->all();
        return Inertia::render('frontend/configurator-step2', [
            'solarPanels' => $solarPanels,
            'area' => $area
        ]);
    }

    public function configuratorStep3($area = null, $solar_id = null)
    {


        if(!$area || !$solar_id){
            return redirect()->route('configurator');
        }

       $solarInverterService =  $this->solarInverterService->all();
        return Inertia::render('frontend/configurator-step3', [
            'solarInverterService' => $solarInverterService,
            'area' => $area,
            'solar_id' => $solar_id
        ]);
    }

    public function configuratorStep4($area, $solar_id, $inverter_id)
    {
        if(!$area || !$solar_id || !$inverter_id){
            
            return redirect()->route('configurator');
        }

         $solarInverter =  $this->solarInverterService->find($inverter_id);
        return Inertia::render('frontend/configurator-step4', [
            'solarInverterService' => $solarInverter,
            'area' => $area,
            'solar_id' => $solar_id,
            'inverter_id' => $inverter_id
        ]);
    }

    public function configuratorStep5($area, $solar_id, $inverter_id, $battery):  Response | RedirectResponse
    {

        if(!$area || !$solar_id || !$inverter_id){

            return redirect()->route('configurator');

        }
        $solarInverter =  $this->solarInverterService->find($inverter_id);
        return Inertia::render('frontend/configurator-step5', [
            'solarInverter' => $solarInverter,
            'area' => $area,
            'solar_id' => $solar_id,
            'inverter_id' => $inverter_id,
            'battery' => $battery
        ]);
    }

    public function configuratorStep6($area = null, $solar_id = null, $inverter_id = null, $battery = null, $charger = null): Response | RedirectResponse
    {
        if(!$area || !$solar_id || !$inverter_id ){
            return redirect()->route('configurator');
        }
        dd($area, $solar_id, $inverter_id, $battery, $charger);

        // return Inertia::render('frontend/configurator-step6');
    }
    
    public function products(Request $request): Response
    {
        return Inertia::render('frontend/products');
    }

    public function orderSuccess(Request $request): Response
    {
        return Inertia::render('frontend/order-success');
    }

    public function store(Request $request): RedirectResponse
    {



     $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
            'message' => 'required',
        ],[
            'first_name.required' => 'Bitte geben Sie Ihren Vornamen ein.',
            'last_name.required' => 'Bitte geben Sie Ihren Nachnamen ein.',
            'email.required' => 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
            'phone_number.required' => 'Bitte geben Sie Ihre Telefonnummer ein.',
            'message.required' => 'Bitte geben Sie Ihre Nachricht ein.',
        ]); 

        $key = 'contact-form:' . $request->ip();
        $limit = 10;
        $duration = 60;
        
        if (RateLimiter::tooManyAttempts($key, $limit)) {
            throw ValidationException::withMessages([
                'limitMessage' => 'Zu viele Versuche. Bitte versuchen Sie es in einer Stunde erneut.',
            ]);
        }

        RateLimiter::hit($key, $duration);

        $contact = $this->contactService->create($request->all());

        return redirect()->route('contact')->with('success', 'Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.');

    }


}
