<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\UserManagementController;

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth', 'verified']], function () {
    Route::get('dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('users', UserManagementController::class)->names('users');
});
