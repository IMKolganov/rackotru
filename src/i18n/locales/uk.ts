import type { DeepPartial, Translations } from '../types'

export const uk: DeepPartial<Translations> = {
    meta: {
      title: 'Іван Колганов · Розробник ПЗ',
      description: 'Іван Колганов — розробник VPN і backend-рішень на .NET і Python.',
    },
    nav: {
      about: 'Про мене',
      skills: 'Навички',
      projects: 'Проєкти',
      contact: 'Контакти',
      github: 'GitHub',
      language: 'Мова',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Головна навігація',
    },
    hero: {
      greeting: 'Привіт, я {{name}}',
      name: 'Іван',
      tagline: 'Розробник ПЗ',
      bio: 'VPN і backend-рішення на .NET і Python. Нативні клієнти, Docker-інфраструктура, моніторинг і Telegram-інтеграції.',
      viewProjects: 'Дивитись проєкти',
      getInTouch: 'Зв\'язатися',
      repos: 'Репозиторії',
      followers: 'Підписники',
      following: 'Підписки',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Про мене',
      title: 'Чим займаюсь',
      highlights: [
        'Кросплатформні VPN-клієнти (Windows, macOS, Linux, iOS, Android)',
        'OpenVPN-сервери в Docker з .NET API',
        'Дашборди моніторингу в реальному часі',
        'Telegram-боти та валідатори Mini App',
      ],
    },
    skills: {
      eyebrow: 'Стек',
      title: 'Навички та інструменти',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Обрані проєкти',
      subtitle: 'Найкраще з GitHub — переважно екосистема DataGate VPN.',
      moreTitle: 'Інші репозиторії',
      browseAll: 'Усі {{count}} репозиторіїв на GitHub →',
      stars: '{{count}} зірок',
      items: {
        OpenVPNGateBot: 'Бот для вільного та відкритого інтернету.',
        DataGateMonitor: 'Моніторинг OpenVPN з дашбордом і статусом у реальному часі.',
        DataGateWin: 'Нативний VPN-клієнт Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'OpenVPN-сервер у Docker з .NET API та Easy-RSA.',
        DataGateAndroid: 'Нативний VPN-клієнт Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Нативний VPN-клієнт iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-інсталятор для клієнта DataGate Windows.',
        DataGateOpenVpnServer: 'Автономний Docker OpenVPN-сервер з EasyRSA PKI та .NET Web API.',
        WebMiniTgAppValidateToken: 'Валідатор initData Telegram Mini App для ASP.NET.',
        StatusGate: 'Self-hosted платформа статусу з історією інцидентів.',
        DataGateMonitorFrontend: 'Веб-дашборд VPN — ASP.NET Core + React.',
        DataGateLinux: 'VPN-клієнт Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Контакти',
      title: 'На зв\'язку',
      lead: 'Відкритий до співпраці з backend, VPN-інфраструктурою та dev-інструментами.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Пригостити кавою',
      },
    },
    footer: {
      source: 'Код на GitHub',
      privacy: 'Конфіденційність',
    },
    cookies: {
      banner:
        'Сайт використовує localStorage лише для мови та теми. Без аналітики та рекламного трекінгу. Деталі — у повідомленні про конфіденційність.',
      accept: 'Прийняти',
      reject: 'Лише необхідне',
      privacy: 'Конфіденційність',
    },
    privacy: {
      title: 'Повідомлення про конфіденційність',
      updated: 'Оновлено: липень 2026',
      close: 'Закрити',
      sections: {
        controller: {
          title: 'Оператор даних',
          body: 'Сайт rackot.ru обслуговує Іван Колганов. З питань конфіденційності — Telegram @KolganovIvan або LinkedIn (посилання в розділі «Контакти»).',
        },
        data: {
          title: 'Які дані обробляються',
          body: 'Це статичний особистий сайт. Немає облікових записів і форм. Логи хостингу можуть містити IP, тип браузера та час запиту — як при звичайному веб-хостингу.',
        },
        cookies: {
          title: 'Cookie та localStorage',
          body: 'За згодою зберігаються мова та тема в браузері (rackotru-locale, rackotru-theme, rackotru-consent). Це функціональні налаштування, не трекінг. При «Лише необхідне» налаштування між візитами не зберігаються.',
        },
        thirdParty: {
          title: 'Сторонні сервіси',
          body: 'Завантажуються аватар з GitHub, шрифти Google Fonts, є посилання на зовнішні сервіси. У них діють власні політики конфіденційності.',
        },
        rights: {
          title: 'Ваші права (GDPR)',
          body: 'Згоду можна відкликати, очистивши дані сайту в браузері або обравши «Лише необхідне» при наступному візиті. Ви маєте право на доступ, виправлення, видалення, обмеження обробки або скаргу до нагляового органу.',
        },
        contact: {
          title: 'Контакти',
          body: 'Питання щодо цього повідомлення: Іван Колганов — @KolganovIvan у Telegram або imkolganov у LinkedIn.',
        },
      },
    },
  }
