<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWT
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    { //more layer of security by test in Middleware jwt instead of going to AuthController
        JWTAuth::parseToken()->authenticate();
        $user = Auth::user();
        if ($user->is_verified == true) {
            return $next($request);
        } else {
            return response()->json([
                "status" => -1,
                "data" => "User Not Verified"
            ], 403);
        }
    }
}
