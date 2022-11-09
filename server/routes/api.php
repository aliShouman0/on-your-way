<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["prefix" => "ony"], function () {

    // add/signup  user
    Route::post("signup", [UserController::class, "signup"])->name("signup");
    //login
    Route::post('login', [AuthController::class, 'login'])->name("login");
    //JWT auth  
    Route::group(["middleware" => "security"], function () {
        // get my data/current user info
        Route::post('me', [AuthController::class, 'me'])->name("me");
        //get my order
        Route::get('get_my_order', [OrderController::class, 'getMyOrder'])->name("getMyOrder");
        // user info 
        Route::get("get_user_info/{user_id}", [UserController::class, "getUserInfo"])->name("getUserInfo");
       
    });
});
