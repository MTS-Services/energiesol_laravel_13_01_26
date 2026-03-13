<?php

use App\Http\Controllers\Admin\AdvantageController;
use App\Http\Controllers\Admin\BookingController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\EstimateController;
use App\Http\Controllers\Admin\FeatureController;
use App\Http\Controllers\Admin\MonitoringSystemController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SolarInverterController;
use App\Http\Controllers\Admin\SolarPanelController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ValueController;
use Illuminate\Support\Facades\Route;

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth', 'verified', 'admin']], function () {
    Route::get('dashboard', [\App\Http\Controllers\Admin\AdminDashboardController::class, '__invoke'])->name('dashboard');

    Route::resource('users', UserController::class)->names('users');
    Route::resource('solar-panels', SolarPanelController::class)->names('solar-panels');
    Route::resource('solar-inverters', SolarInverterController::class)->names('solar-inverters');
    Route::resource('bookings', BookingController::class)->only(['index', 'show', 'destroy'])->names('booking');

    Route::get('monitoring-system', [MonitoringSystemController::class, 'show'])->name('monitoring-system.show');
    Route::get('monitoring-system/edit', [MonitoringSystemController::class, 'edit'])->name('monitoring-system.edit');
    Route::put('monitoring-system', [MonitoringSystemController::class, 'update'])->name('monitoring-system.update');

    Route::get('system-setting/edit', [\App\Http\Controllers\Admin\SystemSettingController::class, 'edit'])->name('system-setting.edit');
    Route::put('system-setting', [\App\Http\Controllers\Admin\SystemSettingController::class, 'update'])->name('system-setting.update');

    Route::resource('partners', PartnerController::class)->names('partners');
    Route::resource('features', FeatureController::class)->names('features');
    Route::resource('services', ServiceController::class)->names('services');
    Route::resource('advantages', AdvantageController::class)->names('advantages');
    Route::resource('values', ValueController::class)->names('values');
    Route::delete('contacts/bulk', [ContactController::class, 'bulkDestroy'])->name('contacts.bulk-destroy');
    Route::resource('contacts', ContactController::class)->only(['index', 'show', 'store', 'destroy'])->names('contacts');

    Route::delete('estimates/bulk', [EstimateController::class, 'bulkDestroy'])->name('estimates.bulk-destroy');
    Route::resource('estimates', EstimateController::class)->names('estimates');
    Route::put('estimates/{estimate}/toggle-status', [EstimateController::class, 'toggleStatus'])->name('estimates.toggle-status');
});
