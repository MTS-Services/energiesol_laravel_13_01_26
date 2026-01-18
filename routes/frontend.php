<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;


Route::group([], function () {
    Route::get('/', [HomeController::class, 'home'])->name('home');
});
