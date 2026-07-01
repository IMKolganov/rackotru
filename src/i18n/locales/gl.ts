import type { DeepPartial, Translations } from '../types'

export const gl: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Desenvolvedor de software',
      description: 'Ivan Kolganov — desenvolvedor de solucións VPN e backend con .NET e Python.',
    },
    nav: {
      about: 'Sobre min',
      skills: 'Habilidades',
      projects: 'Proxectos',
      contact: 'Contacto',
      github: 'GitHub',
      language: 'Idioma',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navegación principal',
    },
    hero: {
      greeting: 'Ola, son {{name}}',
      name: 'Ivan',
      tagline: 'Desenvolvedor de software',
      bio: 'Solucións VPN e backend con .NET e Python. Clientes nativos, infraestrutura Docker, dashboards e integracións Telegram.',
      viewProjects: 'Ver proxectos',
      getInTouch: 'Contactar',
      repos: 'Repos',
      followers: 'Seguidores',
      following: 'Seguindo',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Sobre min',
      title: 'O que constrúo',
      highlights: [
        'Clientes VPN multiplataforma (Windows, macOS, Linux, iOS, Android)',
        'Servidores OpenVPN dockerizados con API .NET',
        'Dashboards de monitorización en tempo real',
        'Bots de Telegram e validadores Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Habilidades e ferramentas',
    },
    projects: {
      eyebrow: 'Código aberto',
      title: 'Proxectos destacados',
      subtitle: 'Destacados de GitHub — sobre todo o ecosistema DataGate VPN.',
      moreTitle: 'Máis repositorios',
      browseAll: 'Todos os {{count}} repos en GitHub →',
      stars: '{{count}} estrelas',
      items: {
        OpenVPNGateBot: 'Un bot para internet libre e aberto.',
        DataGateMonitor: 'Monitorización OpenVPN con dashboard e estado en tempo real.',
        DataGateWin: 'App VPN nativa Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Servidor OpenVPN dockerizado con API .NET e Easy-RSA.',
        DataGateAndroid: 'App VPN nativa Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'App VPN nativa iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Instalador WPF para DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Servidor OpenVPN Docker con EasyRSA PKI e .NET Web API.',
        WebMiniTgAppValidateToken: 'Validador initData Mini App Telegram para ASP.NET.',
        StatusGate: 'Plataforma de estado autoaloxada.',
        DataGateMonitorFrontend: 'Dashboard web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Cliente VPN de escritorio Linux — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Conectémonos',
      lead: 'Aberto a colaborar en backend, infraestrutura VPN e ferramentas de desenvolvemento.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Cómprame un café',
      },
    },
    footer: {
      source: 'Código en GitHub',
      privacy: 'Privacidade',
    },
    cookies: {
      banner:
        'Este sitio usa localStorage só para idioma e tema. Sen analítica nin seguimento publicitario. Consulte o aviso de privacidade.',
      accept: 'Aceptar',
      reject: 'Só esenciais',
      privacy: 'Aviso de privacidade',
    },
    privacy: {
      title: 'Aviso de privacidade',
      updated: 'Última actualización: xullo de 2026',
      close: 'Pechar',
      sections: {
        controller: {
          title: 'Responsable do tratamento',
          body: 'Ivan Kolganov opera rackot.ru. Para solicitudes de privacidade: Telegram @KolganovIvan ou LinkedIn (ligazóns na sección Contacto).',
        },
        data: {
          title: 'Que datos se procesan',
          body: 'Sitio persoal estático. Sen contas de usuario nin formularios. Os rexistros do aloxamento poden incluír IP, tipo de navegador e hora da solicitude — como nun aloxamento web habitual.',
        },
        cookies: {
          title: 'Cookies e localStorage',
          body: 'Se acepta, gardaranse idioma e tema no navegador (rackotru-locale, rackotru-theme, rackotru-consent). Só preferencias funcionais — sen seguimento. Con « Só esenciais », as preferencias non se gardan entre visitas.',
        },
        thirdParty: {
          title: 'Contido de terceiros',
          body: 'O sitio carga unha foto de perfil de GitHub, fontes de Google Fonts e ligazóns a servizos externos. Eses provedores teñen as súas propias políticas de privacidade.',
        },
        rights: {
          title: 'Os seus dereitos (RGPD)',
          body: 'Pode retirar o consentimento borrando os datos do sitio no navegador ou elixindo « Só esenciais » na próxima visita. Ten dereito de acceso, rectificación, supresión, limitación ou oposición, e a presentar reclamación ante a autoridade de control.',
        },
        contact: {
          title: 'Contacto',
          body: 'Preguntas sobre este aviso: Ivan Kolganov — @KolganovIvan en Telegram ou imkolganov en LinkedIn.',
        },
      },
    },
  }
