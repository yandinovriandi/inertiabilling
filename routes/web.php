<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Http\Controllers\HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->name('dashboard');
    Route::controller(\App\Http\Controllers\RouterController::class)->group(function (){
        Route::get('routers-lists','index')->name('routers.index');
        Route::get('router-view/{router}','show')->name('router.show');
    });
});
require __DIR__.'/auth.php';
