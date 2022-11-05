<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    function save_images($image_base64, $Image_name, $isId)
    {
        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string>
        $folder = $isId ? "ids/" : "user_images/";
        $data = base64_decode(explode(',', $image_base64)[1]);
        $save_name = $folder . $Image_name . '.png';
        Storage::disk('local')->put($save_name,  $data);
    }

    //signup
    function signup(Request $request)
    {

        // create new user
        $user = new User;
        if (
            $request->name &&
            $request->birthday &&
            $request->email &&
            $request->phone &&
            $request->address &&
            $request->password &&
            $request->avatar &&
            $request->front_id_photo &&
            $request->back_id_photo

        ) {
            //check if  all needed data are sended and save user
            $user->name =  $request->name;
            $user->birthday =  $request->birthday;
            $user->email =  $request->email;
            $user->phone =  $request->phone;
            $user->address =  $request->address;
            $user->password =  Hash::make($request->password);
            //saving images
            $front_id = $user->email . "front_id";
            $back_id = $user->email . "back_id";
            $this->save_images($request->avatar, $user->email, false);
            $this->save_images($request->front_id_photo, $front_id, true);
            $this->save_images($request->back_id_photo, $back_id, true);
            $user->front_id_photo =  'ids/' . $front_id . '.png';
            $user->back_id_photo =  'ids/' . $back_id . '.png';
            $user->avatar =  'user_images/' . $user->email . '.png';

            if ($user->save()) {
                return response()->json([
                    "status" => "Success",
                    "data" => $user
                ]);
            }
        }

        return response()->json([
            "status" => "Error",
            "data" => "Error -Some Data is missing"
        ], 400);
    }
}
