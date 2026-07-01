import type { DeepPartial, Translations } from '../types'

export const lt: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Programinės įrangos kūrėjas',
      description: 'Ivan Kolganov — VPN ir backend sprendimų kūrėjas su .NET ir Python.',
    },
    nav: {
      about: 'Apie',
      skills: 'Įgūdžiai',
      projects: 'Projektai',
      contact: 'Kontaktai',
      github: 'GitHub',
      language: 'Kalba',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Pagrindinė navigacija',
    },
    hero: {
      greeting: 'Sveiki, aš {{name}}',
      name: 'Ivan',
      tagline: 'Programinės įrangos kūrėjas',
      bio: 'VPN ir backend sprendimai su .NET ir Python. Natyvūs klientai, Docker infrastruktūra, stebėsena ir Telegram integracijos.',
      viewProjects: 'Peržiūrėti projektus',
      getInTouch: 'Susisiekti',
      repos: 'Repozitorijos',
      followers: 'Sekėjai',
      following: 'Sekama',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Apie',
      title: 'Ką kuriu',
      highlights: [
        'Kryžminės platformos VPN klientai (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN serveriai su .NET API',
        'Realaus laiko stebėsenos skydeliai',
        'Telegram botai ir Mini App validatoriai',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Įgūdžiai ir įrankiai',
    },
    projects: {
      eyebrow: 'Atviras kodas',
      title: 'Išskirtiniai projektai',
      subtitle: 'Geriausia iš GitHub — daugiausia DataGate VPN ekosistema.',
      moreTitle: 'Daugiau repozitorijų',
      browseAll: 'Visos {{count}} repozitorijos GitHub →',
      stars: '{{count}} žvaigždžių',
      items: {
        OpenVPNGateBot: 'Botas laisvam ir atviram internetui.',
        DataGateMonitor: 'OpenVPN stebėsena su skydeliu ir realiu laiku.',
        DataGateWin: 'Natyvi Windows VPN programa — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN serveris su .NET API ir Easy-RSA.',
        DataGateAndroid: 'Natyvi Android VPN programa — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Natyvi iOS VPN programa — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF diegimo programa DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Atskiri Docker OpenVPN serveris su EasyRSA PKI ir .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData validatorius ASP.NET.',
        StatusGate: 'Self-hosted status platforma su incidentų istorija.',
        DataGateMonitorFrontend: 'VPN web skydelis — ASP.NET Core + React.',
        DataGateLinux: 'Linux darbalaukio VPN klientas — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontaktai',
      title: 'Susisiekime',
      lead: 'Atviras bendradarbiavimui backend, VPN infrastruktūroje ir dev įrankiuose.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Pakviesk kavos',
      },
    },
    footer: {
      source: 'Šaltinis GitHub',
      privacy: 'Privatumas',
    },
    cookies: {
      banner:
        'Svetainė naudoja localStorage tik kalbai ir temai. Be analitikos ar reklaminio sekimosi. Daugiau – privatumo pranešime.',
      accept: 'Sutinku',
      reject: 'Tik būtina',
      privacy: 'Privatumo pranešimas',
    },
    privacy: {
      title: 'Privatumo pranešimas',
      updated: 'Atnaujinta: 2026 m. liepa',
      close: 'Uždaryti',
      sections: {
        controller: {
          title: 'Duomenų valdytojas',
          body: 'Ivan Kolganov valdo rackot.ru. Privatumo klausimais: Telegram @KolganovIvan arba LinkedIn (nuorodos skyriuje Kontaktai).',
        },
        data: {
          title: 'Kokie duomenys tvarkomi',
          body: 'Statinė asmeninė svetainė. Nėra vartotojo paskyrų ir formų. Hosting logai gali apimti IP, naršyklės tipą ir užklausos laiką — kaip įprastame web hostinge.',
        },
        cookies: {
          title: 'Slapukai ir localStorage',
          body: 'Sutikus kalba ir tema saugomi naršyklėje (rackotru-locale, rackotru-theme, rackotru-consent). Tik funkciniai nustatymai — be sekimo. Pasirinkus « Tik būtina », nustatymai neįsimenami tarp apsilankymų.',
        },
        thirdParty: {
          title: 'Trečiųjų šalių turinys',
          body: 'Svetainė įkelia profilio nuotrauką iš GitHub, šriftus iš Google Fonts ir nuorodas į išorines paslaugas. Šie tiekėjai turi savo privatumo politiką.',
        },
        rights: {
          title: 'Jūsų teisės (BDAR)',
          body: 'Sutikimą galite atšaukti ištrindami svetainės duomenis naršyklėje arba kitą kartą pasirinkę « Tik būtina ». Turite teisę į prieigą, ištaisymą, ištrynimą, apribojimą ar prieštaravimą ir skundą priežiūros institucijai.',
        },
        contact: {
          title: 'Kontaktai',
          body: 'Klausimai apie šį pranešimą: Ivan Kolganov — @KolganovIvan Telegram arba imkolganov LinkedIn.',
        },
      },
    },
  }
