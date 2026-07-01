import type { DeepPartial, Translations } from '../types'

export const bg: DeepPartial<Translations> = {
    meta: {
      title: 'Иван Колганов · Софтуерен разработчик',
      description: 'Иван Колганов — разработчик на VPN и backend решения с .NET и Python.',
    },
    nav: {
      about: 'За мен',
      skills: 'Умения',
      projects: 'Проекти',
      contact: 'Контакт',
      github: 'GitHub',
      language: 'Език',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Основна навигация',
    },
    hero: {
      greeting: 'Здравей, аз съм {{name}}',
      name: 'Иван',
      tagline: 'Софтуерен разработчик',
      bio: 'VPN и backend решения с .NET и Python. Нативни клиенти, Docker инфраструктура, мониторинг и Telegram интеграции.',
      viewProjects: 'Виж проекти',
      getInTouch: 'Свържи се',
      repos: 'Репозитории',
      followers: 'Последователи',
      following: 'Следвани',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'За мен',
      title: 'Какво създавам',
      highlights: [
        'Кросплатформени VPN клиенти (Windows, macOS, Linux, iOS, Android)',
        'Dockerized OpenVPN сървъри с .NET API',
        'Dashboards за мониторинг в реално време',
        'Telegram ботове и Mini App валидатори',
      ],
    },
    skills: {
      eyebrow: 'Стек',
      title: 'Умения и инструменти',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Избрани проекти',
      subtitle: 'Акценти от GitHub — предимно екосистемата DataGate VPN.',
      moreTitle: 'Още хранилища',
      browseAll: 'Всички {{count}} repo в GitHub →',
      stars: '{{count}} звезди',
      items: {
        OpenVPNGateBot: 'Бот за свободен и отворен интернет.',
        DataGateMonitor: 'OpenVPN мониторинг с dashboard и статус в реално време.',
        DataGateWin: 'Нативно VPN приложение за Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN сървър с .NET API и Easy-RSA.',
        DataGateAndroid: 'Нативно VPN приложение за Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Нативно VPN приложение за iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF инсталатор за DataGate Windows VPN клиент.',
        DataGateOpenVpnServer: 'Самостоятелен Docker OpenVPN сървър с EasyRSA PKI и .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData валидатор за ASP.NET.',
        StatusGate: 'Self-hosted платформа за статус с история на инциденти.',
        DataGateMonitorFrontend: 'VPN web dashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN клиент — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Да се свържем',
      lead: 'Отворен за сътрудничество по backend, VPN инфраструктура и dev инструменти.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Купи ми кафе',
      },
    },
    footer: {
      source: 'Код в GitHub',
      privacy: 'Поверителност',
    },
    cookies: {
      banner:
        'Сайтът използва localStorage само за език и тема. Без аналитика или рекламно проследяване. Подробности в известието за поверителност.',
      accept: 'Приемам',
      reject: 'Само необходимите',
      privacy: 'Известие за поверителност',
    },
    privacy: {
      title: 'Известие за поверителност',
      updated: 'Последна актуализация: юли 2026',
      close: 'Затвори',
      sections: {
        controller: {
          title: 'Администратор на данни',
          body: 'Иван Колганов оперира rackot.ru. За въпроси относно поверителност: Telegram @KolganovIvan или LinkedIn (връзки в секция Контакт).',
        },
        data: {
          title: 'Какви данни се обработват',
          body: 'Статичен личен сайт. Без потребителски акаунти и формуляри. Логовете на хостинга могат да съдържат IP, тип браузър и време на заявката — както при обикновен уеб хостинг.',
        },
        cookies: {
          title: 'Бисквитки и localStorage',
          body: 'При съгласие езикът и темата се запазват в браузъра (rackotru-locale, rackotru-theme, rackotru-consent). Само функционални настройки — без проследяване. При « Само необходимите » настройките не се запазват между посещения.',
        },
        thirdParty: {
          title: 'Съдържание от трети страни',
          body: 'Сайтът зарежда профилна снимка от GitHub, шрифтове от Google Fonts и връзки към външни услуги. Тези доставчици имат собствени политики за поверителност.',
        },
        rights: {
          title: 'Вашите права (GDPR)',
          body: 'Можете да оттеглите съгласието, като изчистите данните на сайта в браузъра или изберете « Само необходимите » при следващо посещение. Имате право на достъп, коригиране, изтриване, ограничаване или възражение и жалба до надзорен орган.',
        },
        contact: {
          title: 'Контакт',
          body: 'Въпроси относно това известие: Иван Колганов — @KolganovIvan в Telegram или imkolganov в LinkedIn.',
        },
      },
    },
  }
