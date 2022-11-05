<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Pickup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    //GetMyOrder
    function getMyOrder()
    {
        $id = Auth::id();
        $order = Order::where("user_id", $id)->where("ended", false)->get();
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
}
