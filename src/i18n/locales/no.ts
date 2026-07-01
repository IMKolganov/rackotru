import type { DeepPartial, Translations } from '../types'

export const no: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Programvareutvikler',
      description: 'Ivan Kolganov — utvikler av VPN- og backendløsninger med .NET og Python.',
    },
    nav: {
      about: 'Om',
      skills: 'Ferdigheter',
      projects: 'Prosjekter',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Språk',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Hovednavigasjon',
    },
    hero: {
      greeting: 'Hei, jeg er {{name}}',
      name: 'Ivan',
      tagline: 'Programvareutvikler',
      bio: 'VPN- og backendløsninger med .NET og Python. Native klienter, Docker-infrastruktur, overvåking og Telegram-integrasjoner.',
      viewProjects: 'Se prosjekter',
      getInTouch: 'Ta kontakt',
      repos: 'Repos',
      followers: 'Følgere',
      following: 'Følger',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Om',
      title: 'Hva jeg bygger',
      highlights: [
        'Tverrplattform VPN-klienter (Windows, macOS, Linux, iOS, Android)',
        'Dockeriserte OpenVPN-servere med .NET API',
        'Sanntids overvåkingsdashboards',
        'Telegram-boter og Mini App backend-validatorer',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Ferdigheter og verktøy',
    },
    projects: {
      eyebrow: 'Åpen kildekode',
      title: 'Utvalgte prosjekter',
      subtitle: 'Høydepunkter fra GitHub — særlig DataGate VPN-økosystemet.',
      moreTitle: 'Flere repositories',
      browseAll: 'Alle {{count}} repos på GitHub →',
      stars: '{{count}} stjerner',
      items: {
        OpenVPNGateBot: 'En bot for et fritt og åpent internett.',
        DataGateMonitor: 'OpenVPN-overvåking med dashboard og sanntidsstatus.',
        DataGateWin: 'Native Windows VPN-app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerisert OpenVPN-server med .NET API og Easy-RSA.',
        DataGateAndroid: 'Native Android VPN-app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN-app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-installasjonsprogram for DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Frittstående Docker OpenVPN-server med EasyRSA PKI og .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData-validator for ASP.NET.',
        StatusGate: 'Self-hostet statusplattform med incidenthistorikk.',
        DataGateMonitorFrontend: 'VPN-webdashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN-klient — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'La oss koble oss',
      lead: 'Åpen for samarbeid om backend, VPN-infrastruktur og utviklerverktøy.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Kjøp meg en kaffe',
      },
    },
    footer: {
      source: 'Kildekode på GitHub',
      privacy: 'Personvern',
    },
    cookies: {
      banner:
        'Nettstedet bruker localStorage kun for språk og tema. Ingen analyse eller annonsesporing. Se personvernerklæringen.',
      accept: 'Godta',
      reject: 'Kun nødvendige',
      privacy: 'Personvernerklæring',
    },
    privacy: {
      title: 'Personvernerklæring',
      updated: 'Sist oppdatert: juli 2026',
      close: 'Lukk',
      sections: {
        controller: {
          title: 'Behandlingsansvarlig',
          body: 'Ivan Kolganov driver rackot.ru. For personvernhenvendelser: Telegram @KolganovIvan eller LinkedIn (lenker i Kontakt-seksjonen).',
        },
        data: {
          title: 'Hvilke data behandles',
          body: 'Statisk personlig nettside. Ingen brukerkontoer eller skjemaer. Hostinglogger kan inneholde IP-adresse, nettlesertype og tidspunkt — som ved vanlig webhosting.',
        },
        cookies: {
          title: 'Informasjonskapsler og localStorage',
          body: 'Hvis du godtar, lagres språk og tema i nettleseren (rackotru-locale, rackotru-theme, rackotru-consent). Kun funksjonelle innstillinger — ingen sporing. Med « Kun nødvendige » lagres ikke innstillinger mellom besøk.',
        },
        thirdParty: {
          title: 'Tredjepartsinnhold',
          body: 'Nettstedet laster profilbilde fra GitHub, fonter fra Google Fonts og lenker til eksterne tjenester. Disse leverandørene har egne personvernregler.',
        },
        rights: {
          title: 'Dine rettigheter (GDPR)',
          body: 'Du kan trekke tilbake samtykke ved å slette nettstedsdata i nettleseren eller velge « Kun nødvendige » ved neste besøk. Du har rett til innsyn, retting, sletting, begrensning eller protest, og til å klage til tilsynsmyndighet.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Spørsmål om denne erklæringen: Ivan Kolganov — @KolganovIvan på Telegram eller imkolganov på LinkedIn.',
        },
      },
    },
  }
