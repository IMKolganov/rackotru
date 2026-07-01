import type { DeepPartial, Translations } from '../types'

export const lb: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Softwareentwéckler',
      description: 'Ivan Kolganov — Entwéckler vu VPN- a Backend-Léisungen mat .NET a Python.',
    },
    nav: {
      about: 'Iwwer mech',
      skills: 'Fäegkeeten',
      projects: 'Projeten',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Sprooch',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Haaptnavigatioun',
    },
    hero: {
      greeting: 'Moien, ech sinn {{name}}',
      name: 'Ivan',
      tagline: 'Softwareentwéckler',
      bio: 'VPN- a Backend-Léisungen mat .NET a Python. Nativ Clienten, Docker-Infrastruktur, Monitoring a Telegram-Integratiounen.',
      viewProjects: 'Projeten kucken',
      getInTouch: 'Kontakt',
      repos: 'Repos',
      followers: 'Follower',
      following: 'Follegt',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Iwwer mech',
      title: 'Wat ech bauen',
      highlights: [
        'Cross-Platform VPN-Clienten (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN-Server mat .NET API',
        'Echtzäit-Monitoring-Dashboards',
        'Telegram-Boten a Mini App-Validatoren',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Fäegkeeten & Tools',
    },
    projects: {
      eyebrow: 'Open Source',
      title: 'Ausgewielt Projeten',
      subtitle: 'Highlights vu GitHub — haaptsächlech DataGate VPN-Ökosystem.',
      moreTitle: 'Méi Repositories',
      browseAll: 'All {{count}} Repos op GitHub →',
      stars: '{{count}} Stären',
      items: {
        OpenVPNGateBot: 'E Bot fir en fräien an oppene Internet.',
        DataGateMonitor: 'OpenVPN-Monitoring mat Dashboard an Echtzäit-Status.',
        DataGateWin: 'Native Windows VPN-App — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN-Server mat .NET API an Easy-RSA.',
        DataGateAndroid: 'Native Android VPN-App — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN-App — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-Installer fir DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Docker OpenVPN-Server mat EasyRSA PKI a .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData-Validator fir ASP.NET.',
        StatusGate: 'Self-hosted Status-Plattform.',
        DataGateMonitorFrontend: 'VPN-Web-Dashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux Desktop VPN-Client — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Loos eis verbannen',
      lead: 'Oppe fir Zesummenaarbecht bei Backend, VPN-Infrastruktur a Dev-Tools.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Kaf mir e Kaffi',
      },
    },
    footer: {
      source: 'Quellcode op GitHub',
      privacy: 'Dateschutz',
    },
    cookies: {
      banner:
        'Dës Säit benotzt localStorage nëmmen fir Sprooch a Theme. Keng Analys oder Reklamm-Tracking. Detailer an der Dateschutzerklärung.',
      accept: 'Acceptéieren',
      reject: 'Nëmmen néideg',
      privacy: 'Dateschutzerklärung',
    },
    privacy: {
      title: 'Dateschutzerklärung',
      updated: 'Lescht Aktualiséierung: Juli 2026',
      close: 'Zoumaachen',
      sections: {
        controller: {
          title: 'Verantwortlechen',
          body: 'Ivan Kolganov bedreift rackot.ru. Fir Dateschutz-Ufroen: Telegram @KolganovIvan oder LinkedIn (Linken am Kontakt-Beräich).',
        },
        data: {
          title: 'Wéi eng Donnéeë ginn veraarbecht',
          body: 'Statesch perséinlech Websäit. Keng Benotzerkonten oder Formularen. Server-Logs beim Hosting kënnen IP, Browser-Typ an Ufrozäit enthalen — wéi bei normalem Webhosting.',
        },
        cookies: {
          title: 'Cookies & localStorage',
          body: 'Wann Dir acceptéiert, ginn Sprooch a Theme am Browser gespäichert (rackotru-locale, rackotru-theme, rackotru-consent). Nëmmen funktionell Preferenzen — kee Tracking. Bei « Nëmmen néideg » ginn Preferenzen net tëscht Visite gespäichert.',
        },
        thirdParty: {
          title: 'Drëtt-Ubidder-Inhalt',
          body: 'D\'Säit luet e Profilfoto vu GitHub, Schrëften vu Google Fonts a Linken op extern Servicer. Dës Ubidder hunn hir eege Dateschutzrichtlinnen.',
        },
        rights: {
          title: 'Är Rechter (DSGVO)',
          body: 'Dir kënnt d\'Zoustëmmung zéckzéien andeems Dir Säit-Donnéeën am Browser läscht oder « Nëmmen néideg » bei der nächster Visite wielt. Dir hutt Recht op Avis, Berichtegung, Läschung, Aschränkung oder Protest, an op eng Plainte bei der Iwwerwaachungsautoritéit.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Froen iwwer dës Erklärung: Ivan Kolganov — @KolganovIvan op Telegram oder imkolganov op LinkedIn.',
        },
      },
    },
  }
