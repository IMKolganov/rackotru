import type { DeepPartial, Translations } from '../types'

export const nl: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Softwareontwikkelaar',
      description: 'Ivan Kolganov — softwareontwikkelaar van VPN- en backend-oplossingen met .NET en Python.',
    },
    nav: {
      about: 'Over',
      skills: 'Vaardigheden',
      projects: 'Projecten',
      contact: 'Contact',
      github: 'GitHub',
      language: 'Taal',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Hoofdnavigatie',
    },
    hero: {
      greeting: 'Hallo, ik ben {{name}}',
      name: 'Ivan',
      tagline: 'Softwareontwikkelaar',
      bio: 'VPN- en backend-oplossingen met .NET en Python. Native clients, Docker-infrastructuur, monitoringdashboards en Telegram-integraties.',
      viewProjects: 'Projecten bekijken',
      getInTouch: 'Contact opnemen',
      repos: 'Repos',
      followers: 'Volgers',
      following: 'Volgend',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Over',
      title: 'Wat ik bouw',
      highlights: [
        'Cross-platform VPN-clients (Windows, macOS, Linux, iOS, Android)',
        'Gedockerizeerde OpenVPN-servers met .NET-beheer-API\'s',
        'Realtime monitoringdashboards en statusplatforms',
        'Telegram-bots en Mini App-backendvalidators',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Vaardigheden & tools',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Uitgelichte projecten',
      subtitle: 'Hoogtepunten van GitHub — vooral het DataGate VPN-ecosysteem.',
      moreTitle: 'Meer repositories',
      browseAll: 'Bekijk alle {{count}} repos op GitHub →',
      stars: '{{count}} sterren',
      items: {
        OpenVPNGateBot: 'Een bot die je verbindt met een vrij en open internet.',
        DataGateMonitor: 'Monitoring suite voor OpenVPN-servers met dashboard en realtime status.',
        DataGateWin: 'Native Windows VPN app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN server with .NET management API and Easy-RSA integration.',
        DataGateAndroid: 'Native Android VPN app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-installatieprogramma voor de DataGate Windows VPN-client.',
        DataGateOpenVpnServer: 'Zelfstandige Docker OpenVPN-server met EasyRSA PKI en .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData-validator voor ASP.NET.',
        StatusGate: 'Self-hosted statusplatform met uptime-tijdlijnen en incidentgeschiedenis.',
        DataGateMonitorFrontend: 'Webdashboard voor VPN-monitoring — ASP.NET Core + React.',
        DataGateLinux: 'Desktop VPN-client voor Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Laten we verbinden',
      lead: 'Open voor samenwerking aan backends, VPN-infrastructuur en ontwikkeltools.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Trakteer me op koffie',
      },
    },
    footer: {
      source: 'Broncode op GitHub',
      privacy: 'Privacy',
    },
    cookies: {
      banner:
        'Deze site gebruikt localStorage alleen voor taal en thema. Geen analytics of advertentietracking. Zie het privacybericht.',
      accept: 'Accepteren',
      reject: 'Alleen essentieel',
      privacy: 'Privacybericht',
    },
    privacy: {
      title: 'Privacybericht',
      updated: 'Laatst bijgewerkt: juli 2026',
      close: 'Sluiten',
      sections: {
        controller: {
          title: 'Verwerkingsverantwoordelijke',
          body: 'Ivan Kolganov beheert rackot.ru. Voor privacyverzoeken: Telegram @KolganovIvan of LinkedIn (links in het gedeelte Contact).',
        },
        data: {
          title: 'Welke gegevens worden verwerkt',
          body: 'Statische persoonlijke website. Geen gebruikersaccounts of formulieren. Serverlogs bij de host kunnen IP-adres, browsertype en aanvraagtijd bevatten — zoals bij normale webhosting.',
        },
        cookies: {
          title: 'Cookies en localStorage',
          body: 'Bij acceptatie worden taal en thema in de browser opgeslagen (rackotru-locale, rackotru-theme, rackotru-consent). Alleen functionele voorkeuren — geen tracking. Bij « Alleen essentieel » worden voorkeuren niet tussen bezoeken bewaard.',
        },
        thirdParty: {
          title: 'Content van derden',
          body: 'De site laadt een profielfoto van GitHub, lettertypen van Google Fonts en links naar externe diensten. Die aanbieders hebben hun eigen privacybeleid.',
        },
        rights: {
          title: 'Uw rechten (AVG)',
          body: 'U kunt toestemming intrekken door sitegegevens in de browser te wissen of bij uw volgende bezoek « Alleen essentieel » te kiezen. U heeft recht op inzage, rectificatie, verwijdering, beperking of bezwaar, en op klacht bij een toezichthoudende autoriteit.',
        },
        contact: {
          title: 'Contact',
          body: 'Vragen over dit bericht: Ivan Kolganov — @KolganovIvan op Telegram of imkolganov op LinkedIn.',
        },
      },
    },
  }
