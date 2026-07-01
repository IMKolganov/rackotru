import type { DeepPartial, Translations } from '../types'

export const ca: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Desenvolupador de programari',
      description: 'Ivan Kolganov — desenvolupador de solucions VPN i backend amb .NET i Python.',
    },
    nav: {
      about: 'Sobre mi',
      skills: 'Habilitats',
      projects: 'Projectes',
      contact: 'Contacte',
      github: 'GitHub',
      language: 'Idioma',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navegació principal',
    },
    hero: {
      greeting: 'Hola, sóc {{name}}',
      name: 'Ivan',
      tagline: 'Desenvolupador de programari',
      bio: 'Solucions VPN i backend amb .NET i Python. Clients natius, infraestructura Docker, dashboards i integracions Telegram.',
      viewProjects: 'Veure projectes',
      getInTouch: 'Contactar',
      repos: 'Repos',
      followers: 'Seguidors',
      following: 'Seguint',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Sobre mi',
      title: 'Què construeixo',
      highlights: [
        'Clients VPN multiplataforma (Windows, macOS, Linux, iOS, Android)',
        'Servidors OpenVPN dockeritzats amb API .NET',
        'Dashboards de monitoratge en temps real',
        'Bots de Telegram i validadors Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Habilitats i eines',
    },
    projects: {
      eyebrow: 'Codi obert',
      title: 'Projectes destacats',
      subtitle: 'Destacats de GitHub — sobretot l\'ecosistema DataGate VPN.',
      moreTitle: 'Més repositoris',
      browseAll: 'Tots els {{count}} repos a GitHub →',
      stars: '{{count}} estrelles',
      items: {
        OpenVPNGateBot: 'Un bot per a un internet lliure i obert.',
        DataGateMonitor: 'Monitoratge OpenVPN amb dashboard i estat en temps real.',
        DataGateWin: 'App VPN nativa Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Servidor OpenVPN dockeritzat amb API .NET i Easy-RSA.',
        DataGateAndroid: 'App VPN nativa Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'App VPN nativa iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Instal·lador WPF per al client DataGate Windows.',
        DataGateOpenVpnServer: 'Servidor OpenVPN Docker amb EasyRSA PKI i .NET Web API.',
        WebMiniTgAppValidateToken: 'Validador initData Mini App Telegram per ASP.NET.',
        StatusGate: 'Plataforma d\'estat autoallotjada.',
        DataGateMonitorFrontend: 'Dashboard web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Client VPN d\'escriptori Linux — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contacte',
      title: 'Connectem',
      lead: 'Obert a col·laborar en backend, infraestructura VPN i eines de desenvolupador.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Convida\'m un cafè',
      },
    },
    footer: {
      source: 'Codi a GitHub',
      privacy: 'Privacitat',
    },
    cookies: {
      banner:
        'Aquest lloc usa localStorage només per a idioma i tema. Sense analítica ni seguiment publicitari. Vegeu l\'avís de privacitat.',
      accept: 'Accepta',
      reject: 'Només essencials',
      privacy: 'Avís de privacitat',
    },
    privacy: {
      title: 'Avís de privacitat',
      updated: 'Darrera actualització: juliol de 2026',
      close: 'Tanca',
      sections: {
        controller: {
          title: 'Responsable del tractament',
          body: 'Ivan Kolganov opera rackot.ru. Per a sol·licituds de privacitat: Telegram @KolganovIvan o LinkedIn (enllaços a la secció Contacte).',
        },
        data: {
          title: 'Quines dades es processen',
          body: 'Lloc personal estàtic. Sense comptes d\'usuari ni formularis. Els registres d\'allotjament poden incloure IP, tipus de navegador i hora de la sol·licitud — com en un allotjament web habitual.',
        },
        cookies: {
          title: 'Cookies i localStorage',
          body: 'Si accepteu, s\'emmagatzemen idioma i tema al navegador (rackotru-locale, rackotru-theme, rackotru-consent). Només preferències funcionals — sense seguiment. Amb « Només essencials », les preferències no es desen entre visites.',
        },
        thirdParty: {
          title: 'Contingut de tercers',
          body: 'El lloc carrega una foto de perfil de GitHub, fonts de Google Fonts i enllaços a serveis externs. Aquests proveïdors tenen les seves pròpies polítiques de privacitat.',
        },
        rights: {
          title: 'Els vostres drets (RGPD)',
          body: 'Podeu retirar el consentiment esborrant les dades del lloc al navegador o triant « Només essencials » a la propera visita. Teniu dret d\'accés, rectificació, supressió, limitació o oposició, i a presentar una reclamació a l\'autoritat de control.',
        },
        contact: {
          title: 'Contacte',
          body: 'Preguntes sobre aquest avís: Ivan Kolganov — @KolganovIvan a Telegram o imkolganov a LinkedIn.',
        },
      },
    },
  }
