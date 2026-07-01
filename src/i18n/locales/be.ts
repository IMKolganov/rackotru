import type { DeepPartial, Translations } from '../types'

export const be: DeepPartial<Translations> = {
    meta: {
      title: 'Іван Колганоў · Распрацоўшчык ПЗ',
      description: 'Іван Колганоў — распрацоўшчык VPN і backend-рашэнняў на .NET і Python.',
    },
    nav: {
      about: 'Пра мяне',
      skills: 'Навыкі',
      projects: 'Праекты',
      contact: 'Кантакты',
      github: 'GitHub',
      language: 'Мова',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Галоўная навігацыя',
    },
    hero: {
      greeting: 'Прывітанне, я {{name}}',
      name: 'Іван',
      tagline: 'Распрацоўшчык ПЗ',
      bio: 'VPN і backend-рашэнні на .NET і Python. Натыўныя кліенты, Docker-інфраструктура, маніторынг і Telegram-інтэграцыі.',
      viewProjects: 'Глядзець праекты',
      getInTouch: 'Звязацца',
      repos: 'Рэпазіторыі',
      followers: 'Падпісчыкі',
      following: 'Падпіскі',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Пра мяне',
      title: 'Што я ствараю',
      highlights: [
        'Кросплатформенныя VPN-кліенты (Windows, macOS, Linux, iOS, Android)',
        'OpenVPN-серверы ў Docker з .NET API',
        'Дашборды маніторынгу ў рэальным часе',
        'Telegram-боты і валідатары Mini App',
      ],
    },
    skills: {
      eyebrow: 'Стэк',
      title: 'Навыкі і інструменты',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Абраныя праекты',
      subtitle: 'Лепшае з GitHub — пераважна экасістэма DataGate VPN.',
      moreTitle: 'Іншыя рэпазіторыі',
      browseAll: 'Усе {{count}} рэпазіторыяў на GitHub →',
      stars: '{{count}} зорак',
      items: {
        OpenVPNGateBot: 'Бот для свабоднага і адкрытага інтэрнэту.',
        DataGateMonitor: 'Маніторынг OpenVPN з дашбордам і статусам у рэальным часе.',
        DataGateWin: 'Натыўны VPN-кліент Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'OpenVPN-сервер у Docker з .NET API і Easy-RSA.',
        DataGateAndroid: 'Натыўны VPN-кліент Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Натыўны VPN-кліент iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-інсталятар для DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Аўтаномны Docker OpenVPN-сервер з EasyRSA PKI і .NET Web API.',
        WebMiniTgAppValidateToken: 'Валідатар initData Telegram Mini App для ASP.NET.',
        StatusGate: 'Self-hosted платформа статусу.',
        DataGateMonitorFrontend: 'Вэб-дашборд VPN — ASP.NET Core + React.',
        DataGateLinux: 'VPN-кліент Linux — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Кантакты',
      title: 'Звяжамся',
      lead: 'Адкрыты для супрацоўніцтва ў backend, VPN-інфраструктуры і dev-інструментах.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Купі каву',
      },
    },
    footer: {
      source: 'Код на GitHub',
      privacy: 'Канфідэнцыя',
    },
    cookies: {
      banner:
        'Сайт выкарыстоўвае localStorage толькі для мовы і тэмы. Без аналітыкі і рэкламнага адсочвання. Падрабязнасці ў паведамленні аб канфідэнцыяльнасці.',
      accept: 'Прыняць',
      reject: 'Толькі неабходнае',
      privacy: 'Канфідэнцыя',
    },
    privacy: {
      title: 'Паведамленне аб канфідэнцыяльнасці',
      updated: 'Абноўлена: ліпень 2026',
      close: 'Зачыніць',
      sections: {
        controller: {
          title: 'Аператар дадзеных',
          body: 'Сайтам rackot.ru кіруе Іван Колганов. Па пытаннях канфідэнцыяльнасці: Telegram @KolganovIvan або LinkedIn (спасылкі ў раздзеле Кантакты).',
        },
        data: {
          title: 'Якія дадзеныя апрацоўваюцца',
          body: 'Гэта статычны асабісты сайт. Няма уліковых запісаў і формаў. Логі хостинга могуць утрымліваць IP, тып браўзера і час запыту — як пры звычайным веб-хостингу.',
        },
        cookies: {
          title: 'Cookie і localStorage',
          body: 'Пры згодзе мова і тэма захоўваюцца у браўзеры (rackotru-locale, rackotru-theme, rackotru-consent). Гэта функцыянальныя налады — не адсочванне. Пры « Толькі неабходнае » налады не захоўваюцца паміж візітамі.',
        },
        thirdParty: {
          title: 'Стороннія сервісы',
          body: 'Загружаюцца аватар з GitHub, шрыфты Google Fonts, ёсць спасылкі на знешнія сервісы. У іх свое палітыкі канфідэнцыяльнасці.',
        },
        rights: {
          title: 'Вашы правы (GDPR)',
          body: 'Згоду можна адклікаць, ачысціўшы дадзеныя сайта у браўзеры або выбраўшы « Толькі неабходнае » пры наступным візіце. Вы маеце права на доступ, выпраўленне, выдаленне, абмежаванне апрацоўкі або скаргу у наглядовы орган.',
        },
        contact: {
          title: 'Кантакты',
          body: 'Пытанні аб гэтым паведамленні: Іван Колганов — @KolganovIvan у Telegram албо imkolganov у LinkedIn.',
        },
      },
    },

  }
