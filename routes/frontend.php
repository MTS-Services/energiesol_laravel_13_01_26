<?php

use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

Route::group([], function () {
    Route::get('/', [HomeController::class, 'home'])->name('home');
    Route::get('/service', [HomeController::class, 'service'])->name('service');
    Route::get('/advantage', [HomeController::class, 'advantage'])->name('advantage');
    Route::get('/about-us', [HomeController::class, 'about'])->name('about');
    Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
    Route::get('/configurator', [HomeController::class, 'configurator'])->name('configurator');

    Route::get('/products', [HomeController::class, 'products'])->name('products');
    
});
