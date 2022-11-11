<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if ($user->user_type_id == 1) {
            return $next($request);
        } else {
            return response()->json([
                "status" => 0,
                "data" => "Error -Some Thing went wrong "
            ], 400);
        }
    }
}
