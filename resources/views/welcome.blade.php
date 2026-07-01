<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
{{--        <meta name="viewport" content="width=device-width, initial-scale=1">--}}
        <meta name="viewport" content="width=device-width">
        <meta name="viewport" content="width=1000">
        <meta name="Description" content="Rackot production Мы не коммерческая организация, а хорошо слаженная команда, но мы растём вместе с Вами. К каждому нашему клиенту у нас индивидуальный подход, именно поэтому мы гарантируем наилучший результат, также мы обеспечиваем техническую поддержку всем нашим клиентам, и Вы в любой момент можете обратиться к нашим специалистам за помощью или консультацией. " />
        <meta name="Keywords" content="rackot, ракот, production, IT, ПО, rakot, rockot, rokot, рокот, новости, программы, услуги, работай с нами, rackot.ru, ракот.ру, production, IT, ПО, rakot.ru, rockot, rokot, рокот.ру, новости IT, программы, услуги IT, работай с нами в IT" />
        
        <title>Rackot production</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #000000; /*#fff;*/
                color: white; /*#636b66;*/
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                /*height: 100vh;*/
            }

            .flex-center {
                /*align-items: center;*/
                /*display: flex;*/
                /*justify-content: center;*/

                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                overflow: auto;
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
                width: 900px;
                height: 900px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -450px 0 0 -450px;
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
            .MyBtn {
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
                /*background: rgba(0, 0, 0, 0.5);*/
            }

            .slider__control_show {
                display: flex;
            }

            .slider__control:hover,
            .slider__control:focus {
                color: #000000; /*#fff;*/
                /*text-decoration: none;*/
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
                /*background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");*/
            }

            .slider__control_next::before {
                /*background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");*/
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
                cursor: pointer;
            }

            .slider__indicators li {
                /*box-sizing: content-box;*/
                /*flex: 0 1 auto;*/
                width: 25%;
                /*height: 100%;*/
                /*      margin-right: 3px;
                      margin-left: 3px;*/
                /*text-indent: -999px;*/
                /*cursor: pointer;*/
                /*background-color: rgba(255, 25, 255, 0.5);*/
                /*background-color: #6A6CFF;*/
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                margin: 3px;
                padding: 3px;
                text-align: center;
                text-decoration-color: white;
            }

            .slider__indicators li.active {
                /*background-color: #B067FF;*/
            }

            .slider__item {
                height: 500px;
                position: relative;
            }

            .slider__item_1 {
                /*background: linear-gradient(45deg, #085078 10%, #85d8ce 90%);*/
            }

            .slider__item_2 {
                /*background: linear-gradient(to right, #dd1818, #333333);*/
            }

            .slider__item_3 {
                /*background: linear-gradient(to right, #093028, #237a57);*/
            }

            .slider__item_4 {
                /*background: linear-gradient(to right, #243B55, #141E30);*/
            }

            .slider__item_inner {
                position: absolute;
                left: 15%;
                right: 15%;
                top: 20px;
                bottom: 40px;
                overflow: hidden;
                /*color: #fff;*/
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
                    Develop best solutions
                </div>

{{--                <div class="links">--}}
{{--                    <!-- <a href="#">Docs</a> -->--}}
{{--                    <!-- <a href="#">Laracasts</a> -->--}}
{{--                    <a href="#">News</a>--}}
{{--                    <!-- <a href="#">Blog</a> -->--}}
{{--                    <!-- <a href="#">Forge</a> -->--}}
{{--                    <a href="#">About as</a>--}}
{{--                    <a href="#">Contacts</a>--}}
{{--                    <a href="#">GitHub</a>--}}
{{--                </div>--}}

                <div class="MyBtn">
                    <ol class="slider__indicators">
                        <li data-slide-to="0" class="slider__item_1">News</li>
                        <li data-slide-to="1" class="slider__item_2">About as</li>
                        <li data-slide-to="2" class="slider__item_3">Contacts</li>
                        <li data-slide-to="3" class="slider__item_4">GitHub</li>
                    </ol>
                </div>


                <div class="slider">
                    <div class="slider__wrapper">
                        <div class="slider__items">
                            <div class="slider__item slider__item_1">
                                <div class="slider__item_inner">
                    <span class="slider__item_title">
                      News
                    </span>
                    <span class="slider__items_description">
                        Ведутся технические работы на сайте.
                    </span>
                                </div>
                            </div>
                            <div class="slider__item slider__item_2">
                                <div class="slider__item_inner">
                    <span class="slider__item_title">
                        About as "Rackot production"
                    </span>
                                    <span class="slider__items_description">
  <p>
    Мы не коммерческая организация,
    а хорошо слаженная команда и
    мы готовы расти вместе с Вами.
    К каждому клиенту у
    нас индивидуальный подход,
    и именно поэтому мы гарантируем наилучший
    результат, а также обеспечиваем техническую поддержку
    всем нашим клиентам. Вы в любой момент можете обратиться к нашим
    специалистам за помощью или консультацией.
  </p>
  <p>
    Данный сайт нацелен на разработку и развитие программного обеспечения
    в различных сферах нашей жизни. Также мы нацелены на поддержку работы
    с программистами в разных областях, ведь каждый грандиозный
    проект требует колосальных усилий и большого количества людей. Пишите нам, объединяйтесь,
    вместе мы добьёмся большего.
                                        </p>
                    </span>
                                </div>
                            </div>
                            <div class="slider__item slider__item_3">
                                <div class="slider__item_inner">
                    <span class="slider__item_title">
                      Contract
                    </span>
                                    <span class="slider__items_description">
<p> По всем интересующим Вас вопросам обращайтесь по телефону - 8 (916)-417-91-21 (Иван).
</p>
<p>Email: admin@rackot.ru</p>

                    </span>
                                </div>
                            </div>
                            <div class="slider__item slider__item_4">
                                <div class="slider__item_inner">
                    <span class="slider__item_title">
                        GitHub
                    </span>
                                    <span class="slider__items_description">
                                        Наши проекты с открытым исходным кодом:

                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            'use strict';
            var slideShow = (function () {
                return function (selector, config, btn) {
                    var
                        _sliderBtn = document.querySelector(btn),
                        _slider = document.querySelector(selector), // основный элемент блока
                        _sliderContainer = _slider.querySelector('.slider__items'), // контейнер для .slider-item
                        _sliderItems = _slider.querySelectorAll('.slider__item'), // коллекция .slider-item
                        _sliderControls = _slider.querySelectorAll('.slider__control'), // элементы управления
                        _currentPosition = 0, // позиция левого активного элемента
                        _transformValue = 0, // значение транфсофрмации .slider_wrapper
                        _transformStep = 100, // величина шага (для трансформации)
                        _itemsArray = [], // массив элементов
                        _timerId,
                        _indicatorItems,
                        _indicatorIndex = 0,
                        _indicatorIndexMax = _sliderItems.length - 1,
                        _stepTouch = 50,
                        _config = {
                            isAutoplay: false, // автоматическая смена слайдов
                            directionAutoplay: 'next', // направление смены слайдов
                            delayAutoplay: 15000, // интервал между автоматической сменой слайдов
                            isPauseOnHover: true // устанавливать ли паузу при поднесении курсора к слайдеру
                        };

                    // настройка конфигурации слайдера в зависимости от полученных ключей
                    for (var key in config) {
                        if (key in _config) {
                            _config[key] = config[key];
                        }
                    }

                    // наполнение массива _itemsArray
                    for (var i = 0, length = _sliderItems.length; i < length; i++) {
                        _itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
                    }

                    // переменная position содержит методы с помощью которой можно получить минимальный и максимальный индекс элемента, а также соответствующему этому индексу позицию
                    var position = {
                        getItemIndex: function (mode) {
                            var index = 0;
                            for (var i = 0, length = _itemsArray.length; i < length; i++) {
                                if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {
                                    index = i;
                                }
                            }
                            return index;
                        },
                        getItemPosition: function (mode) {
                            return _itemsArray[position.getItemIndex(mode)].position;
                        }
                    };

                    // функция, выполняющая смену слайда в указанном направлении
                    var _move = function (direction) {
                        var nextItem, currentIndicator = _indicatorIndex;;
                        if (direction === 'next') {
                            _currentPosition++;
                            if (_currentPosition > position.getItemPosition('max')) {
                                nextItem = position.getItemIndex('min');
                                _itemsArray[nextItem].position = position.getItemPosition('max') + 1;
                                _itemsArray[nextItem].transform += _itemsArray.length * 100;
                                _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
                            }
                            _transformValue -= _transformStep;
                            _indicatorIndex = _indicatorIndex + 1;
                            if (_indicatorIndex > _indicatorIndexMax) {
                                _indicatorIndex = 0;
                            }
                        } else {
                            _currentPosition--;
                            if (_currentPosition < position.getItemPosition('min')) {
                                nextItem = position.getItemIndex('max');
                                _itemsArray[nextItem].position = position.getItemPosition('min') - 1;
                                _itemsArray[nextItem].transform -= _itemsArray.length * 100;
                                _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
                            }
                            _transformValue += _transformStep;
                            _indicatorIndex = _indicatorIndex - 1;
                            if (_indicatorIndex < 0) {
                                _indicatorIndex = _indicatorIndexMax;
                            }
                        }
                        _sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';
                        _indicatorItems[currentIndicator].classList.remove('active');
                        _indicatorItems[_indicatorIndex].classList.add('active');
                    };

                    // функция, осуществляющая переход к слайду по его порядковому номеру
                    var _moveTo = function (index) {
                        var i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';
                        while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
                            _move(direction);
                            i++;
                        }
                    };

                    // функция для запуска автоматической смены слайдов через промежутки времени
                    var _startAutoplay = function () {
                        if (!_config.isAutoplay) {
                            return;
                        }
                        _stopAutoplay();
                        _timerId = setInterval(function () {
                            _move(_config.directionAutoplay);
                        }, _config.delayAutoplay);
                    };

                    // функция, отключающая автоматическую смену слайдов
                    var _stopAutoplay = function () {
                        clearInterval(_timerId);
                    };

                    // функция, добавляющая индикаторы к слайдеру
                    var _addIndicators = function () {
                        var indicatorsContainer = document.querySelector('ol');
                        _sliderBtn.appendChild(indicatorsContainer);
                        _indicatorItems = _sliderBtn.querySelectorAll('.slider__indicators > li')
                    };

                    var _isTouchDevice = function () {
                        return !!('ontouchstart' in window || navigator.maxTouchPoints);
                    };

                    // функция, осуществляющая установку обработчиков для событий
                    var _setUpListeners = function () {
                        var _startX = 0;
                        if (_isTouchDevice()) {
                            _slider.addEventListener('touchstart', function (e) {
                                _startX = e.changedTouches[0].clientX;
                                _startAutoplay();
                            });
                            _slider.addEventListener('touchend', function (e) {
                                var
                                    _endX = e.changedTouches[0].clientX,
                                    _deltaX = _endX - _startX;
                                if (_deltaX > _stepTouch) {
                                    _move('prev');
                                } else if (_deltaX < -_stepTouch) {
                                    _move('next');
                                }
                                _startAutoplay();
                            });
                        } else {
                            for (var i = 0, length = _sliderControls.length; i < length; i++) {
                                _sliderControls[i].classList.add('slider__control_show');
                            }
                        }
                        _sliderBtn.addEventListener('click', function (e) {
                            if (e.target.classList.contains('slider__control')) {
                                e.preventDefault();
                                _move(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');
                                _startAutoplay();
                            } else if (e.target.getAttribute('data-slide-to')) {
                                e.preventDefault();
                                _moveTo(parseInt(e.target.getAttribute('data-slide-to')));
                                _startAutoplay();
                            }
                        });
                        document.addEventListener('visibilitychange', function () {
                            if (document.visibilityState === "hidden") {
                                _stopAutoplay();
                            } else {
                                _startAutoplay();
                            }
                        }, false);
                        if (_config.isPauseOnHover && _config.isAutoplay) {
                            _slider.addEventListener('mouseenter', function () {
                                _stopAutoplay();
                            });
                            _slider.addEventListener('mouseleave', function () {
                                _startAutoplay();
                            });
                        }
                    };

                    // добавляем индикаторы к слайдеру
                    _addIndicators();
                    // установливаем обработчики для событий
                    _setUpListeners();
                    // запускаем автоматическую смену слайдов, если установлен соответствующий ключ
                    _startAutoplay();

                    return {
                        // метод слайдера для перехода к следующему слайду
                        next: function () {
                            _move('next');
                        },
                        // метод слайдера для перехода к предыдущему слайду
                        left: function () {
                            _move('prev');
                        },
                        // метод отключающий автоматическую смену слайдов
                        stop: function () {
                            _config.isAutoplay = false;
                            _stopAutoplay();
                        },
                        // метод запускающий автоматическую смену слайдов
                        cycle: function () {
                            _config.isAutoplay = true;
                            _startAutoplay();
                        }
                    }
                }
            }());

            slideShow('.slider', {
                isAutoplay: true
            }, '.MyBtn');
        </script>
    </body>
</html>
