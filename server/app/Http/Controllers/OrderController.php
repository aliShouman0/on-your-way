<?php

namespace App\Http\Controllers;

use App\Models\CanceledPickup;
use App\Models\CompletedPickup;
use App\Models\Order;
use App\Models\Pickup;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    //GetMyOrder
    function getMyOrder()
    {
        $id = Auth::id();
        $order = Order::where("user_id", $id)->where("ended", false)->with("PickupInfo")->get();
        if ($order) {

            return response()->json([
                "status" => 1,
                "data" => $order,
                "refresh" => Auth::refresh()
            ]);
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    // get pickup
    function getMyPickup()
    {
        $id = Auth::id();
        $pickup = Pickup::where("picker_id", $id)->where("completed", false)->where("canceled", false)->with("orderInfo")->get();
        if ($pickup) {

            return response()->json([
                "status" => 1,
                "data" => $pickup,
                "refresh" => Auth::refresh()
            ]);
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

  
}
