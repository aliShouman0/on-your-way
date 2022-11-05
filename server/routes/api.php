<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["prefix" => "auth"], function () {
   
    Route::post('login', [AuthController::class, 'login'])->name("login");
    Route::group(["middleware" => "security"], function () {
        // get my data
        Route::post('me', [AuthController::class, 'me']);
    });
});
 
 