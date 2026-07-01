import type { DeepPartial, Translations } from '../types'

export const bs: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Softverski inženjer',
      description: 'Ivan Kolganov — razvoj VPN i backend rješenja sa .NET i Python.',
    },
    nav: {
      about: 'O meni',
      skills: 'Vještine',
      projects: 'Projekti',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Jezik',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Glavna navigacija',
    },
    hero: {
      greeting: 'Zdravo, ja sam {{name}}',
      name: 'Иван',
      tagline: 'Softverski inženjer',
      bio: 'VPN i backend rješenja sa .NET i Python. Nativni klijenti, Docker infrastruktura, monitoring i Telegram integracije.',
      viewProjects: 'Pogledaj projekte',
      getInTouch: 'Kontakt',
      repos: 'Repozitoriji',
      followers: 'Pratioci',
      following: 'Pratim',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'O meni',
      title: 'Šta gradim',
      highlights: [
        'Cross-platform VPN klijenti (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN serveri sa .NET API',
        'Monitoring dashboardi u realnom vremenu',
        'Telegram botovi i Mini App validatori',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Vještine i alati',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Istaknuti projekti',
      subtitle: 'Najbolje sa GitHub-a — uglavnom DataGate VPN ekosistem.',
      moreTitle: 'Više repozitorija',
      browseAll: 'Svih {{count}} repozitorija na GitHub →',
      stars: '{{count}} zvjezdica',
      items: {
        OpenVPNGateBot: 'Bot za slobodan i otvoren internet.',
        DataGateMonitor: 'OpenVPN monitoring sa dashboardom i statusom uživo.',
        DataGateWin: 'Nativna Windows VPN aplikacija — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN server sa .NET API i Easy-RSA.',
        DataGateAndroid: 'Nativna Android VPN aplikacija — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Nativna iOS VPN aplikacija — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF installer za DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Samostalni Docker OpenVPN server sa EasyRSA PKI i .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData validator za ASP.NET.',
        StatusGate: 'Self-hosted status platforma.',
        DataGateMonitorFrontend: 'VPN web dashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN klijent — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Povežimo se',
      lead: 'Otvoren za saradnju na backendu, VPN infrastrukturi i dev alatima.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Častiti kafu',
      },
    },
    footer: {
      source: 'Izvorni kod na GitHub',
      privacy: 'Privatnost',
    },
    cookies: {
      banner:
        'Stranica koristi localStorage samo za jezik i temu. Bez analitike ili oglašivačkog praćenja. Detalji u obavijesti o privatnosti.',
      accept: 'Prihvati',
      reject: 'Samo neophodno',
      privacy: 'Obavijest o privatnosti',
    },
    privacy: {
      title: 'Obavijest o privatnosti',
      updated: 'Posljednje ažuriranje: juli 2026.',
      close: 'Zatvori',
      sections: {
        controller: {
          title: 'Voditelj obrade',
          body: 'Ivan Kolganov upravlja rackot.ru. Za zahtjeve o privatnosti: Telegram @KolganovIvan ili LinkedIn (linkovi u odjeljku Kontakt).',
        },
        data: {
          title: 'Koji se podaci obrađuju',
          body: 'Statična lična stranica. Nema korisničkih naloga ni obrazaca. Logovi hostinga mogu sadržavati IP, vrstu preglednika i vrijeme zahtjeva — kao kod uobičajenog web hostinga.',
        },
        cookies: {
          title: 'Kolačići i localStorage',
          body: 'Ako prihvatite, jezik i tema se čuvaju u pregledniku (rackotru-locale, rackotru-theme, rackotru-consent). Samo funkcionalne postavke — bez praćenja. Uz « Samo neophodno », postavke se ne čuvaju između posjeta.',
        },
        thirdParty: {
          title: 'Sadržaj trećih strana',
          body: 'Stranica učitava profilnu fotografiju sa GitHub-a, fontove Google Fonts i linkove ka spoljnim uslugama. Ti provajderi imaju sopstvene politike privatnosti.',
        },
        rights: {
          title: 'Vaša prava (GDPR)',
          body: 'Saglasnost možete povući brisanjem podataka stranice u pregledniku ili izborom « Samo neophodno » pri sljedećoj posjeti. Imate pravo na pristup, ispravku, brisanje, ograničenje ili prigovor i podnošenje pritužbe nadzornom tijelu.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Pitanja o ovoj obavijesti: Ivan Kolganov — @KolganovIvan na Telegramu ili imkolganov na LinkedIn-u.',
        },
      },
    },
  }
