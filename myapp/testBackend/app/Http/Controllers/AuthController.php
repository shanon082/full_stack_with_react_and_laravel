<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        $data = $request -> validated();

        if(!Auth::attempt($data)){
            return response([
                'message' => 'wrong email or password'
            ]);
        }
        $user = Auth::user();
        $token = $user->createToken('main') -> plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function register(RegisterRequest $request){
        $data = $request->validated();

        $user = User::create([
            'name'=>$data['name'],
            'email' =>$data['email'],
            'password' =>bcrypt($data['password'])
        ]);
        $token = $user->createToken('main') -> plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function logout(Request $request){
        $user = $request->user();
        $user -> currentAccessToken() -> delete();
        return response('',204);
    }
}
