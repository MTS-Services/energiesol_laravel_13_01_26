<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Jobs\ContactMailJob;
use App\Jobs\EstimateMailJob;
use App\Jobs\OrderPlaceEmailJob;
use App\Mail\ContactMail;
use App\Mail\EstimateMail;
use App\Mail\OrderPlaceEmail;
use App\Services\AdvantageService;
use App\Services\ContactService;
use App\Services\EstimateService;
use App\Services\FeatureService;
use App\Services\GoogleReviewService;
use App\Services\MonitoringSystemService;
use App\Services\PartnerService;
use App\Services\ServiceService;
use App\Services\SolarInverterService;
use App\Services\SolarPanelService;
use App\Services\SystemSettingService;
use App\Services\ValueService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

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
        protected EstimateService $estimateService,
        protected MonitoringSystemService $monitoringSystemService,
        protected PartnerService $partnerService,
        protected SystemSettingService $systemSettingService,
        protected GoogleReviewService $googleReviewService,
    ) {
        //
    }

    public function home(Request $request): Response
    {
        $features = $this->featureService->latest();
        $partners = $this->partnerService->latest();
        $reviews = $this->googleReviewService->getReviews();



        return Inertia::render('frontend/home', [
            'features' => $features,
            'partners' => $partners,
            'reviews' => $reviews
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
        $reviews = $this->googleReviewService->getReviews();
        $advantages = $this->advantageService->latest();
        $values = $this->valueService->latest();

        return Inertia::render('frontend/advantage', [
            'advantages' => $advantages,
            'values' => $values,
            'reviews' => $reviews,
        ]);
    }

    public function privacyPolicy()
    {
        return inertia('frontend/privacy-policy');
    }
    
    public function legal()
    {
        return inertia('frontend/legal');
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
        if (! $area) {
            return redirect()->route('configurator');
        }

        $solarPanels = $this->solarPanelService->all();

        return Inertia::render('frontend/configurator-step2', [
            'solarPanels' => $solarPanels,
            'area' => $area,
        ]);
    }

    public function configuratorStep3($area = null, $solar_id = null)
    {

        if (! $area || ! $solar_id) {
            return redirect()->route('configurator');
        }

        $solarInverterService = $this->solarInverterService->all();

        return Inertia::render('frontend/configurator-step3', [
            'solarInverterService' => $solarInverterService,
            'area' => $area,
            'solar_id' => $solar_id,
        ]);
    }

    public function configuratorStep4($area, $solar_id, $inverter_id)
    {
        if (! $area || ! $solar_id || ! $inverter_id) {

            return redirect()->route('configurator');
        }

        $solarInverter = $this->solarInverterService->find($inverter_id);

        return Inertia::render('frontend/configurator-step4', [
            'solarInverter' => $solarInverter,
            'area' => $area,
            'solar_id' => $solar_id,
            'inverter_id' => $inverter_id,
        ]);
    }

    public function configuratorStep5($area, $solar_id, $inverter_id, $battery): Response|RedirectResponse
    {

        if (! $area || ! $solar_id || ! $inverter_id) {

            return redirect()->route('configurator');
        }
        $solarInverter = $this->solarInverterService->find($inverter_id);

        return Inertia::render('frontend/configurator-step5', [
            'solarInverter' => $solarInverter,
            'area' => $area,
            'solar_id' => $solar_id,
            'inverter_id' => $inverter_id,
            'battery' => $battery,
        ]);
    }

    public function configuratorStep6($area = null, $solar_id = null, $inverter_id = null, $battery = null, $charger = null): Response|RedirectResponse
    {
        if (! $area || ! $solar_id || ! $inverter_id) {
            return redirect()->route('configurator');
        }

        return Inertia::render('frontend/configurator-step6', [
            'area' => $area,
            'solar_id' => $solar_id,
            'inverter_id' => $inverter_id,
            'battery' => $battery,
            'charger' => $charger,
        ]);
    }

    public function products(Request $request): Response
    {
        $features = $this->featureService->latest();
        return Inertia::render('frontend/products', [
            'features' => $features,
        ]);
    }

    public function orderSuccess(int $estimate_id): Response|RedirectResponse
    {
        $estimate = $this->estimateService->find($estimate_id);

        $monitoringSystem = $this->monitoringSystemService->monitor();
        if (! $estimate) {
            return redirect()->route('configurator');
        }
        $estimate->load('solarPanel', 'solarInverter');

        return Inertia::render('frontend/order-success', [
            'estimate' => $estimate,
            'is_valid_order' => $estimate->is_valid_order,
            'monitoringSystem' => $monitoringSystem,
        ]);
    }

    public function OrderSuccessAdminView($estimate_id){
         $estimate = $this->estimateService->find($estimate_id);

        $monitoringSystem = $this->monitoringSystemService->monitor();
        if (! $estimate) {
            return redirect()->route('configurator');
        }
        $estimate->load('solarPanel', 'solarInverter');

        return Inertia::render('frontend/order-success-admin-view', [
            'estimate' => $estimate,
            'is_valid_order' => $estimate->is_valid_order,
            'monitoringSystem' => $monitoringSystem,
        ]);
    }

    public function orderSuccessVerify($encrypted_estimate_id)
    {

        $id = decrypt($encrypted_estimate_id);

        $estimated = $this->estimateService->update($id, ['is_valid_order' => true]);

        return redirect()->route('order.success', ['estimate_id' => $estimated->id]);
    }

    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
            'message' => 'required',
        ], [
            'first_name.required' => 'Bitte geben Sie Ihren Vornamen ein.',
            'last_name.required' => 'Bitte geben Sie Ihren Nachnamen ein.',
            'email.required' => 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
            'phone_number.required' => 'Bitte geben Sie Ihre Telefonnummer ein.',
            'message.required' => 'Bitte geben Sie Ihre Nachricht ein.',
        ]);

        $key = 'contact-form:'.$request->ip();
        $limit = 10;
        $duration = 60;

        if (RateLimiter::tooManyAttempts($key, $limit)) {
            throw ValidationException::withMessages([
                'limitMessage' => 'Zu viele Versuche. Bitte versuchen Sie es in einer Stunde erneut.',
            ]);
        }

        RateLimiter::hit($key, $duration);

        $contact = $this->contactService->create($request->all());

        // if($contact) ContactMailJob::dispatch();
       try{
         if($contact)  Mail::to(config('app.admin_mail_address'))->send(new ContactMail);
       }catch(\Exception $e){
         // Log the error or handle it as needed
         Log::error('Contact mail sending failed: ' . $e->getMessage());
       }
        return redirect()->back()->with('success', 'Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.');
    }

    public function storeEstimate(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
           
        ], [
            'first_name.required' => 'Bitte geben Sie Ihren Vornamen ein.',
            'last_name.required' => 'Bitte geben Sie Ihren Nachnamen ein.',
            'email.required' => 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
            'email.email' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
            'phone.required' => 'Bitte geben Sie Ihre Telefonnummer ein.',
          
           
        ]);

       $data = $request->all();
        $data['consent'] = true;
       unset($data['consentEmail']);
       unset($data['consentPhone']);
       
        $key = 'estimate-form:'.$request->ip();
        $limit = 10;
        $duration = 60;

        if (RateLimiter::tooManyAttempts($key, $limit)) {
            throw ValidationException::withMessages([
                'limitMessage' => 'Zu viele Versuche. Bitte versuchen Sie es in einer Stunde erneut.',
            ]);
        }

        RateLimiter::hit($key, $duration);

        $estimate = $this->estimateService->create($data);

        try {


             Mail::to($estimate->email)->send(new EstimateMail(route('order.success.verify', encrypt($estimate->id))));
          //  EstimateMailJob::dispatch(route('order.success.verify', encrypt($estimate->id)), $estimate->email);
            Mail::to(config('app.admin_mail_address'))->send(new OrderPlaceEmail(route('order.success.admin-view', $estimate->id)));
           // OrderPlaceEmailJob::dispatch(route('order.success.admin-view', $estimate->id));
        } catch (\Exception $e) {

            Log::error('Error sending email: '.$e->getMessage());
        }

        return redirect()->route('order.success', ['estimate_id' => $estimate->id]);
    }

    public function orderDownloadPdf($estimate_id)
    {
        $estimate = $this->estimateService->find($estimate_id);
        $systemSetting = $this->systemSettingService->getSystemSettings();
        $monitoringSystem = $this->monitoringSystemService->monitor();

        if (! $estimate) {
            abort(404);
        }

        if (! $systemSetting) {
            abort(500, 'System settings not configured');
        }

        $estimate->load('solarPanel', 'solarInverter');

        if (! $estimate->solarPanel || ! $estimate->solarInverter) {
            abort(422, 'Missing solar panel or inverter data');
        }

        $data = [
            'solar_panel_module' => ceil($estimate->area / $systemSetting->module_unit_in_meter),
            'solar_panel_price' => ceil($estimate->area / $systemSetting->module_unit_in_meter) * $estimate->solarPanel->price,
            'solar_inverter_price' => $estimate->solarInverter->price,
            'wallbox' => $systemSetting->wallbox_price,
            'evu_fees' => $systemSetting->evu_fees,
            'delivery_fees' => $systemSetting->delivery_fees,
            'service_charge' => $systemSetting->service_charge,
        ];
        if ($estimate->battery) {
            $data['solar_inverter_battery_price'] = $estimate->solarInverter->battery_price;
        } else {
            $data['solar_inverter_battery_price'] = 0;
        }
        if ($estimate->charger) {
            $data['solar_inverter_charger_price'] = $estimate->solarInverter->charger_price;
        } else {
            $data['solar_inverter_charger_price'] = 0;
        }

        $data['vat'] = $systemSetting->vat ?? 0;
        $data['discount'] = $systemSetting->discount ?? 0;
        $data['monitoring_system_price'] = $monitoringSystem->price ?? 0;

        $data['sub_total'] = (
            $data['solar_panel_price'] +
            $data['solar_inverter_price'] +
            $data['solar_inverter_battery_price'] +
            $data['solar_inverter_charger_price'] +
            $data['monitoring_system_price'] +
            $data['wallbox'] +
            $data['evu_fees']
        );
        $data['discount_amount'] = $data['sub_total'] * ($data['discount'] / 100);

        $data['vat_amount'] = $data['sub_total'] * ($data['vat'] / 100);

        $data['grand_total'] = $data['sub_total'] - $data['discount_amount'] + $data['vat_amount'] + $data['delivery_fees'] + $data['service_charge'];

        $solarPanel = $estimate->solarPanel;
        $solarInverter = $estimate->solarInverter;

        try {
            $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('invoice.generate-invoice', compact('data', 'solarPanel', 'solarInverter', 'monitoringSystem'));
            return $pdf->download('estimate.pdf');
        } catch (\Exception $e) {
            Log::error('PDF generation failed: ' . $e->getMessage());
            abort(500, 'PDF generation failed. Please try again.');
        }

    }

    public function orderDownloadPdfAnalysis($estimate_id)
    {
        $estimate = $this->estimateService->find($estimate_id);

        if (! $estimate) {
            abort(404);
        }

        $estimate->load('solarPanel', 'solarInverter');

        if (! $estimate->solarPanel || ! $estimate->solarInverter) {
            abort(422, 'Missing solar panel or inverter data');
        }

        $systemSetting = $this->systemSettingService->getSystemSettings();
        $monitoringSystem = $this->monitoringSystemService->monitor();

        if (! $systemSetting) {
            abort(500, 'System settings not configured');
        }

        $moduleCount = ceil($estimate->area / $systemSetting->module_unit_in_meter);

        $data = [
            'solar_panel_module' => $moduleCount,
            'solar_panel_price' => $moduleCount * $estimate->solarPanel->price,
            'solar_inverter_price' => $estimate->solarInverter->price,
            'wallbox' => $systemSetting->wallbox_price,
            'evu_fees' => $systemSetting->evu_fees,
            'delivery_fees' => $systemSetting->delivery_fees,
            'service_charge' => $systemSetting->service_charge,
            'solar_inverter_battery_price' => $estimate->battery ? $estimate->solarInverter->battery_price : 0,
            'solar_inverter_charger_price' => $estimate->charger ? $estimate->solarInverter->charger_price : 0,
            'vat' => $systemSetting->vat ?? 0,
            'discount' => $systemSetting->discount ?? 0,
            'monitoring_system_price' => $monitoringSystem?->price ?? 0,
            'module' => $moduleCount,
            'wallbox_electricity_generate' => $systemSetting->wallbox_boost_electricity,
            'generated_electricity_per_module' => $systemSetting->generate_electricity_per_module,
            'unit_price' => $systemSetting->unit_price,
        ];

        $data['sub_total'] = array_sum([
            $data['solar_panel_price'],
            $data['solar_inverter_price'],
            $data['solar_inverter_battery_price'],
            $data['solar_inverter_charger_price'],
            $data['monitoring_system_price'],
            $data['wallbox'],
            $data['evu_fees'],
        ]);

        $data['discount_amount'] = $data['sub_total'] * ($data['discount'] / 100);
        $data['vat_amount'] = $data['sub_total'] * ($data['vat'] / 100);
        $data['grand_total'] = $data['sub_total'] - $data['discount_amount'] + $data['vat_amount'] + $data['delivery_fees'] + $data['service_charge'];

        $html = view()->make('invoice.generate-invoice-analysis', compact('data'))->render();

        try {
            $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadHTML($html);
            return $pdf->download('estimate-analysis.pdf');
        } catch (\Exception $e) {
            Log::error('PDF analysis generation failed: ' . $e->getMessage());
            abort(500, 'PDF analysis generation failed. Please try again.');
        }

    }




}
