import type { DeepPartial, Translations } from '../types'

export const eu: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Software garatzailea',
      description: 'Ivan Kolganov — VPN eta backend soluzioen garatzailea .NET eta Python-ekin.',
    },
    nav: {
      about: 'Niri buruz',
      skills: 'Trebetasunak',
      projects: 'Proiektuak',
      contact: 'Kontaktua',
      github: 'GitHub',
      language: 'Hizkuntza',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Nabigazio nagusia',
    },
    hero: {
      greeting: 'Kaixo, {{name}} naiz',
      name: 'Ivan',
      tagline: 'Software garatzailea',
      bio: 'VPN eta backend soluzioak .NET eta Python-ekin. Bezero natiboak, Docker azpiegitura, monitorizazioa eta Telegram integrazioak.',
      viewProjects: 'Ikusi proiektuak',
      getInTouch: 'Harremanetan jarri',
      repos: 'Repoak',
      followers: 'Jarraitzaileak',
      following: 'Jarraitzen',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Niri buruz',
      title: 'Zer eraikitzen dudan',
      highlights: [
        'Plataforma anitzeko VPN bezeroak (Windows, macOS, Linux, iOS, Android)',
        'OpenVPN zerbitzari Dockerizatuak .NET API-ekin',
        'Denbora errealeko monitorizazio panelak',
        'Telegram botak eta Mini App balidatzaileak',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Trebetasunak eta tresnak',
    },
    projects: {
      eyebrow: 'Kode irekia',
      title: 'Nabarmendutako proiektuak',
      subtitle: 'GitHub-eko onenak — batez ere DataGate VPN ekosistema.',
      moreTitle: 'Repo gehiago',
      browseAll: '{{count}} repo guztiak GitHub-en →',
      stars: '{{count}} izar',
      items: {
        OpenVPNGateBot: 'Bot internet aske eta irekirako.',
        DataGateMonitor: 'OpenVPN monitorizazioa panelarekin eta denbora errealeko egoerarekin.',
        DataGateWin: 'Windows VPN aplikazio natiboa — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'OpenVPN zerbitzari Dockerizatua .NET API eta Easy-RSA-rekin.',
        DataGateAndroid: 'Android VPN aplikazio natiboa — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'iOS VPN aplikazio natiboa — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF instalatzailea DataGate Windows VPN-rako.',
        DataGateOpenVpnServer: 'Docker OpenVPN zerbitzaria EasyRSA PKI eta .NET Web API-rekin.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData balidatzailea ASP.NET-rako.',
        StatusGate: 'Self-hosted egoera plataforma.',
        DataGateMonitorFrontend: 'VPN web panela — ASP.NET Core + React.',
        DataGateLinux: 'Linux mahaigaineko VPN bezeroa — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontaktua',
      title: 'Konekta gaitezen',
      lead: 'Backend, VPN azpiegitura eta garatzaile tresnetan lankidetzarako irekia.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Erosi kafe bat',
      },
    },
    footer: {
      source: 'Iturburua GitHub-en',
      privacy: 'Pribatutasuna',
    },
    cookies: {
      banner:
        'Gune honek localStorage hizkuntza eta gaiarentzat soilik erabiltzen du. Analitikarik edo iragarki-jarraipenik ez. Ikusi pribatutasun-oharra.',
      accept: 'Onartu',
      reject: 'Beharrezkoak soilik',
      privacy: 'Pribatutasun-oharra',
    },
    privacy: {
      title: 'Pribatutasun-oharra',
      updated: 'Azken eguneraketa: 2026ko uztaila',
      close: 'Itxi',
      sections: {
        controller: {
          title: 'Datuen arduraduna',
          body: 'Ivan Kolganov-ek rackot.ru kudeatzen du. Pribatutasun-eskaeretarako: Telegram @KolganovIvan edo LinkedIn (estekak Kontaktua atalean).',
        },
        data: {
          title: 'Ze datu prozesatzen dira',
          body: 'Gune pertsonal estatikoa. Ez dago erabiltzaile-konturik edo formularioik. Ostatuaren erregistroek IP, nabigatzaile-mota eta eskaera-ordua izan ditzakete — web ostatu arruntean bezala.',
        },
        cookies: {
          title: 'Cookieak eta localStorage',
          body: 'Onartzen baduzu, hizkuntza eta gaia nabigatzailean gordetzen dira (rackotru-locale, rackotru-theme, rackotru-consent). Hobespen funtzionalak soilik — jarraipenik gabe. « Beharrezkoak soilik » aukeratuz gero, hobespenak ez dira bisiten artean gordetzen.',
        },
        thirdParty: {
          title: 'Hirugarrenen edukia',
          body: 'Guneak GitHub-eko profil-argazkia, Google Fonts-eko letra-tipoak eta kanpo-zerbitzuetarako estekak kargatzen ditu. Hornitzaile horiek beren pribatutasun-politikak dituzte.',
        },
        rights: {
          title: 'Zure eskubideak (GDPR)',
          body: 'Baimena edozein unetan ken dezakezu gunearen datuak nabigatzailetik ezabatuz edo hurrengo bisitan « Beharrezkoak soilik » aukeratuz. Eskubidea duzu sarbiderako, zuzentzeko, ezabatzeko, mugatzeko edo aurka egiteko, eta gainbegiratzeko erakundean kexa egiteko.',
        },
        contact: {
          title: 'Kontaktua',
          body: 'Ohar honi buruzko galderak: Ivan Kolganov — @KolganovIvan Telegram-en edo imkolganov LinkedIn-en.',
        },
      },
    },
  }
