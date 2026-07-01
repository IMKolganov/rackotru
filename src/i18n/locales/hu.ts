import type { DeepPartial, Translations } from '../types'

export const hu: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Szoftverfejlesztő',
      description: 'Ivan Kolganov — VPN és backend megoldások .NET-tel és Pythonnal.',
    },
    nav: {
      about: 'Rólam',
      skills: 'Készségek',
      projects: 'Projektek',
      contact: 'Kapcsolat',
      github: 'GitHub',
      language: 'Nyelv',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Fő navigáció',
    },
    hero: {
      greeting: 'Szia, {{name}} vagyok',
      name: 'Ivan',
      tagline: 'Szoftverfejlesztő',
      bio: 'VPN és backend megoldások .NET-tel és Pythonnal. Natív kliensek, Docker infrastruktúra, monitoring és Telegram integrációk.',
      viewProjects: 'Projektek megtekintése',
      getInTouch: 'Kapcsolatfelvétel',
      repos: 'Repók',
      followers: 'Követők',
      following: 'Követve',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Rólam',
      title: 'Amit építek',
      highlights: [
        'Platformfüggetlen VPN kliensek (Windows, macOS, Linux, iOS, Android)',
        'Dockerizált OpenVPN szerverek .NET API-kkal',
        'Valós idejű monitoring dashboardok',
        'Telegram botok és Mini App backend validátorok',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Készségek és eszközök',
    },
    projects: {
      eyebrow: 'Nyílt forráskód',
      title: 'Kiemelt projektek',
      subtitle: 'GitHub kiemelések — főleg a DataGate VPN ökoszisztéma.',
      moreTitle: 'További repók',
      browseAll: 'Mind a {{count}} repo a GitHubon →',
      stars: '{{count}} csillag',
      items: {
        OpenVPNGateBot: 'Bot a szabad és nyílt internethez.',
        DataGateMonitor: 'OpenVPN monitoring dashboarddal és valós idejű státusszal.',
        DataGateWin: 'Natív Windows VPN alkalmazás — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerizált OpenVPN szerver .NET API-val és Easy-RSA-val.',
        DataGateAndroid: 'Natív Android VPN alkalmazás — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Natív iOS VPN alkalmazás — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF telepítő a DataGate Windows VPN klienshez.',
        DataGateOpenVpnServer: 'Önálló Docker OpenVPN szerver EasyRSA PKI-val és .NET Web API-val.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData validátor ASP.NET-hez.',
        StatusGate: 'Self-hosted státusz platform incidens előzményekkel.',
        DataGateMonitorFrontend: 'VPN web dashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux asztali VPN kliens — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kapcsolat',
      title: 'Lépj kapcsolatba',
      lead: 'Nyitott együttműködésre backend, VPN infrastruktúra és fejlesztői eszközök terén.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Fizesd a kávémat',
      },
    },
    footer: {
      source: 'Forráskód a GitHubon',
      privacy: 'Adatvédelem',
    },
    cookies: {
      banner:
        'Az oldal localStorage-t csak nyelvhez és témához használ. Nincs analitika vagy hirdetéskövetés. Részletek az adatvédelmi tájékoztatóban.',
      accept: 'Elfogadom',
      reject: 'Csak szükséges',
      privacy: 'Adatvédelmi tájékoztató',
    },
    privacy: {
      title: 'Adatvédelmi tájékoztató',
      updated: 'Utolsó frissítés: 2026. július',
      close: 'Bezárás',
      sections: {
        controller: {
          title: 'Adatkezelő',
          body: 'Ivan Kolganov üzemelteti a rackot.ru oldalt. Adatvédelmi kérdések: Telegram @KolganovIvan vagy LinkedIn (linkek a Kapcsolat szekcióban).',
        },
        data: {
          title: 'Milyen adatokat kezelünk',
          body: 'Statikus személyes weboldal. Nincsenek felhasználói fiókok és űrlapok. A tárhely naplói tartalmazhatnak IP-címet, böngészőtípust és kérés idejét — mint általában webhostingnál.',
        },
        cookies: {
          title: 'Cookie-k és localStorage',
          body: 'Elfogadás esetén a nyelv és téma a böngészőben tárolódik (rackotru-locale, rackotru-theme, rackotru-consent). Funkcionális beállítások — nem követés. « Csak szükséges » esetén a beállítások nem maradnak meg látogatások között.',
        },
        thirdParty: {
          title: 'Harmadik fél tartalma',
          body: 'Az oldal profilképet tölt GitHubról, betűtípusokat Google Fontsból, és linkeket tartalmaz külső szolgáltatásokhoz. Ezeknek saját adatvédelmi szabályzata van.',
        },
        rights: {
          title: 'Az Ön jogai (GDPR)',
          body: 'A hozzájárulást bármikor visszavonhatja az oldal adatainak törlésével a böngészőben, vagy a következő látogatáskor a « Csak szükséges » választással. Joga van hozzáféréshez, helyesbítéshez, törléshez, korlátozáshoz vagy tiltakozáshoz, és panaszt tehet a felügyeleti hatóságnál.',
        },
        contact: {
          title: 'Kapcsolat',
          body: 'Kérdések erről a tájékoztatóról: Ivan Kolganov — @KolganovIvan Telegramon vagy imkolganov LinkedInen.',
        },
      },
    },
  }
