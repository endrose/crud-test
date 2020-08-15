<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{

    //
    public function login(Request $request)
    {
        $url = config('services.passport.login_endpoint');
        $response = Http::withHeaders([
            'Accept' => 'Application/json'
        ])->post($url, [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => config('services.passport.client_id'),
                'client_secret' => config('services.passport.client_secret'),
                'username'=> $request->username,
                'password'=> $request->password,
            ]
        ]);
        dd($response->status());
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user['token'] = $user->createToken('test')->accessToken;
        $user['name'] = $user->name;

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'Registration Failed!!'], 401);
        }
        return response()->json(['success' => true, 'message' => 'Registration Success'], 200);
    }

    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        return response()->json('Logout successfully', 200);
    }
}
