<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/test', function (Request $request) {
    return response()->json(['message' => 'Hello from Laravel!']);
});