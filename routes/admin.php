<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SolarPanelController;
use App\Http\Controllers\Admin\SolarInverterController;

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth', 'verified']], function () {
    Route::get('dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('users', UserController::class)->names('users');
    Route::resource('solar-panels', SolarPanelController::class)->names('solar-panels');
    Route::resource('solar-inverters', SolarInverterController::class)->names('solar-inverters');
});
