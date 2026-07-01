import type { DeepPartial, Translations } from '../types'

export const it: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Sviluppatore software',
      description: 'Ivan Kolganov — sviluppatore di soluzioni VPN e backend con .NET e Python.',
    },
    nav: {
      about: 'Chi sono',
      skills: 'Competenze',
      projects: 'Progetti',
      contact: 'Contatti',
      github: 'GitHub',
      language: 'Lingua',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navigazione principale',
    },
    hero: {
      greeting: 'Ciao, sono {{name}}',
      name: 'Ivan',
      tagline: 'Sviluppatore software',
      bio: 'Soluzioni VPN e backend con .NET e Python. Client nativi, infrastruttura Docker, dashboard e integrazioni Telegram.',
      viewProjects: 'Vedi progetti',
      getInTouch: 'Contattami',
      repos: 'Repo',
      followers: 'Follower',
      following: 'Seguiti',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Chi sono',
      title: 'Cosa costruisco',
      highlights: [
        'Client VPN multipiattaforma (Windows, macOS, Linux, iOS, Android)',
        'Server OpenVPN dockerizzati con API di gestione .NET',
        'Dashboard di monitoraggio in tempo reale',
        'Bot Telegram e validatori backend per Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Competenze e strumenti',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Progetti in evidenza',
      subtitle: 'In evidenza da GitHub — soprattutto l\'ecosistema VPN DataGate.',
      moreTitle: 'Altri repository',
      browseAll: 'Sfoglia tutti i {{count}} repo su GitHub →',
      stars: '{{count}} stelle',
      items: {
        OpenVPNGateBot: 'Un bot per un internet libero e aperto.',
        DataGateMonitor: 'Suite di monitoraggio OpenVPN con dashboard e stato in tempo reale.',
        DataGateWin: 'App VPN nativa Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN server with .NET management API and Easy-RSA integration.',
        DataGateAndroid: 'Native Android VPN app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Installer WPF per il client VPN DataGate Windows.',
        DataGateOpenVpnServer: 'Server OpenVPN Docker con PKI EasyRSA e Web API .NET.',
        WebMiniTgAppValidateToken: 'Validatore initData Mini App Telegram per ASP.NET.',
        StatusGate: 'Piattaforma di stato self-hosted con cronologia incidenti.',
        DataGateMonitorFrontend: 'Dashboard web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Client VPN desktop Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contatti',
      title: 'Mettiamoci in contatto',
      lead: 'Aperto a collaborazioni su backend, infrastruttura VPN e strumenti per sviluppatori.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Offrimi un caffè',
      },
    },
    footer: {
      source: 'Codice su GitHub',
      privacy: 'Privacy',
    },
    cookies: {
      banner:
        'Questo sito usa localStorage solo per lingua e tema. Nessuna analitica o tracciamento pubblicitario. Vedi l’informativa sulla privacy.',
      accept: 'Accetta',
      reject: 'Solo essenziali',
      privacy: 'Informativa privacy',
    },
    privacy: {
      title: 'Informativa sulla privacy',
      updated: 'Ultimo aggiornamento: luglio 2026',
      close: 'Chiudi',
      sections: {
        controller: {
          title: 'Titolare del trattamento',
          body: 'Ivan Kolganov gestisce rackot.ru. Per richieste sulla privacy: Telegram @KolganovIvan o LinkedIn (link nella sezione Contatti).',
        },
        data: {
          title: 'Quali dati vengono trattati',
          body: 'Sito personale statico. Nessun account utente né moduli. I log dell’hosting possono includere IP, tipo di browser e ora della richiesta — come in un normale hosting web.',
        },
        cookies: {
          title: 'Cookie e localStorage',
          body: 'Se accetti, lingua e tema vengono salvati nel browser (rackotru-locale, rackotru-theme, rackotru-consent). Solo preferenze funzionali — nessun tracciamento. Con « Solo essenziali », le preferenze non vengono salvate tra le visite.',
        },
        thirdParty: {
          title: 'Contenuti di terze parti',
          body: 'Il sito carica una foto profilo da GitHub, font da Google Fonts e link a servizi esterni. Questi fornitori hanno le proprie informative sulla privacy.',
        },
        rights: {
          title: 'I tuoi diritti (GDPR)',
          body: 'Puoi revocare il consenso cancellando i dati del sito nel browser o scegliendo « Solo essenziali » alla prossima visita. Hai diritto di accesso, rettifica, cancellazione, limitazione o opposizione, e di reclamo presso l’autorità di controllo.',
        },
        contact: {
          title: 'Contatti',
          body: 'Domande su questa informativa: Ivan Kolganov — @KolganovIvan su Telegram o imkolganov su LinkedIn.',
        },
      },
    },
  }
