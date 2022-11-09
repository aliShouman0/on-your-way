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
        if ($pickup_id == 0) {
            $pickup = new Pickup;
            if (!$request->picker_id || !$request->order_id) {
                return response()->json([
                    "status" => 0,
                    "data" => "Error -Some Thing went wrong "
                ], 400);
            }
            $order = Order::find($request->order_id);
            $order->picked = true;
            $pickup->picker_id = $request->picker_id;
            $pickup->order_id = $request->order_id;
        } else {
            $pickup = Pickup::find($pickup_id);
            $pickup->arrived_time = $request->arrived_time ? $request->arrived_time : $pickup->arrived_time;
            $pickup->completed = $request->completed ? $request->completed : $pickup->completed;
            $pickup->canceled = $request->canceled ? $request->canceled : $pickup->canceled;
            $pickup->status = $request->status ? $request->status : $pickup->status;
            $pickup->location = $request->location ? $request->location : $pickup->location;
        }

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

    //receivedOrder 
    function  receivedOrder(Request $request)
    {
        if (
            $request->pickup_id &&
            $request->receiver_comment &&
            $request->receiver_rated
        ) {
            $pickup = Pickup::find($request->pickup_id);
            $order = Order::find($pickup->order_id);
            $picker = User::find($pickup->picker_id);
            $user = User::find($order->user_id);
            $user->order_count = $user->order_count + 1;
            $order->ended = true;
            $completed_pickups =  CompletedPickup::where("pickup_id", $request->pickup_id)->first();
            if (!$completed_pickups) {
                $completed_pickups = new CompletedPickup;
                $completed_pickups->pickup_id = $request->pickup_id;
                $completed_pickups->picker_comment = "NA";
                $completed_pickups->picker_rated = -1;
            }
            $completed_pickups->receiver_comment = $request->receiver_comment;
            $completed_pickups->receiver_rated = $request->receiver_rated;
            $picker->rate =  $request->receiver_rated + $picker->rate;
            if ($picker->save() && $user->save() && $order->save() && $completed_pickups->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $completed_pickups,
                    "refresh" => Auth::refresh()
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //receivedOrder 
    function  completePickup(Request $request)
    {
        if (
            $request->pickup_id &&
            $request->picker_comment &&
            $request->picker_rated
        ) {
            $pickup = Pickup::find($request->pickup_id);
            $user = User::find($pickup->picker_id);
            $order = Order::find($pickup->order_id);
            $receiver = User::find($order->user_id);
            $user->profit = $user->profit + $order->pay;
            $user->order_count = $user->order_count + 1;
            $pickup->completed = true;
            $completed_pickups =  CompletedPickup::where("pickup_id", $request->pickup_id)->first();
            if (!$completed_pickups) {
                $completed_pickups = new CompletedPickup;
                $completed_pickups->pickup_id = $request->pickup_id;
                $completed_pickups->receiver_comment = "NA";
                $completed_pickups->receiver_rated = -1;
            }
            $completed_pickups->picker_comment = $request->picker_comment;
            $completed_pickups->picker_rated = $request->picker_rated;
            $receiver->rate =   $request->picker_rated + $receiver->rate;
            if ($pickup->save() && $user->save() && $completed_pickups->save() && $receiver->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $completed_pickups,
                    "refresh" => Auth::refresh()
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    // cancelOrder
    function cancelOrder(Request $request)
    {
        if ($request->pickup_id && $request->reason) {
            $pickup = Pickup::find($request->pickup_id);
            $user = User::find($pickup->picker_id);
            $canceledPickup = new CanceledPickup;
            $order = Order::find($pickup->order_id);
            $order->ended = true;
            $pickup->canceled = true;
            $user->rate = $user->rate - 0.3;
            $canceledPickup->canceled_by = $user->id;
            $canceledPickup->pickup_id = $request->pickup_id;
            $canceledPickup->reason = $request->reason;

            if (
                $pickup->save() && $user->save() &&
                $canceledPickup->save() && $pickup->save() && $order->save()
            ) {

                return response()->json([
                    "status" => 1,
                    "data" => $canceledPickup,
                    "refresh" => Auth::refresh()
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //get_ended_order
    function getMyEndedOrder()
    {
        $id = Auth::id();
        $order = Order::where("user_id", $id)->where("ended", true)->with("EndedPickupInfo")->get();
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

    //getAllOrders
    function getAllOrders()
    {
        $id = Auth::id();
        $order = Order::whereNot("user_id", $id)->where("picked", false)->where("ended", false)->with("userInfo")->get();
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


    //searchOrders
    function searchOrders(Request $request)
    {

        $id = Auth::id();
        $order = false;
        if ($request->to && $request->from) {

            $order = Order::whereNot("user_id", $id)->where("picked", false)->where("ended", false)->where('from', 'like', '%' . $request->from . '%')->where('to', 'like', '%' . $request->to . '%')->with("userInfo")->get();
        } else {
            if ($request->to) {

                $order = Order::whereNot("user_id", $id)->where("picked", false)->where("ended", false)->where('to', 'like', '%' . $request->to . '%')->with("userInfo")->get();
            }
            if ($request->from) {
                $order = Order::whereNot("user_id", $id)->where("picked", false)->where("ended", false)->where('from', 'like', '%' . $request->from . '%')->with("userInfo")->get();
            }
        }

        if ($order) {
            return response()->json([
                "status" => 1,
                "data" => $order,
                // "refresh" => Auth::refresh()
            ]);
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    function saveImages($image_base64, $Image_name,)
    {
        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string> 
        $data = base64_decode(explode(',', $image_base64)[1]);
        $save_name =  "orders_images/" . $Image_name . '.png';
        Storage::disk('local')->put($save_name,  $data);
    }

    //Add order
    function addOrder(Request $request)
    {
        $id = Auth::id();
        if (
            $request->user_id &&
            $request->from &&
            $request->to &&
            $request->description &&
            $request->pay &&
            $request->main_image &&
            $request->image1 &&
            $request->image2

        ) {
            $order = new Order();
            $order->user_id = $id;
            $order->from = $request->from;
            $order->to = $request->to;
            $order->description = $request->description;
            $order->pay = $request->pay;
            $main_image = uniqid();
            $image1 = uniqid();
            $image2 = uniqid();
            $this->saveImages($request->main_image, $main_image);
            $this->saveImages($request->main_image, $image1);
            $this->saveImages($request->main_image, $image2);
            $order->main_image = "orders_images/" . $main_image;
            $order->image1 = "orders_images/" . $image1;
            $order->image2 = "orders_images/" . $image2;

            if ($order->save()) {

                return response()->json([
                    "status" => 1,
                    "data" => $order,
                    "refresh" => Auth::refresh()
                ]);
            }
        }

        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }
}
