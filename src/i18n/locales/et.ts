import type { DeepPartial, Translations } from '../types'

export const et: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Tarkvaraarendaja',
      description: 'Ivan Kolganov — VPN ja backend lahenduste arendaja .NET ja Pythoniga.',
    },
    nav: {
      about: 'Minust',
      skills: 'Oskused',
      projects: 'Projektid',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Keel',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Peamine navigatsioon',
    },
    hero: {
      greeting: 'Tere, mina olen {{name}}',
      name: 'Ivan',
      tagline: 'Tarkvaraarendaja',
      bio: 'VPN ja backend lahendused .NET ja Pythoniga. Natiivsed kliendid, Docker infrastruktuur, monitooring ja Telegram integratsioonid.',
      viewProjects: 'Vaata projekte',
      getInTouch: 'Võta ühendust',
      repos: 'Repod',
      followers: 'Jälgijad',
      following: 'Jälgin',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Minust',
      title: 'Mida ma ehitan',
      highlights: [
        'Mitme platvormi VPN kliendid (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN serverid .NET API-ga',
        'Reaalajas monitooringu töölauad',
        'Telegram botid ja Mini App valideerijad',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Oskused ja tööriistad',
    },
    projects: {
      eyebrow: 'Avatud lähtekood',
      title: 'Esiletõstetud projektid',
      subtitle: 'Parim GitHubist — peamiselt DataGate VPN ökosüsteem.',
      moreTitle: 'Rohkem repose',
      browseAll: 'Kõik {{count}} repot GitHubis →',
      stars: '{{count}} tähte',
      items: {
        OpenVPNGateBot: 'Bot vaba ja avatud interneti jaoks.',
        DataGateMonitor: 'OpenVPN monitooring töölaua ja reaalajas staatusega.',
        DataGateWin: 'Natiivne Windows VPN rakendus — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN server .NET API ja Easy-RSA-ga.',
        DataGateAndroid: 'Natiivne Android VPN rakendus — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Natiivne iOS VPN rakendus — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF installer DataGate Windows VPN jaoks.',
        DataGateOpenVpnServer: 'Eraldi Docker OpenVPN server EasyRSA PKI ja .NET Web API-ga.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData valideerija ASP.NET jaoks.',
        StatusGate: 'Self-hosted staatusplatvorm intsidentide ajalooga.',
        DataGateMonitorFrontend: 'VPN veebitöölaud — ASP.NET Core + React.',
        DataGateLinux: 'Linuxi lauaarvuti VPN klient — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Ühendame',
      lead: 'Avatud koostööks backendi, VPN infrastruktuuri ja arendustööriistade vallas.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Osta mulle kohv',
      },
    },
    footer: {
      source: 'Lähtekood GitHubis',
      privacy: 'Privaatsus',
    },
    cookies: {
      banner:
        'Sait kasutab localStorage\'i ainult keele ja teema jaoks. Analüütikat ega reklaamijälgimist pole. Detailid privaatsusteates.',
      accept: 'Nõustu',
      reject: 'Ainult vajalik',
      privacy: 'Privaatsusteade',
    },
    privacy: {
      title: 'Privaatsusteade',
      updated: 'Viimati uuendatud: juuli 2026',
      close: 'Sulge',
      sections: {
        controller: {
          title: 'Vastutav töötleja',
          body: 'Ivan Kolganov haldab rackot.ru. Privaatsuspäringud: Telegram @KolganovIvan või LinkedIn (lingid jaotises Kontakt).',
        },
        data: {
          title: 'Milliseid andmeid töödeldakse',
          body: 'Staatiline isiklik veebisait. Kasutajakontosid ega vorme pole. Majutuse logid võivad sisaldada IP-d, brauseritüüpi ja päringu aega — nagu tavalisel veebimajutusel.',
        },
        cookies: {
          title: 'Küpsised ja localStorage',
          body: 'Nõustudes salvestatakse keel ja teema brauserisse (rackotru-locale, rackotru-theme, rackotru-consent). Ainult funktsionaalsed eelistused — mitte jälgimine. « Ainult vajalik » korral eelistusi külastuste vahel ei salvestata.',
        },
        thirdParty: {
          title: 'Kolmandate osapoolte sisu',
          body: 'Sait laadib profiilipildi GitHubist, fonte Google Fontsist ja linke välistele teenustele. Neil teenusepakkujatel on oma privaatsuspoliitika.',
        },
        rights: {
          title: 'Teie õigused (GDPR)',
          body: 'Nõusoleku saate igal ajal tagasi võtta, kustutades saidi andmed brauserist või valides järgmisel külastusel « Ainult vajalik ». Teil on õigus juurdepääsuks, parandamiseks, kustutamiseks, piiramiseks või vastuväiteks ning kaebuse esitamiseks järelevalveasutusele.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Küsimused selle teate kohta: Ivan Kolganov — @KolganovIvan Telegramis või imkolganov LinkedInis.',
        },
      },
    },
  }
