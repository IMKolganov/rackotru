import type { DeepPartial, Translations } from '../types'

export const sk: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Softvérový vývojár',
      description: 'Ivan Kolganov — vývojár VPN a backend riešení s .NET a Python.',
    },
    nav: {
      about: 'O mne',
      skills: 'Zručnosti',
      projects: 'Projekty',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Jazyk',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Hlavná navigácia',
    },
    hero: {
      greeting: 'Ahoj, som {{name}}',
      name: 'Ivan',
      tagline: 'Softvérový vývojár',
      bio: 'VPN a backend riešenia s .NET a Python. Natívni klienti, Docker infraštruktúra, monitoring a Telegram integrácie.',
      viewProjects: 'Zobraziť projekty',
      getInTouch: 'Kontaktovať',
      repos: 'Repozitáre',
      followers: 'Sledovatelia',
      following: 'Sledujem',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'O mne',
      title: 'Čo tvorím',
      highlights: [
        'Multiplatformné VPN klienty (Windows, macOS, Linux, iOS, Android)',
        'Dockerizované OpenVPN servery s .NET API',
        'Monitoring dashboardy v reálnom čase',
        'Telegram boti a Mini App backend validátory',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Zručnosti a nástroje',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Vybrané projekty',
      subtitle: 'Najlepšie z GitHubu — predovšetkým ekosystém DataGate VPN.',
      moreTitle: 'Ďalšie repozitáre',
      browseAll: 'Všetkých {{count}} repozitárov na GitHube →',
      stars: '{{count}} hviezd',
      items: {
        OpenVPNGateBot: 'Bot pre slobodný a otvorený internet.',
        DataGateMonitor: 'OpenVPN monitoring s dashboardom a stavom v reálnom čase.',
        DataGateWin: 'Natívna Windows VPN aplikácia — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerizovaný OpenVPN server s .NET API a Easy-RSA.',
        DataGateAndroid: 'Natívna Android VPN aplikácia — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Natívna iOS VPN aplikácia — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF inštalátor pre DataGate Windows VPN klienta.',
        DataGateOpenVpnServer: 'Samostatný Docker OpenVPN server s EasyRSA PKI a .NET Web API.',
        WebMiniTgAppValidateToken: 'Validátor initData Telegram Mini App pre ASP.NET.',
        StatusGate: 'Self-hosted status platforma s históriou incidentov.',
        DataGateMonitorFrontend: 'VPN web dashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN klient — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Spojme sa',
      lead: 'Otvorený spolupráci na backende, VPN infraštruktúre a dev nástrojoch.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Kúp mi kávu',
      },
    },
    footer: {
      source: 'Zdrojový kód na GitHube',
      privacy: 'Ochrana súkromia',
    },
    cookies: {
      banner:
        'Stránka používa localStorage len pre jazyk a tému. Bez analytiky a reklamného sledovania. Podrobnosti v oznámení o ochrane súkromia.',
      accept: 'Prijať',
      reject: 'Len nevyhnutné',
      privacy: 'Oznámenie o ochrane súkromia',
    },
    privacy: {
      title: 'Oznámenie o ochrane súkromia',
      updated: 'Posledná aktualizácia: júl 2026',
      close: 'Zavrieť',
      sections: {
        controller: {
          title: 'Prevádzkovateľ',
          body: 'Ivan Kolganov prevádzkuje rackot.ru. Pre otázky ochrany súkromia: Telegram @KolganovIvan alebo LinkedIn (odkazy v sekcii Kontakt).',
        },
        data: {
          title: 'Aké údaje sa spracúvajú',
          body: 'Statická osobná stránka. Žiadne používateľské účty ani formuláre. Logy hostingu môžu obsahovať IP, typ prehliadača a čas požiadavky — ako pri bežnom webhostingu.',
        },
        cookies: {
          title: 'Cookies a localStorage',
          body: 'Po súhlase sa v prehliadači ukladá jazyk a téma (rackotru-locale, rackotru-theme, rackotru-consent). Len funkčné preferencie — nie sledovanie. Pri « Len nevyhnutné » sa preferencie medzi návštevami neukladajú.',
        },
        thirdParty: {
          title: 'Obsah tretích strán',
          body: 'Stránka načítava profilovú fotku z GitHubu, písma Google Fonts a odkazy na externé služby. Tí poskytovatelia majú vlastné zásady ochrany súkromia.',
        },
        rights: {
          title: 'Vaše práva (GDPR)',
          body: 'Súhlas môžete kedykoľvek odvolať vymazaním údajov stránky v prehliadači alebo voľbou « Len nevyhnutné » pri ďalšej návšteve. Máte právo na prístup, opravu, vymazanie, obmedzenie alebo námietku a podať sťažnosť dozornému orgánu.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Otázky k tomuto oznámeniu: Ivan Kolganov — @KolganovIvan na Telegrame alebo imkolganov na LinkedIn.',
        },
      },
    },
  }
