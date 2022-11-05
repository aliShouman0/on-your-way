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

}
