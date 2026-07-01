import type { DeepPartial, Translations } from '../types'

export const pt: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Desenvolvedor de software',
      description: 'Ivan Kolganov — desenvolvedor de soluções VPN e backend com .NET e Python.',
    },
    nav: {
      about: 'Sobre',
      skills: 'Competências',
      projects: 'Projetos',
      contact: 'Contacto',
      github: 'GitHub',
      language: 'Idioma',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navegação principal',
    },
    hero: {
      greeting: 'Olá, sou {{name}}',
      name: 'Ivan',
      tagline: 'Desenvolvedor de software',
      bio: 'Soluções VPN e backend com .NET e Python. Clientes nativos, infraestrutura Docker, dashboards e integrações Telegram.',
      viewProjects: 'Ver projetos',
      getInTouch: 'Contactar',
      repos: 'Repos',
      followers: 'Seguidores',
      following: 'A seguir',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'O que construo',
      highlights: [
        'Clientes VPN multiplataforma (Windows, macOS, Linux, iOS, Android)',
        'Servidores OpenVPN dockerizados com APIs .NET',
        'Dashboards de monitorização em tempo real',
        'Bots Telegram e validadores backend para Mini Apps',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Competências e ferramentas',
    },
    projects: {
      eyebrow: 'Código aberto',
      title: 'Projetos em destaque',
      subtitle: 'Destaques do GitHub — principalmente o ecossistema VPN DataGate.',
      moreTitle: 'Mais repositórios',
      browseAll: 'Ver todos os {{count}} repos no GitHub →',
      stars: '{{count}} estrelas',
      items: {
        OpenVPNGateBot: 'Um bot que liga a uma internet livre e aberta.',
        DataGateMonitor: 'Suite de monitorização OpenVPN com dashboard e estado em tempo real.',
        DataGateWin: 'Native Windows VPN app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN server with .NET management API and Easy-RSA integration.',
        DataGateAndroid: 'Native Android VPN app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Instalador WPF para o cliente VPN DataGate Windows.',
        DataGateOpenVpnServer: 'Servidor OpenVPN Docker com PKI EasyRSA e API .NET.',
        WebMiniTgAppValidateToken: 'Validador initData Mini App Telegram para ASP.NET.',
        StatusGate: 'Plataforma de estado auto-hospedada com histórico de incidentes.',
        DataGateMonitorFrontend: 'Dashboard web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Cliente VPN desktop Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Vamos conectar',
      lead: 'Aberto a colaboração em backends, infraestrutura VPN e ferramentas de desenvolvimento.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Compre-me um café',
      },
    },
    footer: {
      source: 'Código no GitHub',
      privacy: 'Privacidade',
    },
    cookies: {
      banner:
        'Este site usa localStorage apenas para idioma e tema. Sem análise ou rastreamento publicitário. Consulte o aviso de privacidade.',
      accept: 'Aceitar',
      reject: 'Apenas essenciais',
      privacy: 'Aviso de privacidade',
    },
    privacy: {
      title: 'Aviso de privacidade',
      updated: 'Última atualização: julho de 2026',
      close: 'Fechar',
      sections: {
        controller: {
          title: 'Responsável pelo tratamento',
          body: 'Ivan Kolganov opera rackot.ru. Para pedidos de privacidade: Telegram @KolganovIvan ou LinkedIn (links na secção Contacto).',
        },
        data: {
          title: 'Quais dados são processados',
          body: 'Site pessoal estático. Sem contas de utilizador nem formulários. Os registos de alojamento podem incluir IP, tipo de navegador e hora do pedido — como num alojamento web normal.',
        },
        cookies: {
          title: 'Cookies e localStorage',
          body: 'Se aceitar, idioma e tema são guardados no navegador (rackotru-locale, rackotru-theme, rackotru-consent). Apenas preferências funcionais — sem rastreamento. Com « Apenas essenciais », as preferências não são guardadas entre visitas.',
        },
        thirdParty: {
          title: 'Conteúdo de terceiros',
          body: 'O site carrega uma foto de perfil do GitHub, fontes do Google Fonts e ligações a serviços externos. Esses fornecedores têm as suas próprias políticas de privacidade.',
        },
        rights: {
          title: 'Os seus direitos (RGPD)',
          body: 'Pode retirar o consentimento apagando os dados do site no navegador ou escolhendo « Apenas essenciais » na próxima visita. Tem direito de acesso, retificação, eliminação, limitação ou oposição, e de reclamação junto da autoridade de controlo.',
        },
        contact: {
          title: 'Contacto',
          body: 'Questões sobre este aviso: Ivan Kolganov — @KolganovIvan no Telegram ou imkolganov no LinkedIn.',
        },
      },
    },
  }
