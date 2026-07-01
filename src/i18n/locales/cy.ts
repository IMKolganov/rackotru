import type { DeepPartial, Translations } from '../types'

export const cy: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Datblygwr meddalwedd',
      description: 'Ivan Kolganov — datblygwr datrysiadau VPN a backend gyda .NET a Python.',
    },
    nav: {
      about: 'Amdanaf',
      skills: 'Sgiliau',
      projects: 'Prosiectau',
      contact: 'Cysylltu',
      github: 'GitHub',
      language: 'Iaith',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Prif lywio',
    },
    hero: {
      greeting: 'Helo, dw i\'n {{name}}',
      name: 'Ivan',
      tagline: 'Datblygwr meddalwedd',
      bio: 'Datrysiadau VPN a backend gyda .NET a Python. Cleientiaid brodorol, seilwaith Docker, monitro ac integreiddiadau Telegram.',
      viewProjects: 'Gweld prosiectau',
      getInTouch: 'Cysylltu',
      repos: 'Repo',
      followers: 'Dilynwyr',
      following: 'Yn dilyn',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Amdanaf',
      title: 'Beth rwy\'n ei adeiladu',
      highlights: [
        'Cleientiaid VPN traws-blatfform (Windows, macOS, Linux, iOS, Android)',
        'Gweinyddion OpenVPN Docker gyda API .NET',
        'Dangosfyrddau monitro amser real',
        'Botiau Telegram a dilyswyr Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Sgiliau ac offer',
    },
    projects: {
      eyebrow: 'Cod agored',
      title: 'Prosiectau dan sylw',
      subtitle: 'Uchafbwyntiau o GitHub — yn bennaf ecosystem DataGate VPN.',
      moreTitle: 'Mwy o ystorfeydd',
      browseAll: 'Pob un o\'r {{count}} repo ar GitHub →',
      stars: '{{count}} seren',
      items: {
        OpenVPNGateBot: 'Bot ar gyfer rhyngrwyd rhydd ac agored.',
        DataGateMonitor: 'Monitro OpenVPN gyda dangosfwrdd a statws amser real.',
        DataGateWin: 'Ap VPN brodorol Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Gweinydd OpenVPN Docker gyda API .NET ac Easy-RSA.',
        DataGateAndroid: 'Ap VPN brodorol Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Ap VPN brodorol iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Gosodwr WPF ar gyfer DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Gweinydd OpenVPN Docker gyda EasyRSA PKI a .NET Web API.',
        WebMiniTgAppValidateToken: 'Dilysydd initData Mini App Telegram ar gyfer ASP.NET.',
        StatusGate: 'Platfform statws hunan-gynhaliol.',
        DataGateMonitorFrontend: 'Dangosfwrdd gwe VPN — ASP.NET Core + React.',
        DataGateLinux: 'Cleient VPN bwrdd gwaith Linux — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Cysylltu',
      title: 'Gadewch i ni gysylltu',
      lead: 'Agored ar gyfer cydweithio ar backend, seilwaith VPN ac offer datblygu.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Prynwch goffi i mi',
      },
    },
    footer: {
      source: 'Cod ffynhonnell ar GitHub',
      privacy: 'Preifatrwydd',
    },
    cookies: {
      banner:
        'Mae\'r safle yn defnyddio localStorage ar gyfer iaith a thema yn unig. Dim dadansoddeg na olrhain hysbysebion. Gweler yr hysbysiad preifatrwydd.',
      accept: 'Derbyn',
      reject: 'Hanfodol yn unig',
      privacy: 'Hysbysiad preifatrwydd',
    },
    privacy: {
      title: 'Hysbysiad preifatrwydd',
      updated: 'Diweddarwyd ddiwethaf: Gorffennaf 2026',
      close: 'Cau',
      sections: {
        controller: {
          title: 'Prosesydd data',
          body: 'Mae Ivan Kolganov yn gweithredu rackot.ru. Am geisiadau preifatrwydd: Telegram @KolganovIvan neu LinkedIn (dolenni yn yr adran Cysylltu).',
        },
        data: {
          title: 'Pa ddata sy\'n cael ei brosesu',
          body: 'Safle personol statig. Dim cyfrifon defnyddwyr na ffurflenni. Gall logiau hosting gynnwys IP, math porwr ac amser cais — fel mewn gwesteio gwe arferol.',
        },
        cookies: {
          title: 'Cwcis a localStorage',
          body: 'Os byddwch yn derbyn, caiff iaith a thema eu cadw yn y porwr (rackotru-locale, rackotru-theme, rackotru-consent). Dim ond dewisiadau swyddogaethol — dim olrhain. Gyda « Hanfodol yn unig », ni chaiff dewisiadau eu cadw rhwng ymweliadau.',
        },
        thirdParty: {
          title: 'Cynnwys trydydd parti',
          body: 'Mae\'r safle yn llwytho llun proffil o GitHub, ffontiau Google Fonts a dolenni i wasanaethau allanol. Mae gan y darparwyr hynny eu polisïau preifatrwydd eu hunain.',
        },
        rights: {
          title: 'Eich hawliau (GDPR)',
          body: 'Gallwch dynnu\'ch caniatâd yn ôl trwy glirio data\'r safle yn y porwr neu ddewis « Hanfodol yn unig » ar ymweliad nesaf. Mae gennych hawl mynediad, cywiro, dileu, cyfyngu neu wrthwynebu, a hawl i gwyno i\'r awdurdod goruchwylio.',
        },
        contact: {
          title: 'Cysylltu',
          body: 'Cwestiynau am yr hysbysiad hwn: Ivan Kolganov — @KolganovIvan ar Telegram neu imkolganov ar LinkedIn.',
        },
      },
    },
  }
