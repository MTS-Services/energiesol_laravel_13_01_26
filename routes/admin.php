<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\SolarInverterController;
use App\Http\Controllers\Admin\SolarPanelController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth', 'verified']], function () {
    Route::get('dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('users', UserController::class)->names('users');
    Route::resource('solar-panels', SolarPanelController::class)->names('solar-panels');
    Route::resource('solar-inverters', SolarInverterController::class)->names('solar-inverters');
    Route::resource('partners', PartnerController::class)->names('partners');
});
