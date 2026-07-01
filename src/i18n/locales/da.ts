import type { DeepPartial, Translations } from '../types'

export const da: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Softwareudvikler',
      description: 'Ivan Kolganov — udvikler af VPN- og backendløsninger med .NET og Python.',
    },
    nav: {
      about: 'Om',
      skills: 'Færdigheder',
      projects: 'Projekter',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Sprog',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Hovednavigation',
    },
    hero: {
      greeting: 'Hej, jeg er {{name}}',
      name: 'Ivan',
      tagline: 'Softwareudvikler',
      bio: 'VPN- og backendløsninger med .NET og Python. Native klienter, Docker-infrastruktur, monitoring og Telegram-integrationer.',
      viewProjects: 'Se projekter',
      getInTouch: 'Kontakt',
      repos: 'Repos',
      followers: 'Følgere',
      following: 'Følger',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Om',
      title: 'Hvad jeg bygger',
      highlights: [
        'Cross-platform VPN-klienter (Windows, macOS, Linux, iOS, Android)',
        'Dockeriserede OpenVPN-servere med .NET API',
        'Realtids monitoring dashboards',
        'Telegram-bots og Mini App backend-validatorer',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Færdigheder & værktøjer',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Udvalgte projekter',
      subtitle: 'Højdepunkter fra GitHub — især DataGate VPN-økosystemet.',
      moreTitle: 'Flere repositories',
      browseAll: 'Alle {{count}} repos på GitHub →',
      stars: '{{count}} stjerner',
      items: {
        OpenVPNGateBot: 'En bot til et frit og åbent internet.',
        DataGateMonitor: 'OpenVPN-overvågning med dashboard og realtidsstatus.',
        DataGateWin: 'Native Windows VPN-app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockeriseret OpenVPN-server med .NET API og Easy-RSA.',
        DataGateAndroid: 'Native Android VPN-app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN-app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-installationsprogram til DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Selvstændig Docker OpenVPN-server med EasyRSA PKI og .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData-validator til ASP.NET.',
        StatusGate: 'Self-hostet statusplatform med incidenthistorik.',
        DataGateMonitorFrontend: 'VPN-webdashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN-klient — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lad os forbinde',
      lead: 'Åben for samarbejde om backend, VPN-infrastruktur og udviklerværktøjer.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Køb mig en kaffe',
      },
    },
    footer: {
      source: 'Kildekode på GitHub',
      privacy: 'Privatliv',
    },
    cookies: {
      banner:
        'Dette site bruger localStorage kun til sprog og tema. Ingen analyse eller annoncesporing. Se privatlivsmeddelelsen.',
      accept: 'Acceptér',
      reject: 'Kun nødvendige',
      privacy: 'Privatlivsmeddelelse',
    },
    privacy: {
      title: 'Privatlivsmeddelelse',
      updated: 'Sidst opdateret: juli 2026',
      close: 'Luk',
      sections: {
        controller: {
          title: 'Dataansvarlig',
          body: 'Ivan Kolganov driver rackot.ru. For privatlivsanmodninger: Telegram @KolganovIvan eller LinkedIn (links i afsnittet Kontakt).',
        },
        data: {
          title: 'Hvilke data behandles',
          body: 'Statisk personlig hjemmeside. Ingen brugerkonti eller formularer. Hostinglogs kan indeholde IP-adresse, browsertype og tidspunkt — som ved normal webhosting.',
        },
        cookies: {
          title: 'Cookies og localStorage',
          body: 'Hvis du accepterer, gemmes sprog og tema i browseren (rackotru-locale, rackotru-theme, rackotru-consent). Kun funktionelle indstillinger — ingen sporing. Med « Kun nødvendige » gemmes indstillinger ikke mellem besøg.',
        },
        thirdParty: {
          title: 'Tredjepartsindhold',
          body: 'Siden indlæser profilbillede fra GitHub, skrifttyper fra Google Fonts og links til eksterne tjenester. Disse udbydere har egne privatlivspolitikker.',
        },
        rights: {
          title: 'Dine rettigheder (GDPR)',
          body: 'Du kan tilbagekalde samtykke ved at slette sitedata i browseren eller vælge « Kun nødvendige » ved næste besøg. Du har ret til indsigt, berigtigelse, sletning, begrænsning eller indsigelse og til at klage til tilsynsmyndighed.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Spørgsmål om denne meddelelse: Ivan Kolganov — @KolganovIvan på Telegram eller imkolganov på LinkedIn.',
        },
      },
    },
  }
