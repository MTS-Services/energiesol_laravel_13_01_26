<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdvantageController;
use App\Http\Controllers\Admin\FeatureController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SolarInverterController;
use App\Http\Controllers\Admin\SolarPanelController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ValueController;
use Illuminate\Support\Facades\Route;

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth', 'verified', 'admin']], function () {
    Route::get('dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('users', UserController::class)->names('users');
    Route::resource('solar-panels', SolarPanelController::class)->names('solar-panels');
    Route::resource('solar-inverters', SolarInverterController::class)->names('solar-inverters');
    Route::get('batteries/edit', [\App\Http\Controllers\Admin\BatteryController::class, 'edit'])->name('batteries.edit');
    Route::put('batteries', [\App\Http\Controllers\Admin\BatteryController::class, 'update'])->name('batteries.update');
    Route::get('chargers/edit', [\App\Http\Controllers\Admin\ChargerController::class, 'edit'])->name('chargers.edit');
    Route::put('chargers', [\App\Http\Controllers\Admin\ChargerController::class, 'update'])->name('chargers.update');

    Route::get('monitoring-system/edit', [\App\Http\Controllers\Admin\MonitoringSystemController::class, 'edit'])->name('monitoring-system.edit');
    Route::put('monitoring-system', [\App\Http\Controllers\Admin\MonitoringSystemController::class, 'update'])->name('monitoring-system.update');
    Route::resource('partners', PartnerController::class)->names('partners');
    Route::resource('features', FeatureController::class)->names('features');
    Route::resource('services', ServiceController::class)->names('services');
    Route::resource('advantages', AdvantageController::class)->names('advantages');
    Route::resource('values', ValueController::class)->names('values');
});
