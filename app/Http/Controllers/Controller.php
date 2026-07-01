<?php

namespace App\Http\Controllers;

use App\Http\Controllers\HelpUntils\ObsceneCensorRus;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Storage;
use File;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Http\Controllers\HelpUntils\TextCensure;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    const API_URL_TELEGRAM = 'https://api.telegram.org/bot';
    const API_METHOD_SendMessage = "/sendMessage";

    private function telegramToken(): string
    {
        return config('services.telegram.bot_token', '');
    }

    private function LogAdd(string $Message){
        DB::table('telegaBotLogs')->insert([
                'text' => '/'.$Message
                ,'createdate' => Carbon::now()
            ]
        );
    }
    function sendRequest($method, $params = [])
    {
        $token = $this->telegramToken();
        if ($token === '') {
            return response('Telegram bot token not configured', 500);
        }

        if (!empty($params)) {
            $url = self::API_URL_TELEGRAM.$token.$method.'?'.http_build_query($params);
        } else {
            $url = self::API_URL_TELEGRAM.$token.$method;
        }
        $this->LogAdd('telegram request: '.$method);
        $res = json_decode(file_get_contents($url));
        return response('OK', 200);
    }

    private function getResponse($chat_id, $text){
        $textResponse = "";

        if ($chat_id != 0) {
            $this->LogAdd('init json /' . $text);
            if ($text == '/start') {
                $method = self::API_METHOD_SendMessage;
                $params = [
                    'chat_id' => $chat_id,
                    'text' => 'Привет! Я - бот. И я могу подсказать вам, откуда готовилось нападение.',
                ];
                $this->sendRequest($method, $params);
            }elseif ($text == '/about') {
                $method = self::API_METHOD_SendMessage;
                $params = [
                    'chat_id' => $chat_id,
                    'text' => 'Я пока не могу ничего о себе сказать...',
                ];
                $this->sendRequest($method, $params);
            }elseif ($text == '/help') {
                $method = self::API_METHOD_SendMessage;
                $params = [
                    'chat_id' => $chat_id,
                    'text' => 'Кто бы мне помог...',
                ];
                $this->sendRequest($method, $params);
            }else{
                if ($text != ""){
//                    $censure = TextCensure::parse($text);
                    $censure = ObsceneCensorRus::isAllowed($text);
                    if (!$censure){
                        $textResponse = "Успокойте, дышите глубже.";
                    }
                }
                if ($text == 'you' || $text == 'ты'){
                    $needle = 'ты';
                    $pos = strripos(mb_strtoupper($text), mb_strtoupper($needle));
                    if ($pos == false) {
                        $textResponse = "Мы уже перешли на \"ты\"?".$pos;
                    }
                }
//                $needle = "ты";
//                $pos = strripos(mb_strtoupper($text), mb_strtoupper($needle));
//                if ($pos === false) {
//                    $textResponse = "Мы уже перешли на \"ты\"?";
//                }

                if ($textResponse != ""){
                    $method = self::API_METHOD_SendMessage;
                    $params = [
                        'chat_id' => $chat_id,
                        'text' => $textResponse
                    ];
                    $this->sendRequest($method,$params);
                }else{
                    return response('OK', 200);
                }
            }
        }
    }

    private function parseResponse(){
        try {
            $chat_id = 0;
            $this->LogAdd('init request - IP:'.$_SERVER['REMOTE_ADDR']);
            if (file_get_contents("php://input") != false) {
                $data = file_get_contents("php://input");
                $this->LogAdd('/...' . strval($data));

                $data = json_decode($data);
                $chat_id = $data->message->chat->id ?? 0;
                $text = $data->message->text ?? '';

                $this->getResponse($chat_id, $text);
            }


            return 'Привет, я бот компании Rackot production. Однако я ещё ничего не умею.';
        } catch (\Exception $ex) {
            $this->returnError($ex, $chat_id);
        } catch (\Throwable $ex) {
            $this->returnError($ex, $chat_id);
        }
    }

    private function returnError($ex, $chat_id){
        $ErrorMessage = $ex->getMessage();
        DB::table('telegaBotLogs')->insert([
                'text' => '/'.strval($ErrorMessage)
                ,'createdate' => Carbon::now()
            ]
        );

        $method = self::API_METHOD_SendMessage;
        $params = [
            'chat_id' => $chat_id,
            'text' => 'Exception: '.$ErrorMessage
        ];
        $this->sendRequest($method,$params);
        return ['error' => 'invalid_grant', 'error_message' => $ErrorMessage];
    }

    public function telegabot()
    {
        $this->parseResponse();
    }
}
