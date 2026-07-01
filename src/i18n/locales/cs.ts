import type { DeepPartial, Translations } from '../types'

export const cs: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Vývojář softwaru',
      description: 'Ivan Kolganov — vývojář VPN a backend řešení s .NET a Python.',
    },
    nav: {
      about: 'O mně',
      skills: 'Dovednosti',
      projects: 'Projekty',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Jazyk',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Hlavní navigace',
    },
    hero: {
      greeting: 'Ahoj, jsem {{name}}',
      name: 'Ivan',
      tagline: 'Vývojář softwaru',
      bio: 'VPN a backend řešení s .NET a Python. Nativní klienti, Docker infrastruktura, monitoring a Telegram integrace.',
      viewProjects: 'Zobrazit projekty',
      getInTouch: 'Kontaktovat',
      repos: 'Repozitáře',
      followers: 'Sledující',
      following: 'Sleduji',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'O mně',
      title: 'Co tvořím',
      highlights: [
        'Multiplatformní VPN klienti (Windows, macOS, Linux, iOS, Android)',
        'Dockerizované OpenVPN servery s .NET API',
        'Monitoring dashboardy v reálném čase',
        'Telegram boti a validátory Mini App backendu',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Dovednosti a nástroje',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Vybrané projekty',
      subtitle: 'Nejlepší z GitHubu — především ekosystém DataGate VPN.',
      moreTitle: 'Další repozitáře',
      browseAll: 'Všech {{count}} repozitářů na GitHubu →',
      stars: '{{count}} hvězd',
      items: {
        OpenVPNGateBot: 'Bot pro svobodný a otevřený internet.',
        DataGateMonitor: 'Monitoring OpenVPN s dashboardem a stavem v reálném čase.',
        DataGateWin: 'Nativní VPN aplikace Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerizovaný OpenVPN server s .NET API a Easy-RSA.',
        DataGateAndroid: 'Nativní VPN aplikace Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Nativní VPN aplikace iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF instalátor pro DataGate Windows VPN klienta.',
        DataGateOpenVpnServer: 'Samostatný Docker OpenVPN server s EasyRSA PKI a .NET Web API.',
        WebMiniTgAppValidateToken: 'Validátor initData Telegram Mini App pro ASP.NET.',
        StatusGate: 'Self-hosted status platforma s historií incidentů.',
        DataGateMonitorFrontend: 'Web dashboard VPN — ASP.NET Core + React.',
        DataGateLinux: 'Desktop VPN klient Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Pojďme se spojit',
      lead: 'Otevřen spolupráci na backendu, VPN infrastruktuře a vývojářských nástrojích.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Kup mi kávu',
      },
    },
    footer: {
      source: 'Zdrojový kód na GitHubu',
      privacy: 'Ochrana soukromí',
    },
    cookies: {
      banner:
        'Tento web používá localStorage pouze pro jazyk a motiv. Bez analytiky a reklamního sledování. Podrobnosti v oznámení o ochraně soukromí.',
      accept: 'Přijmout',
      reject: 'Pouze nezbytné',
      privacy: 'Oznámení o ochraně soukromí',
    },
    privacy: {
      title: 'Oznámení o ochraně soukromí',
      updated: 'Poslední aktualizace: červenec 2026',
      close: 'Zavřít',
      sections: {
        controller: {
          title: 'Správce údajů',
          body: 'Ivan Kolganov provozuje rackot.ru. Pro dotazy k ochraně soukromí: Telegram @KolganovIvan nebo LinkedIn (odkazy v sekci Kontakt).',
        },
        data: {
          title: 'Jaké údaje se zpracovávají',
          body: 'Statický osobní web. Žádné uživatelské účty ani formuláře. Logy hostingu mohou obsahovat IP adresu, typ prohlížeče a čas požadavku — jako u běžného webhostingu.',
        },
        cookies: {
          title: 'Cookies a localStorage',
          body: 'Po souhlasu se v prohlížeči ukládají jazyk a motiv (rackotru-locale, rackotru-theme, rackotru-consent). Jde o funkční preference — ne sledování. Při « Pouze nezbytné » se preference mezi návštěvami neukládají.',
        },
        thirdParty: {
          title: 'Obsah třetích stran',
          body: 'Web načítá profilovou fotku z GitHubu, písma Google Fonts a odkazy na externí služby. Ti poskytovatelé mají vlastní zásady ochrany soukromí.',
        },
        rights: {
          title: 'Vaše práva (GDPR)',
          body: 'Souhlas můžete kdykoli odvolat smazáním dat webu v prohlížeči nebo volbou « Pouze nezbytné » při příští návštěvě. Máte právo na přístup, opravu, výmaz, omezení nebo námitku a podat stížnost u dozorového úřadu.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Dotazy k tomuto oznámení: Ivan Kolganov — @KolganovIvan na Telegramu nebo imkolganov na LinkedIn.',
        },
      },
    },
  }
