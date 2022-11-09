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

    // get specific pickup
    function getPickup($order_id)
    {
        $pickup = Pickup::where("order_id", $order_id)->where("completed", false)->where("canceled", false)->with("orderInfo")->get();
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

    //addOrUpdatePickup
    function addOrUpdatePickup(Request $request, $pickup_id = 0)
    {
        
            $pickup = Pickup::find($pickup_id);
            $pickup->arrived_time = $request->arrived_time ? $request->arrived_time : $pickup->arrived_time;
            $pickup->completed = $request->completed ? $request->completed : $pickup->completed;
            $pickup->canceled = $request->canceled ? $request->canceled : $pickup->canceled;
            $pickup->status = $request->status ? $request->status : $pickup->status;
            $pickup->location = $request->location ? $request->location : $pickup->location;
        
        if ($pickup->save() && $order->save()) {

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
