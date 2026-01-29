<?php

use App\Http\Controllers\CalendlyWebhookController;
use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Route;

Route::group([], function () {
    Route::get('/', [HomeController::class, 'home'])->name('home');
    Route::get('/service', [HomeController::class, 'service'])->name('service');
    Route::get('/advantage', [HomeController::class, 'advantage'])->name('advantage');
    Route::get('/about-us', [HomeController::class, 'about'])->name('about');
    Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
    Route::get('/configurator', [HomeController::class, 'configurator'])->name('configurator');
    Route::get('/configurator/step-2/{area?}', [HomeController::class, 'configuratorStep2'])->name('configurator.step2');
    Route::get('/configurator/step-3/{area?}/{solar_id?}', [HomeController::class, 'configuratorStep3'])->name('configurator.step3');
    Route::get('/configurator/step-4/{area?}/{solar_id?}/{inverter_id?}', [HomeController::class, 'configuratorStep4'])->name('configurator.step4');
    Route::get('/configurator/step-5/{area?}/{solar_id?}/{inverter_id?}/{battery?}', [HomeController::class, 'configuratorStep5'])->name('configurator.step5');
    Route::get('/configurator/step-6/{area?}/{solar_id?}/{inverter_id?}/{battery?}/{charger?}', [HomeController::class, 'configuratorStep6'])->name('configurator.step6');

    Route::post('/store-estimate', [HomeController::class, 'storeEstimate'])->name('store.estimate');

    Route::get('/products', [HomeController::class, 'products'])->name('products');


    Route::get('/order/success/{estimate_id}', [HomeController::class, 'orderSuccess'])->name('order.success');
    Route::get('/order/success/verify/{estimate_id}', [HomeController::class, 'orderSuccessVerify'])->name('order.success.verify');

    Route::post('/store-contact', [HomeController::class, 'store'])->name('store.contact');










    // WebHook Route for Calendly

    Route::post('/calendly/webhook', [CalendlyWebhookController::class, 'handle'])
     ->withoutMiddleware([VerifyCsrfToken::class]);





    
});
