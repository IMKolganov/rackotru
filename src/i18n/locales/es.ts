import type { DeepPartial, Translations } from '../types'

export const es: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Desarrollador de software',
      description: 'Ivan Kolganov — desarrollador de soluciones VPN y backend con .NET y Python.',
    },
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      github: 'GitHub',
      language: 'Idioma',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navegación principal',
    },
    hero: {
      greeting: 'Hola, soy {{name}}',
      name: 'Ivan',
      tagline: 'Desarrollador de software',
      bio: 'Soluciones VPN y backend con .NET y Python. Clientes nativos, infraestructura Docker, dashboards y integraciones con Telegram.',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Contactar',
      repos: 'Repos',
      followers: 'Seguidores',
      following: 'Siguiendo',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Lo que construyo',
      highlights: [
        'Clientes VPN multiplataforma (Windows, macOS, Linux, iOS, Android)',
        'Servidores OpenVPN dockerizados con APIs .NET',
        'Dashboards de monitorización en tiempo real',
        'Bots de Telegram y validadores backend para Mini Apps',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Habilidades y herramientas',
    },
    projects: {
      eyebrow: 'Código abierto',
      title: 'Proyectos destacados',
      subtitle: 'Lo mejor de mi GitHub — principalmente el ecosistema VPN DataGate.',
      moreTitle: 'Más repositorios',
      browseAll: 'Ver los {{count}} repos en GitHub →',
      stars: '{{count}} estrellas',
      items: {
        OpenVPNGateBot: 'Un bot que te conecta a un internet libre y abierto.',
        DataGateMonitor: 'Suite de monitorización OpenVPN con dashboard y estado en tiempo real.',
        DataGateWin: 'App VPN nativa para Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN server with .NET management API and Easy-RSA integration.',
        DataGateAndroid: 'App VPN nativa para Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'App VPN nativa para iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Instalador WPF para el cliente VPN DataGate en Windows.',
        DataGateOpenVpnServer: 'Servidor OpenVPN Docker con PKI EasyRSA y API .NET.',
        WebMiniTgAppValidateToken: 'Validador initData de Mini App de Telegram para ASP.NET.',
        StatusGate: 'Plataforma de estado autoalojada con historial de incidentes.',
        DataGateMonitorFrontend: 'Dashboard web de VPN — ASP.NET Core + React.',
        DataGateLinux: 'Cliente VPN de escritorio para Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Conectemos',
      lead: 'Abierto a colaborar en backends, infraestructura VPN y herramientas para desarrolladores.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Invítame un café',
      },
    },
    footer: {
      source: 'Código en GitHub',
      privacy: 'Privacidad',
    },
    cookies: {
      banner:
        'Este sitio usa localStorage solo para idioma y tema. Sin analítica ni seguimiento publicitario. Consulte el aviso de privacidad.',
      accept: 'Aceptar',
      reject: 'Solo esenciales',
      privacy: 'Aviso de privacidad',
    },
    privacy: {
      title: 'Aviso de privacidad',
      updated: 'Última actualización: julio de 2026',
      close: 'Cerrar',
      sections: {
        controller: {
          title: 'Responsable del tratamiento',
          body: 'Ivan Kolganov opera rackot.ru. Para solicitudes de privacidad: Telegram @KolganovIvan o LinkedIn (enlaces en la sección Contacto).',
        },
        data: {
          title: 'Qué datos se procesan',
          body: 'Sitio personal estático. Sin cuentas de usuario ni formularios. Los registros del hosting pueden incluir IP, tipo de navegador y hora de la solicitud — como en un alojamiento web habitual.',
        },
        cookies: {
          title: 'Cookies y localStorage',
          body: 'Si acepta, se guardan idioma y tema en el navegador (rackotru-locale, rackotru-theme, rackotru-consent). Solo preferencias funcionales — sin seguimiento. Con « Solo esenciales », las preferencias no se guardan entre visitas.',
        },
        thirdParty: {
          title: 'Contenido de terceros',
          body: 'El sitio carga una foto de perfil de GitHub, fuentes de Google Fonts y enlaces a servicios externos. Esos proveedores tienen sus propias políticas de privacidad.',
        },
        rights: {
          title: 'Sus derechos (RGPD)',
          body: 'Puede retirar el consentimiento borrando los datos del sitio en el navegador o eligiendo « Solo esenciales » en su próxima visita. Tiene derecho de acceso, rectificación, supresión, limitación u oposición, y a presentar una reclamación ante su autoridad de control.',
        },
        contact: {
          title: 'Contacto',
          body: 'Preguntas sobre este aviso: Ivan Kolganov — @KolganovIvan en Telegram o imkolganov en LinkedIn.',
        },
      },
    },
  }
