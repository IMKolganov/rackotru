<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('telegabot/', 'Controller@telegabot');
Route::post('telegabot/', 'Controller@telegabot');


Route::get('telegabot2/', function () {
    $token = config('services.telegram.bot_token');
    $chatId = config('services.telegram.chat_id');

    if (empty($token) || empty($chatId)) {
        return response('Telegram credentials not configured', 500);
    }

    \Illuminate\Support\Facades\Http::post(
        'https://api.telegram.org/bot'.$token.'/sendMessage',
        [
            'chat_id' => $chatId,
            'text' => 'Привет',
        ]
    );
});


Route::get('/', function () {
    return view('welcome');
});
