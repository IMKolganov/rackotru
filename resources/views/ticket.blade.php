<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rackot production</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #000000; /*#fff;*/
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }

        /* стили основного контейнера слайдера */
        .slider {
            /*position: relative;*/
            overflow: hidden;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        /* стили для обёртки, в которой заключены слайды */
        .slider__wrapper {
            position: relative;
            overflow: hidden;
        }

        /* стили для контейнера слайдов */
        .slider__items {
            display: flex;
            transition: transform 0.6s ease;
        }

        /* стили для слайдов */
        .slider__item {
            flex: 0 0 100%;
            max-width: 100%;
        }

        /* стили для кнопок "вперед" и "назад" */
        .slider__control {
            position: absolute;
            top: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            width: 40px;
            color: #fff;
            text-align: center;
            opacity: 0.5;
            height: 50px;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
        }

        .slider__control_show {
            display: flex;
        }

        .slider__control:hover,
        .slider__control:focus {
            color: #000000; /*#fff;*/
            text-decoration: none;
            outline: 0;
            opacity: 0.9;
        }

        .slider__control_prev {
            left: 0;
        }

        .slider__control_next {
            right: 0;
        }

        .slider__control::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            background: transparent no-repeat center center;
            background-size: 100% 100%;
        }

        .slider__control_prev::before {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
        }

        .slider__control_next::before {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
        }

        /* стили для индикаторов */
        .slider__indicators {
            /*position: absolute;*/
            /*right: 0;*/
            /*bottom: 10px;*/
            /*left: 0;*/
            /*z-index: 15;*/
            display: flex;
            justify-content: center;
            /*padding-left: 0;*/
            /*margin-right: 15%;*/
            /*margin-left: 15%;*/
            list-style: none;
            margin-top: 0;
            margin-bottom: 0;
        }

        .slider__indicators li {
            /*box-sizing: content-box;*/
            /*flex: 0 1 auto;*/
            width: 5%;
            /*height: 100%;*/
            /*      margin-right: 3px;
                  margin-left: 3px;*/
            /*text-indent: -999px;*/
            /*cursor: pointer;*/
            /*background-color: rgba(255, 25, 255, 0.5);*/
            background-color: #6A6CFF;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            margin: 3px;
            padding: 3px;
            text-align: center;
            text-decoration-color: white;
            color: white;
        }

        .slider__indicators li.active {
            background-color: #B067FF;
        }

        .slider__item {
            height: 250px;
            position: relative;
        }

        .slider__item_1 {
            background: linear-gradient(45deg, #085078 10%, #85d8ce 90%);
        }

        .slider__item_2 {
            background: linear-gradient(to right, #dd1818, #333333);
        }

        .slider__item_3 {
            background: linear-gradient(to right, #093028, #237a57);
        }

        .slider__item_4 {
            background: linear-gradient(to right, #243B55, #141E30);
        }

        .slider__item_inner {
            position: absolute;
            left: 15%;
            right: 15%;
            top: 20px;
            bottom: 40px;
            overflow: hidden;
            color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .slider__item_title {
            font-size: 2rem;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif

    <div class="content">
        <div class="title m-b-md">
            Чек:
        </div>
        Скачать файл можно по <a target="_blank" href="https://keeperpass.rackot.ru/images/ticked.jpg">ссылке</a>.
        <br /> <br /> <br />
        <img src="https://keeperpass.rackot.ru/images/ticked.jpg" height="800">

    </div>

</div>


</body>
</html>
