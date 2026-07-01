import type { DeepPartial, Translations } from '../types'

export const ru: DeepPartial<Translations> = {
    meta: {
      title: 'Иван Колганов · Разработчик ПО',
      description: 'Иван Колганов — разработчик ПО, создающий VPN- и backend-решения на .NET и Python.',
    },
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
      github: 'GitHub',
      language: 'Язык',
      switchToLight: 'Светлая тема',
      switchToDark: 'Тёмная тема',
      mainNav: 'Основная навигация',
    },
    hero: {
      greeting: 'Привет, я {{name}}',
      name: 'Иван',
      tagline: 'Разработчик ПО',
      bio: 'Создаю VPN- и backend-решения на .NET и Python. Нативные клиенты, Docker-инфраструктура, панели мониторинга и интеграции с Telegram.',
      viewProjects: 'Смотреть проекты',
      getInTouch: 'Связаться',
      repos: 'Репозитории',
      followers: 'Подписчики',
      following: 'Подписки',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Чем я занимаюсь',
      lead: 'Я разработчик ПО из {{location}}. {{team}} — моя команда разработчиков для некоммерческих проектов; иногда мы вместе делаем совместные наработки. Специализируюсь на безопасных сетевых продуктах — от нативных VPN-клиентов до контейнеризированной серверной инфраструктуры и инструментов мониторинга.',
      highlights: [
        'Кроссплатформенные VPN-клиенты (Windows, macOS, Linux, iOS, Android)',
        'Docker-развёртывания OpenVPN-серверов с .NET API управления',
        'Панели мониторинга в реальном времени и платформы статуса',
        'Telegram-боты и backend-валидаторы для Mini App',
      ],
    },
    skills: {
      eyebrow: 'Стек',
      title: 'Навыки и инструменты',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Избранные проекты',
      subtitle: 'Лучшее с моего GitHub — в основном экосистема DataGate VPN и связанные инструменты.',
      moreTitle: 'Другие репозитории',
      browseAll: 'Все {{count}} репозиториев на GitHub →',
      stars: '{{count}} звёзд',
      items: {
        OpenVPNGateBot: 'Бот для доступа к свободному и открытому интернету.',
        DataGateMonitor: 'Система мониторинга OpenVPN-серверов с панелью и статусом в реальном времени.',
        DataGateWin: 'Нативное VPN-приложение для Windows — OpenVPN через WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker-развёртывание OpenVPN-сервера с .NET API управления и интеграцией Easy-RSA.',
        DataGateAndroid: 'Нативное VPN-приложение для Android — OpenVPN через WebSocket Secure.',
        DataGateIOS: 'Нативное VPN-приложение для iOS — OpenVPN через WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-установщик для VPN-клиента DataGate на Windows.',
        DataGateOpenVpnServer: 'Автономный Docker OpenVPN-сервер с EasyRSA PKI и .NET Web API.',
        WebMiniTgAppValidateToken: 'Валидатор initData Telegram Mini App для ASP.NET — проверка подписи и срока действия.',
        StatusGate: 'Self-hosted платформа статуса сервисов с таймлайнами uptime и историей инцидентов.',
        DataGateMonitorFrontend: 'Веб-панель мониторинга VPN-подключений — ASP.NET Core + React.',
        DataGateLinux: 'Десктопный VPN-клиент для Linux — Qt 6, вход через Google, встроенный OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Давайте на связи',
      lead: 'Открыт к сотрудничеству над backend-системами, VPN-инфраструктурой и инструментами для разработчиков. Пишите в LinkedIn или смотрите мои проекты на GitHub.',
    links: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      twitter: 'X (Twitter)',
      facebook: 'Facebook',
      telegram: '@KolganovIvan',
      datagate: 'DataGate',
      rackot: 'Rackot production',
      coffee: 'Угостить кофе',
    },
    },
    footer: {
      source: 'Исходники на GitHub',
      privacy: 'Конфиденциальность',
    },
    cookies: {
      banner:
        'Сайт использует localStorage только для языка и темы. Аналитики и рекламного трекинга нет. Подробности — в уведомлении о конфиденциальности.',
      accept: 'Принять',
      reject: 'Только необходимое',
      privacy: 'Конфиденциальность',
    },
    privacy: {
      title: 'Уведомление о конфиденциальности',
      updated: 'Обновлено: июль 2026',
      close: 'Закрыть',
      sections: {
        controller: {
          title: 'Оператор данных',
          body: 'Сайт rackot.ru обслуживает Иван Колганов. По вопросам конфиденциальности — Telegram @KolganovIvan или LinkedIn (ссылки в разделе «Контакты»).',
        },
        data: {
          title: 'Какие данные обрабатываются',
          body: 'Это статический личный сайт. Учётных записей и форм обратной связи нет. Логи хостинга могут содержать IP, тип браузера и время запроса — как при обычном веб-хостинге.',
        },
        cookies: {
          title: 'Cookie и localStorage',
          body: 'При согласии сохраняются язык и тема в браузере (rackotru-locale, rackotru-theme, rackotru-consent). Это функциональные настройки, не трекинг. При выборе «Только необходимое» настройки между визитами не сохраняются.',
        },
        thirdParty: {
          title: 'Сторонние сервисы',
          body: 'Загружаются аватар с GitHub, шрифты Google Fonts, есть ссылки на внешние сервисы. У них действуют собственные политики конфиденциальности.',
        },
        rights: {
          title: 'Ваши права (GDPR)',
          body: 'Согласие можно отозвать, очистив данные сайта в браузере или выбрав «Только необходимое» при следующем визите. Вы вправе запросить доступ, исправление, удаление, ограничение обработки или подать жалобу в надзорный орган.',
        },
        contact: {
          title: 'Контакты',
          body: 'Вопросы по этому уведомлению: Иван Колганов — @KolganovIvan в Telegram или imkolganov в LinkedIn.',
        },
      },
    },
  }
