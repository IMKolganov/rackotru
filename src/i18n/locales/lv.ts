import type { DeepPartial, Translations } from '../types'

export const lv: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Programmatūras izstrādātājs',
      description: 'Ivan Kolganov — VPN un backend risinājumu izstrādātājs ar .NET un Python.',
    },
    nav: {
      about: 'Par mani',
      skills: 'Prasmes',
      projects: 'Projekti',
      contact: 'Kontakti',
      github: 'GitHub',
      language: 'Valoda',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Galvenā navigācija',
    },
    hero: {
      greeting: 'Sveiki, es esmu {{name}}',
      name: 'Ivan',
      tagline: 'Programmatūras izstrādātājs',
      bio: 'VPN un backend risinājumi ar .NET un Python. Natīvi klienti, Docker infrastruktūra, monitorings un Telegram integrācijas.',
      viewProjects: 'Skatīt projektus',
      getInTouch: 'Sazināties',
      repos: 'Repozitoriji',
      followers: 'Sekotāji',
      following: 'Sekoju',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Par mani',
      title: 'Ko es veidoju',
      highlights: [
        'Cross-platform VPN klienti (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN serveri ar .NET API',
        'Reāllaika monitoringa paneļi',
        'Telegram boti un Mini App validatori',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Prasmes un rīki',
    },
    projects: {
      eyebrow: 'Atvērtais kods',
      title: 'Izceltie projekti',
      subtitle: 'Labākais no GitHub — galvenokārt DataGate VPN ekosistēma.',
      moreTitle: 'Vairāk repozitoriju',
      browseAll: 'Visi {{count}} repozitoriji GitHub →',
      stars: '{{count}} zvaigznes',
      items: {
        OpenVPNGateBot: 'Bots brīvam un atvērtam internetam.',
        DataGateMonitor: 'OpenVPN monitorings ar paneli un reāllaika statusu.',
        DataGateWin: 'Natīva Windows VPN lietotne — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN serveris ar .NET API un Easy-RSA.',
        DataGateAndroid: 'Natīva Android VPN lietotne — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Natīva iOS VPN lietotne — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF instalētājs DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Atsevišķs Docker OpenVPN serveris ar EasyRSA PKI un .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData validators ASP.NET.',
        StatusGate: 'Self-hosted status platforma ar incidentu vēsturi.',
        DataGateMonitorFrontend: 'VPN web panelis — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN klients — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakti',
      title: 'Sazināsimies',
      lead: 'Atvērts sadarbībai backend, VPN infrastruktūrā un dev rīkos.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Nopirkt kafiju',
      },
    },
    footer: {
      source: 'Avots GitHub',
      privacy: 'Privātums',
    },
    cookies: {
      banner:
        'Vietne izmanto localStorage tikai valodai un tēmai. Bez analītikas vai reklāmas izsekošanas. Sīkāk privātuma paziņojumā.',
      accept: 'Pieņemt',
      reject: 'Tikai nepieciešamie',
      privacy: 'Privātuma paziņojums',
    },
    privacy: {
      title: 'Privātuma paziņojums',
      updated: 'Atjaunināts: 2026. gada jūlijs',
      close: 'Aizvērt',
      sections: {
        controller: {
          title: 'Datu pārzinis',
          body: 'Ivan Kolganov uztur rackot.ru. Privātuma jautājumi: Telegram @KolganovIvan vai LinkedIn (saites sadaļā Kontakti).',
        },
        data: {
          title: 'Kādi dati tiek apstrādāti',
          body: 'Statiska personīgā vietne. Nav lietotāju kontu un veidlapu. Mitināšanas žurnāli var ietvert IP, pārlūka tipu un pieprasījuma laiku — kā parastā web hostingā.',
        },
        cookies: {
          title: 'Sīkdatnes un localStorage',
          body: 'Piekrītot valoda un tēma tiek saglabāta pārlūkā (rackotru-locale, rackotru-theme, rackotru-consent). Tikai funkcionāli iestatījumi — bez izsekošanas. Izvēloties « Tikai nepieciešamie », iestatījumi netiek saglabāti starp apmeklējumiem.',
        },
        thirdParty: {
          title: 'Trešo pušu saturs',
          body: 'Vietne ielādē profila foto no GitHub, fontus no Google Fonts un saites uz ārējiem pakalpojumiem. Šiem pakalpojumu sniedzējiem ir savas privātuma politikas.',
        },
        rights: {
          title: 'Jūsu tiesības (GDPR)',
          body: 'Piekrišanu var atsaukt, dzēšot vietnes datus pārlūkā vai nākamajā apmeklējumā izvēloties « Tikai nepieciešamie ». Jums ir tiesības piekļūt datiem, labot, dzēst, ierobežot vai iebilst un iesniegt sūdzību uzraudzības iestādei.',
        },
        contact: {
          title: 'Kontakti',
          body: 'Jautājumi par šo paziņojumu: Ivan Kolganov — @KolganovIvan Telegram vai imkolganov LinkedIn.',
        },
      },
    },
  }
