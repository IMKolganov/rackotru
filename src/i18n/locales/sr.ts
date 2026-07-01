import type { DeepPartial, Translations } from '../types'

export const sr: DeepPartial<Translations> = {
    meta: {
      title: 'Иван Колганов · Софтверски инжењер',
      description: 'Иван Колганов — развој VPN и backend решења са .NET и Python.',
    },
    nav: {
      about: 'О мени',
      skills: 'Вештине',
      projects: 'Пројекти',
      contact: 'Контакт',
      github: 'GitHub',
      language: 'Језик',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Главна навигација',
    },
    hero: {
      greeting: 'Здраво, ја сам {{name}}',
      name: 'Иван',
      tagline: 'Софтверски инжењер',
      bio: 'VPN и backend решења са .NET и Python. Нативни клијенти, Docker инфраструктура, мониторинг и Telegram интеграције.',
      viewProjects: 'Погледај пројекте',
      getInTouch: 'Контакт',
      repos: 'Репозиторијуми',
      followers: 'Пратиоци',
      following: 'Пратим',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'О мени',
      title: 'Шта градим',
      highlights: [
        'Вишеплатформски VPN клијенти (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN сервери са .NET API',
        'Мониторинг табле у реалном времену',
        'Telegram ботови и Mini App валидатори',
      ],
    },
    skills: {
      eyebrow: 'Стек',
      title: 'Вештине и алати',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Истакнути пројекти',
      subtitle: 'Најбоље са GitHub-а — углавном DataGate VPN екосистем.',
      moreTitle: 'Више репозиторијума',
      browseAll: 'Свих {{count}} репозиторијума на GitHub →',
      stars: '{{count}} звездица',
      items: {
        OpenVPNGateBot: 'Бот за слободан и отворен интернет.',
        DataGateMonitor: 'OpenVPN мониторинг са таблом и статусом уживо.',
        DataGateWin: 'Нативна Windows VPN апликација — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN сервер са .NET API и Easy-RSA.',
        DataGateAndroid: 'Нативна Android VPN апликација — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Нативна iOS VPN апликација — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF инсталер за DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Самостални Docker OpenVPN сервер са EasyRSA PKI и .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData валидатор за ASP.NET.',
        StatusGate: 'Self-hosted платформа статуса.',
        DataGateMonitorFrontend: 'VPN веб табла — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN клијент — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Повежимо се',
      lead: 'Отворен за сарадњу на backend-у, VPN инфраструктури и dev алатима.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Купи ми кафу',
      },
    },
    footer: {
      source: 'Изворни код на GitHub',
      privacy: 'Приватност',
    },
    cookies: {
      banner:
        'Stranica koristi localStorage samo za jezik i temu. Bez analitike ili oglašivačkog praćenja. Detalji u obavijesti o privatnosti.',
      accept: 'Prihvati',
      reject: 'Samo nužno',
      privacy: 'Obavijest o privatnosti',
    },
    privacy: {
      title: 'Obavijest o privatnosti',
      updated: 'Zadnje ažuriranje: srpanj 2026.',
      close: 'Zatvori',
      sections: {
        controller: {
          title: 'Voditelj obrade',
          body: 'Ivan Kolganov upravlja rackot.ru. Za zahtjeve o privatnosti: Telegram @KolganovIvan ili LinkedIn (poveznice u odjeljku Kontakt).',
        },
        data: {
          title: 'Koji se podaci obrađuju',
          body: 'Statična osobna stranica. Nema korisničkih računa ni obrazaca. Logovi hostinga mogu sadržavati IP, vrstu preglednika i vrijeme zahtjeva — kao kod uobičajenog web hostinga.',
        },
        cookies: {
          title: 'Kolačići i localStorage',
          body: 'Ako prihvatite, jezik i tema spremaju se u preglednik (rackotru-locale, rackotru-theme, rackotru-consent). Samo funkcionalne postavke — bez praćenja. Uz « Samo nužno », postavke se ne spremaju između posjeta.',
        },
        thirdParty: {
          title: 'Sadržaj trećih strana',
          body: 'Stranica učitava profilnu fotografiju s GitHuba, fontove Google Fonts i poveznice na vanjske usluge. Ti pružatelji imaju vlastite politike privatnosti.',
        },
        rights: {
          title: 'Vaša prava (GDPR)',
          body: 'Pristanak možete povući brisanjem podataka stranice u pregledniku ili odabirom « Samo nužno » pri sljedećem posjetu. Imate pravo na pristup, ispravak, brisanje, ograničenje ili prigovor te podnošenje pritužbe nadzornom tijelu.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Pitanja o ovoj obavijesti: Ivan Kolganov — @KolganovIvan na Telegramu ili imkolganov na LinkedInu.',
        },
      },
    },

  }
