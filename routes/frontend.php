<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;


Route::group([], function () {
    Route::get('/', [HomeController::class, 'home'])->name('home');
    Route::get('/service', [HomeController::class, 'service'])->name('service');
    Route::get('/advantage', [HomeController::class, 'advantage'])->name('advantage');
    Route::get('/about-us', [HomeController::class, 'about'])->name('about');
    
});
