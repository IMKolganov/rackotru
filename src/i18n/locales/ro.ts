import type { DeepPartial, Translations } from '../types'

export const ro: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Dezvoltator software',
      description: 'Ivan Kolganov — dezvoltator de soluții VPN și backend cu .NET și Python.',
    },
    nav: {
      about: 'Despre',
      skills: 'Abilități',
      projects: 'Proiecte',
      contact: 'Contact',
      github: 'GitHub',
      language: 'Limbă',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navigare principală',
    },
    hero: {
      greeting: 'Salut, sunt {{name}}',
      name: 'Ivan',
      tagline: 'Dezvoltator software',
      bio: 'Soluții VPN și backend cu .NET și Python. Clienți nativi, infrastructură Docker, dashboard-uri și integrări Telegram.',
      viewProjects: 'Vezi proiecte',
      getInTouch: 'Contactează-mă',
      repos: 'Repo-uri',
      followers: 'Urmăritori',
      following: 'Urmăresc',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Despre',
      title: 'Ce construiesc',
      highlights: [
        'Clienți VPN multiplatformă (Windows, macOS, Linux, iOS, Android)',
        'Servere OpenVPN dockerizate cu API-uri .NET',
        'Dashboard-uri de monitorizare în timp real',
        'Boți Telegram și validatori backend Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Abilități și instrumente',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Proiecte recomandate',
      subtitle: 'Repere de pe GitHub — în special ecosistemul VPN DataGate.',
      moreTitle: 'Mai multe depozite',
      browseAll: 'Toate cele {{count}} repo-uri pe GitHub →',
      stars: '{{count}} stele',
      items: {
        OpenVPNGateBot: 'Un bot care te conectează la un internet liber și deschis.',
        DataGateMonitor: 'Suite de monitorizare OpenVPN cu dashboard și status în timp real.',
        DataGateWin: 'Aplicație VPN nativă Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Server OpenVPN dockerizat cu API .NET și Easy-RSA.',
        DataGateAndroid: 'Aplicație VPN nativă Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Aplicație VPN nativă iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Installer WPF pentru clientul VPN DataGate Windows.',
        DataGateOpenVpnServer: 'Server OpenVPN Docker cu PKI EasyRSA și API .NET.',
        WebMiniTgAppValidateToken: 'Validator initData Mini App Telegram pentru ASP.NET.',
        StatusGate: 'Platformă de status self-hosted cu istoric incidente.',
        DataGateMonitorFrontend: 'Dashboard web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Client VPN desktop Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Hai să ne conectăm',
      lead: 'Deschis colaborării pe backend, infrastructură VPN și instrumente pentru dezvoltatori.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Cumpără-mi o cafea',
      },
    },
    footer: {
      source: 'Cod sursă pe GitHub',
      privacy: 'Confidențialitate',
    },
    cookies: {
      banner:
        'Acest site folosește localStorage doar pentru limbă și temă. Fără analiză sau urmărire publicitară. Detalii în notificarea de confidențialitate.',
      accept: 'Accept',
      reject: 'Doar esențiale',
      privacy: 'Notificare confidențialitate',
    },
    privacy: {
      title: 'Notificare de confidențialitate',
      updated: 'Ultima actualizare: iulie 2026',
      close: 'Închide',
      sections: {
        controller: {
          title: 'Operator de date',
          body: 'Ivan Kolganov operează rackot.ru. Pentru solicitări privind confidențialitatea: Telegram @KolganovIvan sau LinkedIn (linkuri în secțiunea Contact).',
        },
        data: {
          title: 'Ce date sunt prelucrate',
          body: 'Site personal static. Fără conturi de utilizator sau formulare. Jurnalele de hosting pot include IP, tip de browser și ora cererii — ca la un hosting web obișnuit.',
        },
        cookies: {
          title: 'Cookie-uri și localStorage',
          body: 'Dacă acceptați, limba și tema sunt salvate în browser (rackotru-locale, rackotru-theme, rackotru-consent). Doar preferințe funcționale — fără urmărire. Cu « Doar esențiale », preferințele nu se salvează între vizite.',
        },
        thirdParty: {
          title: 'Conținut terț',
          body: 'Site-ul încarcă o fotografie de profil de pe GitHub, fonturi Google Fonts și linkuri către servicii externe. Acești furnizori au propriile politici de confidențialitate.',
        },
        rights: {
          title: 'Drepturile dvs. (GDPR)',
          body: 'Puteți retrage consimțământul ștergând datele site-ului din browser sau alegând « Doar esențiale » la următoarea vizită. Aveți dreptul de acces, rectificare, ștergere, restricționare sau opoziție și de a depune plângere la autoritatea de supraveghere.',
        },
        contact: {
          title: 'Contact',
          body: 'Întrebări despre această notificare: Ivan Kolganov — @KolganovIvan pe Telegram sau imkolganov pe LinkedIn.',
        },
      },
    },
  }
