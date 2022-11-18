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
        $order = Order::where("user_id", $id)->where("ended", false)->where("approved", true)->with("PickupInfo")->orderBy('picked', "DESC")->get();
        if ($order) {

            return response()->json([
                "status" => 1,
                "data" => $order,
                
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
        $pickup = Pickup::where("order_id", $order_id)->where("completed", false)->where("canceled", false)->with("orderInfo")->first();
        if ($pickup) {

            return response()->json([
                "status" => 1,
                "data" => $pickup,
                
            ]);
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //addOrUpdatePickup
    function addOrUpdatePickup(Request $request)
    {
        $orderSave = 1;
        $id = Auth::id();
        if ($request->pickup_id == 0) {
            $pickup = new Pickup;
            if (!$request->order_id) {
                return response()->json([
                    "status" => 0,
                    "data" => "Error -Some Thing went wrong "
                ], 400);
            }
            $order = Order::find($request->order_id);
            $order->picked = true;
            $pickup->picker_id = $id;
            $pickup->order_id = $request->order_id;
            $pickup->arrived_time=time();
            $orderSave = $order->save();
        } else {
            $pickup = Pickup::find($request->pickup_id);
            $pickup->arrived_time = $request->arrived_time ? $request->arrived_time : $pickup->arrived_time;
            $pickup->completed = $request->completed ? $request->completed : $pickup->completed;
            $pickup->canceled = $request->canceled ? $request->canceled : $pickup->canceled;
            $pickup->status = $request->status ? $request->status : $pickup->status;
            $pickup->location = $request->location ? $request->location : $pickup->location;
        }

        if ($pickup->save() && $orderSave) {

            return response()->json([
                "status" => 1,
                "data" => $pickup,
                
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
        $order = Order::where("user_id", $id)->where("ended", true)->with("EndedPickupInfo")->with("userInfo")->get();
        if ($order) {

            return response()->json([
                "status" => 1,
                "data" => $order,
                
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
                
            ]);
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    function saveImages($image_base64, $Image_name,)
    {
        $data = base64_decode($image_base64);
        $save_name =  "public/orders_images/" . $Image_name . '.png';
        Storage::disk('local')->put($save_name,  $data);
    }

    //Add order
    function addOrder(Request $request)
    {
        $id = Auth::id();
        if (
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
            $order->main_image = "orders_images/" . $main_image . ".png";
            $order->image1 = "orders_images/" . $image1 . ".png";
            $order->image2 = "orders_images/" . $image2 . ".png";

            if ($order->save()) {

                return response()->json([
                    "status" => 1,
                    "data" => $order, 
                ]);
            }
        }

        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //getAllOrder ended or not
    function getAllOrder()
    {
        $order = Order::with("PickupInfo")->with("userInfo")->with("EndedPickupInfo")->orderBy("picked", "DESC")->get();
        if ($order) {

            return response()->json([
                "status" => 1,
                "data" => $order, 
            ]);
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //get order Comments and rates
    function getComments($pickup_id)
    {

        if ($pickup_id) {
            $pickup = Pickup::where("id", $pickup_id)->first();
            if ($pickup) {
                $canceled = false;
                if ($pickup->canceled) {
                    $canceled = true;
                    $result = CanceledPickup::where("pickup_id", $pickup_id)->get();
                } else
                if ($pickup->completed) {
                    $result = CompletedPickup::where("pickup_id", $pickup_id)->get();
                } else {
                    return response()->json([
                        "status" => -1,
                        "data" => "Order Not ended "
                    ], 400);
                }

                return response()->json([
                    "status" => 1,
                    "data" => $result,
                    "canceled" => $canceled, 
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //approveOrder 
    function  approveOrder(Request $request)
    {
        if (
            $request->order_id
        ) {
            $order = Order::find($request->order_id);
            $order->approved = true;

            if ($order->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $order,
                    
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //approveOrder 
    function  disapproveOrder(Request $request)
    {
        if (
            $request->order_id
        ) {
            $order = Order::find($request->order_id);
            $order->approved = false;

            if ($order->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $order,
                    
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //accept live Location  
    function  acceptLocation(Request $request)
    {
        if ($request->id) {
            $pickup = Pickup::find($request->id);
            $pickup->live_location = true;

            if ($pickup->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $pickup,
                    
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //reject live Location  
    function  accessLocation(Request $request)
    {
        if ($request->id && isset($request->access)) {
            $pickup = Pickup::find($request->id);
            $pickup->live_location = $request->access;

            if ($pickup->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $pickup,
                    
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //  set Location  
    function  setLocation(Request $request)
    {
        if (
            $request->id && $request->longitude &&
            $request->latitude
        ) {
            $pickup = Pickup::find($request->id);
            $pickup->longitude = $request->longitude;
            $pickup->latitude = $request->latitude;

            if ($pickup->save()) {
                return response()->json([
                    "status" => 1,
                    "data" => $pickup,
                    
                ]);
            }
        }
        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    //  get Location  
    function  getLocation($id)
    {
        $pickup = Pickup::select('longitude', 'latitude', 'live_location')
            ->where('id',   $id)->first();;

        if ($pickup->save()) {
            return response()->json([
                "status" => 1,
                "data" => $pickup,
                
            ]);
        }

        return response()->json([
            "status" => 0,
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }
}
