import type { DeepPartial, Translations } from '../types'

export const mt: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Żviluppatur tas-softwer',
      description: 'Ivan Kolganov — żviluppatur ta\' soluzzjonijiet VPN u backend b\'.NET u Python.',
    },
    nav: {
      about: 'Dwar',
      skills: 'Ħiliet',
      projects: 'Proġetti',
      contact: 'Kuntatt',
      github: 'GitHub',
      language: 'Lingwa',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navigazzjoni prinċipali',
    },
    hero: {
      greeting: 'Bonġu, jien {{name}}',
      name: 'Ivan',
      tagline: 'Żviluppatur tas-softwer',
      bio: 'Soluzzjonijiet VPN u backend b\'.NET u Python. Klijenti nattivi, infrastruttura Docker, monitoring u integrazzjonijiet Telegram.',
      viewProjects: 'Ara proġetti',
      getInTouch: 'Ikkuntattja',
      repos: 'Repo',
      followers: 'Segwaċi',
      following: 'Qed issegwi',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Dwar',
      title: 'X\'nbeni',
      highlights: [
        'Klijenti VPN cross-platform (Windows, macOS, Linux, iOS, Android)',
        'Servers OpenVPN Dockerizzati b\'API .NET',
        'Dashboards ta\' monitoring f\'ħin reali',
        'Bots Telegram u validators Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Ħiliet u għodod',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Proġetti magħżula',
      subtitle: 'Highlights minn GitHub — l-ekosistema DataGate VPN.',
      moreTitle: 'Aktar repositories',
      browseAll: 'Il-{{count}} repos kollha fuq GitHub →',
      stars: '{{count}} stilel',
      items: {
        OpenVPNGateBot: 'Bot għal internet liberu u miftuħ.',
        DataGateMonitor: 'Monitoring OpenVPN b\'dashboard u status f\'ħin reali.',
        DataGateWin: 'App VPN Windows nattiva — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Server OpenVPN Dockerizzat b\'API .NET u Easy-RSA.',
        DataGateAndroid: 'App VPN Android nattiva — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'App VPN iOS nattiva — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Installer WPF għal DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Server OpenVPN Docker b\'EasyRSA PKI u .NET Web API.',
        WebMiniTgAppValidateToken: 'Validator initData Mini App Telegram għal ASP.NET.',
        StatusGate: 'Pjattaforma ta\' status self-hosted.',
        DataGateMonitorFrontend: 'Dashboard web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Klijent VPN desktop Linux — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kuntatt',
      title: 'Ejja nikkonnettjaw',
      lead: 'Miftuħ għal kollaborazzjoni fuq backend, infrastruttura VPN u għodod tal-iżviluppaturi.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Ixtri kafè',
      },
    },
    footer: {
      source: 'Kodiċi fuq GitHub',
      privacy: 'Privatezza',
    },
    cookies: {
      banner:
        'Dan is-sit juża localStorage biss għal-lingwa u tema. L-ebda analitika jew tracking ta\' reklami. Ara n-notifika tal-privatezza.',
      accept: 'Aċċetta',
      reject: 'Essenzjali biss',
      privacy: 'Notifika tal-privatezza',
    },
    privacy: {
      title: 'Notifika tal-privatezza',
      updated: 'Aġġornat l-aħħar: Lulju 2026',
      close: 'Agħlaq',
      sections: {
        controller: {
          title: 'Kontrollur tad-data',
          body: 'Ivan Kolganov joperaw rackot.ru. Għal talbiet ta\' privatezza: Telegram @KolganovIvan jew LinkedIn (links fil-sezzjoni Kuntatt).',
        },
        data: {
          title: 'Liema data tiġi pproċessata',
          body: 'Sit personali statiku. L-ebda kontijiet utenti jew formoli. Il-logs tal-hosting jistgħu jinkludu IP, tip ta\' browser u ħin tat-talba — bħal hosting web normali.',
        },
        cookies: {
          title: 'Cookies u localStorage',
          body: 'Jekk taċċetta, il-lingwa u t-tema jiġu maħżuna fil-browser (rackotru-locale, rackotru-theme, rackotru-consent). Preferenzi funzjonali biss — mhux tracking. Bil-« Essenzjali biss », il-preferenzi ma jiġux salvati bejn iż-żjarat.',
        },
        thirdParty: {
          title: 'Kontenut ta\' terzi',
          body: 'Is-sit jiloadja ritratt tal-profil minn GitHub, fonts minn Google Fonts u links għal servizzi esterni. Dawk il-fornituri għandhom politiki ta\' privatezza tagħhom stess.',
        },
        rights: {
          title: 'Id-drittijiet tiegħek (GDPR)',
          body: 'Tista\' tirtira l-kunsens billi tneħħi d-data tas-sit mill-browser jew tagħżel « Essenzjali biss » fil-viżita li jmiss. Għandek dritt ta\' aċċess, rettifikazzjoni, tħassir, restrizzjoni jew objezzjoni, u tikteb lill-awtorità ta\' superviżjoni.',
        },
        contact: {
          title: 'Kuntatt',
          body: 'Mistoqsijiet dwar din in-notifika: Ivan Kolganov — @KolganovIvan fuq Telegram jew imkolganov fuq LinkedIn.',
        },
      },
    },
  }
