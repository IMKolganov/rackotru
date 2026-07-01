import type { DeepPartial, Translations } from '../types'

export const ga: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Forbróir bogearraí',
      description: 'Ivan Kolganov — forbróir réitigh VPN agus backend le .NET agus Python.',
    },
    nav: {
      about: 'Fúm',
      skills: 'Scileanna',
      projects: 'Tionscadail',
      contact: 'Teagmháil',
      github: 'GitHub',
      language: 'Teanga',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Príomh-nascleanúint',
    },
    hero: {
      greeting: 'Dia duit, is mise {{name}}',
      name: 'Ivan',
      tagline: 'Forbróir bogearraí',
      bio: 'Réitigh VPN agus backend le .NET agus Python. Cliaint dúchais, bonneagar Docker, monatóireacht agus comhtháthú Telegram.',
      viewProjects: 'Féach tionscadail',
      getInTouch: 'Déan teagmháil',
      repos: 'Stórtha',
      followers: 'Leantóirí',
      following: 'Ag leanúint',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Fúm',
      title: 'Cad a thógaim',
      highlights: [
        'Cliaint VPN tras-ardán (Windows, macOS, Linux, iOS, Android)',
        'Freastalaithe OpenVPN Docker le APIanna .NET',
        'Painéil mhonatóireachta fíor-ama',
        'Botanna Telegram agus bailíochtóirí Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Scileanna & uirlisí',
    },
    projects: {
      eyebrow: 'Foinse oscailte',
      title: 'Tionscadail roghnaithe',
      subtitle: 'Buaicphointí ó GitHub — go príomha éiceachóras DataGate VPN.',
      moreTitle: 'Tuilleadh stórtha',
      browseAll: 'Gach {{count}} stór ar GitHub →',
      stars: '{{count}} réalta',
      items: {
        OpenVPNGateBot: 'Bot le haghaidh idirlín saor agus oscailte.',
        DataGateMonitor: 'Monatóireacht OpenVPN le painéal agus stádas fíor-ama.',
        DataGateWin: 'Aip VPN Windows dúchais — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Freastalaí OpenVPN Docker le API .NET agus Easy-RSA.',
        DataGateAndroid: 'Aip VPN Android dúchais — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Aip VPN iOS dúchais — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Suiteálaí WPF do DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Freastalaí OpenVPN Docker le EasyRSA PKI agus .NET Web API.',
        WebMiniTgAppValidateToken: 'Bailíochtóir initData Mini App Telegram do ASP.NET.',
        StatusGate: 'Ardán stádais féin-óstáilte le stair teagmhas.',
        DataGateMonitorFrontend: 'Painéal gréasáin VPN — ASP.NET Core + React.',
        DataGateLinux: 'Cliant VPN deisce Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Teagmháil',
      title: 'Ceanglaímis',
      lead: 'Oscailte do chomhoibriú ar chórais backend, bonneagar VPN agus uirlisí forbróra.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Ceannaigh caife dom',
      },
    },
    footer: {
      source: 'Foinse ar GitHub',
      privacy: 'Príobháideachas',
    },
    cookies: {
      banner:
        'Úsáideann an suíomh localStorage ach le haghaidh teanga agus téama. Gan anailís ná rianú fógraíochta. Féach an fógra príobháideachais.',
      accept: 'Glac leis',
      reject: 'Riachtanach amháin',
      privacy: 'Fógra príobháideachais',
    },
    privacy: {
      title: 'Fógra príobháideachais',
      updated: 'Nuashonraithe go deireanach: Iúil 2026',
      close: 'Dún',
      sections: {
        controller: {
          title: 'Rialaitheoir sonraí',
          body: 'Tá Ivan Kolganov freagrach as rackot.ru. Maidir le príobháideachas: Telegram @KolganovIvan nó LinkedIn (naisc sa rannóg Teagmháil).',
        },
        data: {
          title: 'Cad sonraí a phróiseáiltear',
          body: 'Suíomh pearsanta statach. Gan cuntais úsáideora ná foirmeacha. D’fhéadfadh logaí óstála IP, cineál brabhsálaí agus am iarratais a áireamh — mar a bhíonn le hóstáil ghnáth.',
        },
        cookies: {
          title: 'Fianáin agus localStorage',
          body: 'Má ghlacann tú leis, stóráiltear teanga agus téama sa bhrabhsálaí (rackotru-locale, rackotru-theme, rackotru-consent). Roghanna feidhmiúla amháin — gan rianú. Le « Riachtanach amháin », ní shábháiltear roghanna idir cuairteanna.',
        },
        thirdParty: {
          title: 'Ábhar tríú páirtí',
          body: 'Lódálann an suíomh grianghraf próifíle ó GitHub, clónna ó Google Fonts agus naisc chuig seirbhísí seachtracha. Tá polasaithe príobháideachais féin ag na soláthraithe sin.',
        },
        rights: {
          title: 'Do chearta (GDPR)',
          body: 'Is féidir toiliú a tharraingt siar trí shonraí an tsuímh a ghlanadh sa bhrabhsálaí nó « Riachtanach amháin » a roghnú ar an chéad chuairt eile. Tá ceart rochtana, ceartúcháin, scriosta, srianta nó agóid agat, agus gearán le húdarás maoirseachta.',
        },
        contact: {
          title: 'Teagmháil',
          body: 'Ceisteanna faoin bhfógra seo: Ivan Kolganov — @KolganovIvan ar Telegram nó imkolganov ar LinkedIn.',
        },
      },
    },
  }
