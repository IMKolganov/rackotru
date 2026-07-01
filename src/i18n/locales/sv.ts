import type { DeepPartial, Translations } from '../types'

export const sv: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Mjukvaruutvecklare',
      description: 'Ivan Kolganov — utvecklare av VPN- och backendlösningar med .NET och Python.',
    },
    nav: {
      about: 'Om',
      skills: 'Färdigheter',
      projects: 'Projekt',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Språk',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Huvudnavigering',
    },
    hero: {
      greeting: 'Hej, jag är {{name}}',
      name: 'Ivan',
      tagline: 'Mjukvaruutvecklare',
      bio: 'VPN- och backendlösningar med .NET och Python. Native-klienter, Docker-infrastruktur, monitoring och Telegram-integrationer.',
      viewProjects: 'Visa projekt',
      getInTouch: 'Kontakta',
      repos: 'Repos',
      followers: 'Följare',
      following: 'Följer',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Om',
      title: 'Vad jag bygger',
      highlights: [
        'Plattformsoberoende VPN-klienter (Windows, macOS, Linux, iOS, Android)',
        'Dockeriserade OpenVPN-servrar med .NET API',
        'Realtidsmonitoring och statusplattformar',
        'Telegram-botar och Mini App-backendvalidatorer',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Färdigheter & verktyg',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Utvalda projekt',
      subtitle: 'Höjdpunkter från GitHub — främst DataGate VPN-ekosystemet.',
      moreTitle: 'Fler repon',
      browseAll: 'Alla {{count}} repos på GitHub →',
      stars: '{{count}} stjärnor',
      items: {
        OpenVPNGateBot: 'En bot för ett fritt och öppet internet.',
        DataGateMonitor: 'OpenVPN-övervakning med dashboard och realtidsstatus.',
        DataGateWin: 'Native Windows VPN-app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockeriserad OpenVPN-server med .NET API och Easy-RSA.',
        DataGateAndroid: 'Native Android VPN-app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN-app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF-installationsprogram för DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Fristående Docker OpenVPN-server med EasyRSA PKI och .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData-validator för ASP.NET.',
        StatusGate: 'Self-hostad statusplattform med incidenthistorik.',
        DataGateMonitorFrontend: 'VPN-webbdashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN-klient — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Låt oss connecta',
      lead: 'Öppen för samarbete kring backend, VPN-infrastruktur och utvecklarverktyg.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Bjud på kaffe',
      },
    },
    footer: {
      source: 'Källkod på GitHub',
      privacy: 'Integritet',
    },
    cookies: {
      banner:
        'Webbplatsen använder localStorage endast för språk och tema. Ingen analys eller annonsspårning. Se integritetsmeddelandet.',
      accept: 'Acceptera',
      reject: 'Endast nödvändiga',
      privacy: 'Integritetsmeddelande',
    },
    privacy: {
      title: 'Integritetsmeddelande',
      updated: 'Senast uppdaterad: juli 2026',
      close: 'Stäng',
      sections: {
        controller: {
          title: 'Personuppgiftsansvarig',
          body: 'Ivan Kolganov driver rackot.ru. För integritetsfrågor: Telegram @KolganovIvan eller LinkedIn (länkar i avsnittet Kontakt).',
        },
        data: {
          title: 'Vilka uppgifter behandlas',
          body: 'Statisk personlig webbplats. Inga användarkonton eller formulär. Värdloggar kan innehålla IP-adress, webbläsartyp och tidpunkt — som vid normal webbhosting.',
        },
        cookies: {
          title: 'Cookies och localStorage',
          body: 'Om du accepterar sparas språk och tema i webbläsaren (rackotru-locale, rackotru-theme, rackotru-consent). Endast funktionella inställningar — ingen spårning. Med « Endast nödvändiga » sparas inte inställningar mellan besök.',
        },
        thirdParty: {
          title: 'Innehåll från tredje part',
          body: 'Webbplatsen laddar profilbild från GitHub, typsnitt från Google Fonts och länkar till externa tjänster. Dessa leverantörer har egna integritetspolicyer.',
        },
        rights: {
          title: 'Dina rättigheter (GDPR)',
          body: 'Du kan återkalla samtycke genom att rensa webbplatsdata i webbläsaren eller välja « Endast nödvändiga » vid nästa besök. Du har rätt till tillgång, rättelse, radering, begränsning eller invändning, och att klaga hos tillsynsmyndighet.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Frågor om detta meddelande: Ivan Kolganov — @KolganovIvan på Telegram eller imkolganov på LinkedIn.',
        },
      },
    },
  }
