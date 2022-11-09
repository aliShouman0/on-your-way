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
        //get My Pickup
        Route::get('get_my_pickup', [OrderController::class, 'getMyPickup'])->name("getMyPickup");
        //get specific pickup 
        Route::get('get_pickup/{order_id}', [OrderController::class, 'getPickup'])->name("getPickup");
        // addOrUpdatePickup
        Route::post("add_update_pickup/{pickup_id?}", [OrderController::class, "addOrUpdatePickup"])->name("addOrUpdatePickup");
        //receivedOrder
        Route::post("received_order", [OrderController::class, "receivedOrder"])->name("receivedOrder");
        //completePickups
        Route::post("complete_pickup", [OrderController::class, "completePickup"])->name("completePickup");
        // Cancel order
        Route::post("cancel_order", [OrderController::class, "cancelOrder"])->name("cancelOrder");
        //getMyEndedOrder
        Route::get('get_ended_order', [OrderController::class, 'getMyEndedOrder'])->name("getMyEndedOrder");
        //getAllOrders
        Route::get('get_all_orders', [OrderController::class, 'getAllOrders'])->name("getAllOrders");
        //!!searchOrders  
        Route::post('search_orders', [OrderController::class, 'searchOrders'])->name("searchOrders");
    });
});
