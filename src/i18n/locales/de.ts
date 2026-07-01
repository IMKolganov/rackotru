import type { DeepPartial, Translations } from '../types'

export const de: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Softwareentwickler',
      description: 'Ivan Kolganov — Softwareentwickler für VPN- und Backend-Lösungen mit .NET und Python.',
    },
    nav: {
      about: 'Über mich',
      skills: 'Skills',
      projects: 'Projekte',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Sprache',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Hauptnavigation',
    },
    hero: {
      greeting: 'Hallo, ich bin {{name}}',
      name: 'Ivan',
      tagline: 'Softwareentwickler',
      bio: 'VPN- und Backend-Lösungen mit .NET und Python. Native Clients, Docker-Infrastruktur, Monitoring-Dashboards und Telegram-Integrationen.',
      viewProjects: 'Projekte ansehen',
      getInTouch: 'Kontakt aufnehmen',
      repos: 'Repos',
      followers: 'Follower',
      following: 'Folge ich',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Was ich baue',
      highlights: [
        'Plattformübergreifende VPN-Clients (Windows, macOS, Linux, iOS, Android)',
        'Dockerized OpenVPN-Server mit .NET-Management-APIs',
        'Echtzeit-Monitoring-Dashboards und Status-Plattformen',
        'Telegram-Bots und Mini-App-Backend-Validatoren',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Skills & Tools',
    },
    projects: {
      eyebrow: 'Open Source',
      title: 'Ausgewählte Projekte',
      subtitle: 'Highlights von GitHub — vor allem das DataGate-VPN-Ökosystem.',
      moreTitle: 'Weitere Repositories',
      browseAll: 'Alle {{count}} Repos auf GitHub →',
      stars: '{{count}} Sterne',
      items: {
        OpenVPNGateBot: 'Ein Bot für freies und offenes Internet.',
        DataGateMonitor: 'Monitoring-Suite für OpenVPN-Server mit Dashboard und Echtzeit-Status.',
        DataGateWin: 'Native Windows VPN app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN server with .NET management API and Easy-RSA integration.',
        DataGateAndroid: 'Native Android VPN app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-Installer für den DataGate-Windows-VPN-Client.',
        DataGateOpenVpnServer: 'Eigenständiger Docker-OpenVPN-Server mit EasyRSA PKI und .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData-Validator für ASP.NET.',
        StatusGate: 'Self-hosted Status-Plattform mit Uptime-Zeitlinien und Incident-Historie.',
        DataGateMonitorFrontend: 'Web-Dashboard für VPN-Monitoring — ASP.NET Core + React.',
        DataGateLinux: 'Desktop-VPN-Client für Linux — Qt 6, Google Sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lass uns verbinden',
      lead: 'Offen für Zusammenarbeit bei Backend-Systemen, VPN-Infrastruktur und Entwicklertools.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Buy me a coffee',
      },
    },
    footer: {
      source: 'Quellcode auf GitHub',
      privacy: 'Datenschutz',
    },
    cookies: {
      banner:
        'Diese Website nutzt localStorage nur für Sprache und Theme. Keine Analyse- oder Werbe-Tracking. Details in der Datenschutzerklärung.',
      accept: 'Akzeptieren',
      reject: 'Nur notwendige',
      privacy: 'Datenschutzerklärung',
    },
    privacy: {
      title: 'Datenschutzerklärung',
      updated: 'Zuletzt aktualisiert: Juli 2026',
      close: 'Schließen',
      sections: {
        controller: {
          title: 'Verantwortlicher',
          body: 'Ivan Kolganov betreibt rackot.ru. Datenschutzanfragen: Telegram @KolganovIvan oder LinkedIn (Links im Abschnitt Kontakt).',
        },
        data: {
          title: 'Welche Daten verarbeitet werden',
          body: 'Dies ist eine statische persönliche Website. Es gibt keine Benutzerkonten und keine Formulare. Server-Logs beim Hoster können IP-Adresse, Browsertyp und Anfragezeit enthalten — wie bei normalem Webhosting.',
        },
        cookies: {
          title: 'Cookies & localStorage',
          body: 'Bei Zustimmung werden Sprache und Theme im Browser gespeichert (rackotru-locale, rackotru-theme, rackotru-consent). Das sind funktionale Einstellungen — kein Tracking. Bei „Nur notwendige“ werden Einstellungen zwischen Besuchen nicht gespeichert.',
        },
        thirdParty: {
          title: 'Drittanbieter-Inhalte',
          body: 'Die Seite lädt ein Profilfoto von GitHub, Schriften von Google Fonts und verlinkt externe Dienste. Diese Anbieter haben eigene Datenschutzrichtlinien.',
        },
        rights: {
          title: 'Ihre Rechte (DSGVO)',
          body: 'Sie können die Einwilligung jederzeit widerrufen, indem Sie Website-Daten im Browser löschen oder beim nächsten Besuch „Nur notwendige“ wählen. Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch sowie auf Beschwerde bei einer Aufsichtsbehörde.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Fragen zu dieser Erklärung: Ivan Kolganov — @KolganovIvan auf Telegram oder imkolganov auf LinkedIn.',
        },
      },
    },
  }
