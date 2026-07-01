import type { DeepPartial, Translations } from '../types'

export const mk: DeepPartial<Translations> = {
    meta: {
      title: 'Иван Колганов · Софтверски инженер',
      description: 'Иван Колганов — развој на VPN и backend решенија со .NET и Python.',
    },
    nav: {
      about: 'За мене',
      skills: 'Вештини',
      projects: 'Проекти',
      contact: 'Контакт',
      github: 'GitHub',
      language: 'Јазик',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Главна навигација',
    },
    hero: {
      greeting: 'Здраво, јас сум {{name}}',
      name: 'Иван',
      tagline: 'Софтверски инженер',
      bio: 'VPN и backend решенија со .NET и Python. Нативни клиенти, Docker инфраструктура, мониторинг и Telegram интеграции.',
      viewProjects: 'Види проекти',
      getInTouch: 'Контакт',
      repos: 'Репозитории',
      followers: 'Следбеници',
      following: 'Следам',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'За мене',
      title: 'Што градам',
      highlights: [
        'Кросплатформски VPN клиенти (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN сервери со .NET API',
        'Мониторинг табли во реално време',
        'Telegram ботови и Mini App валидатори',
      ],
    },
    skills: {
      eyebrow: 'Стек',
      title: 'Вештини и алатки',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Истакнати проекти',
      subtitle: 'Најдобро од GitHub — главно DataGate VPN екосистем.',
      moreTitle: 'Повеќе репозитории',
      browseAll: 'Сите {{count}} репозитории на GitHub →',
      stars: '{{count}} ѕвезди',
      items: {
        OpenVPNGateBot: 'Бот за слободен и отворен интернет.',
        DataGateMonitor: 'OpenVPN мониторинг со табла и статус во живо.',
        DataGateWin: 'Нативна Windows VPN апликација — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN сервер со .NET API и Easy-RSA.',
        DataGateAndroid: 'Нативна Android VPN апликација — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Нативна iOS VPN апликација — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF инсталер за DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Самостоен Docker OpenVPN сервер со EasyRSA PKI и .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData валидатор за ASP.NET.',
        StatusGate: 'Self-hosted платформа за статус.',
        DataGateMonitorFrontend: 'VPN веб табла — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN клиент — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Да се поврземе',
      lead: 'Отворен за соработка на backend, VPN инфраструктура и dev алатки.',
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
      source: 'Изворен код на GitHub',
      privacy: 'Приватност',
    },
    cookies: {
      banner:
        'Страницата користи localStorage само за јezик и тема. Без аналитика или рекламно следење. Детали во известувањето за приватност.',
      accept: 'Прифати',
      reject: 'Само неопходно',
      privacy: 'Известување за приватност',
    },
    privacy: {
      title: 'Известување за приватност',
      updated: 'Последна измена: јули 2026',
      close: 'Затвори',
      sections: {
        controller: {
          title: 'Раководител на податоци',
          body: 'Иван Колганов го управува rackot.ru. За барања за приватност: Telegram @KolganovIvan или LinkedIn (линкови во секцијата Контакт).',
        },
        data: {
          title: 'Кои податоци се обработуваат',
          body: 'Статична лична страница. Нема кориснички сметки или формули. Логовите на хостингот може да содржат IP, тип на прелистувач и време на барање — како при обичен веб хостинг.',
        },
        cookies: {
          title: 'Колачиња и localStorage',
          body: 'Ако прифатите, јazикot и темата се зачувуваат во прелистувачот (rackotru-locale, rackotru-theme, rackotru-consent). Само функционални поставки — без следење. Со « Само неопходно », поставките не се зачувуваат помеѓу посетите.',
        },
        thirdParty: {
          title: 'Содржина од трети страни',
          body: 'Страницата вчитува профилна фотографија од GitHub, фонтови од Google Fonts и линкови кон надворешни услуги. Тие даватели имаат сопствени политики за приватност.',
        },
        rights: {
          title: 'Вашите права (GDPR)',
          body: 'Согласноста може да ја повлечете со бришење на податоците на страницата во прелистувачот или со избор « Само неопходно » при следната посета. Имате право на пристап, исправка, бришење, ограничување или приговор и жалба до надзорен орган.',
        },
        contact: {
          title: 'Контакт',
          body: 'Прашања за ова известување: Ivan Kolganov — @KolganovIvan на Telegram или imkolganov на LinkedIn.',
        },
      },
    },
  }
