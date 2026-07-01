import type { DeepPartial, Translations } from '../types'

export const sq: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Zhvillues softueri',
      description: 'Ivan Kolganov — zhvillues i zgjidhjeve VPN dhe backend me .NET dhe Python.',
    },
    nav: {
      about: 'Rreth meje',
      skills: 'Aftësitë',
      projects: 'Projektet',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Gjuha',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navigimi kryesor',
    },
    hero: {
      greeting: 'Përshëndetje, unë jam {{name}}',
      name: 'Ivan',
      tagline: 'Zhvillues softueri',
      bio: 'Zgjidhje VPN dhe backend me .NET dhe Python. Klientë nativë, infrastrukturë Docker, monitorim dhe integrime Telegram.',
      viewProjects: 'Shiko projektet',
      getInTouch: 'Kontakto',
      repos: 'Repo',
      followers: 'Ndjekës',
      following: 'Ndjek',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Rreth meje',
      title: 'Çfarë ndërtoj',
      highlights: [
        'Klientë VPN cross-platform (Windows, macOS, Linux, iOS, Android)',
        'Serverë OpenVPN Docker me API .NET',
        'Panele monitorimi në kohë reale',
        'Botë Telegram dhe validatorë Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Aftësi dhe mjete',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Projekte të zgjedhura',
      subtitle: 'Kryesoret nga GitHub — kryesisht ekosistemi DataGate VPN.',
      moreTitle: 'Më shumë repo',
      browseAll: 'Të gjitha {{count}} repot në GitHub →',
      stars: '{{count}} yje',
      items: {
        OpenVPNGateBot: 'Bot për internet të lirë dhe të hapur.',
        DataGateMonitor: 'Monitorim OpenVPN me panel dhe status në kohë reale.',
        DataGateWin: 'Aplikacion VPN nativ Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Server OpenVPN Docker me API .NET dhe Easy-RSA.',
        DataGateAndroid: 'Aplikacion VPN nativ Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Aplikacion VPN nativ iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Instalues WPF për DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Server OpenVPN Docker me EasyRSA PKI dhe .NET Web API.',
        WebMiniTgAppValidateToken: 'Validator initData Mini App Telegram për ASP.NET.',
        StatusGate: 'Platformë statusi self-hosted.',
        DataGateMonitorFrontend: 'Panel web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Klient VPN desktop Linux — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Le të lidhemi',
      lead: 'I hapur për bashkëpunim në backend, infrastrukturë VPN dhe mjete zhvillimi.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Më bli një kafe',
      },
    },
    footer: {
      source: 'Burimi në GitHub',
      privacy: 'Privatësia',
    },
    cookies: {
      banner:
        'Faqja përdor localStorage vetëm për gjuhën dhe temën. Pa analitikë ose gjurmim reklamash. Shih njoftimin e privatësisë.',
      accept: 'Prano',
      reject: 'Vetëm thelbësore',
      privacy: 'Njoftim privatësie',
    },
    privacy: {
      title: 'Njoftim privatësie',
      updated: 'Përditësuar së fundmi: korrik 2026',
      close: 'Mbyll',
      sections: {
        controller: {
          title: 'Përgjegjësi i të dhënave',
          body: 'Ivan Kolganov operon rackot.ru. Për kërkesa privatësie: Telegram @KolganovIvan ose LinkedIn (lidhjet në seksionin Kontakt).',
        },
        data: {
          title: 'Çfarë të dhënash përpunohen',
          body: 'Faqe personale statike. Pa llogari përdoruesi ose formularë. Regjistrat e hostimit mund të përfshijnë IP, lloj shfletuesi dhe kohën e kërkesës — si në hostim web normal.',
        },
        cookies: {
          title: 'Cookies dhe localStorage',
          body: 'Nëse pranoni, gjuha dhe tema ruhen në shfletues (rackotru-locale, rackotru-theme, rackotru-consent). Vetëm preferenca funksionale — pa gjurmim. Me « Vetëm thelbësore », preferencat nuk ruhen midis vizitave.',
        },
        thirdParty: {
          title: 'Përmbajtje e palëve të treta',
          body: 'Faqja ngarkon foto profili nga GitHub, fonte nga Google Fonts dhe lidhje me shërbime të jashtme. Këta ofrues kanë politikat e tyre të privatësisë.',
        },
        rights: {
          title: 'Të drejtat tuaja (GDPR)',
          body: 'Mund të tërhiqni pëlqimin duke fshirë të dhënat e faqes në shfletues ose duke zgjedhur « Vetëm thelbësore » në vizitën tjetër. Keni të drejtë aksesi, korrigjimi, fshirjeje, kufizimi ose kundërshtimi dhe ankesës te autoriteti mbikëqyrës.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Pyetje për këtë njoftim: Ivan Kolganov — @KolganovIvan në Telegram ose imkolganov në LinkedIn.',
        },
      },
    },
  }
