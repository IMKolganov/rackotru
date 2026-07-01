import type { DeepPartial, Translations } from '../types'

export const sl: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Razvijalec programske opreme',
      description: 'Ivan Kolganov — razvijalec VPN in backend rešitev z .NET in Python.',
    },
    nav: {
      about: 'O meni',
      skills: 'Veščine',
      projects: 'Projekti',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Jezik',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Glavna navigacija',
    },
    hero: {
      greeting: 'Živjo, sem {{name}}',
      name: 'Ivan',
      tagline: 'Razvijalec programske opreme',
      bio: 'VPN in backend rešitve z .NET in Python. Nativne aplikacije, Docker infrastruktura, monitoring in Telegram integracije.',
      viewProjects: 'Poglej projekte',
      getInTouch: 'Stopi v stik',
      repos: 'Repozitoriji',
      followers: 'Sledilci',
      following: 'Sledim',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'O meni',
      title: 'Kaj gradim',
      highlights: [
        'Večplatformni VPN odjemalci (Windows, macOS, Linux, iOS, Android)',
        'Dockerizirani OpenVPN strežniki z .NET API',
        'Nadzorne plošče v realnem času',
        'Telegram boti in Mini App backend validatorji',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Veščine in orodja',
    },
    projects: {
      eyebrow: 'Odprta koda',
      title: 'Izbrani projekti',
      subtitle: 'Izpostavljeno na GitHubu — predvsem ekosistem DataGate VPN.',
      moreTitle: 'Več repozitorijev',
      browseAll: 'Vseh {{count}} repozitorijev na GitHubu →',
      stars: '{{count}} zvezdic',
      items: {
        OpenVPNGateBot: 'Bot za prost in odprt internet.',
        DataGateMonitor: 'OpenVPN monitoring z nadzorno ploščo in statusom v živo.',
        DataGateWin: 'Nativna Windows VPN aplikacija — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockeriziran OpenVPN strežnik z .NET API in Easy-RSA.',
        DataGateAndroid: 'Nativna Android VPN aplikacija — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Nativna iOS VPN aplikacija — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF namestitveni program za DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Samostojen Docker OpenVPN strežnik z EasyRSA PKI in .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData validator za ASP.NET.',
        StatusGate: 'Self-hosted status platforma z zgodovino incidentov.',
        DataGateMonitorFrontend: 'VPN spletna nadzorna plošča — ASP.NET Core + React.',
        DataGateLinux: 'Linux namizni VPN odjemalec — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Povežimo se',
      lead: 'Odprt za sodelovanje pri backendu, VPN infrastrukturi in razvojnih orodjih.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Postrezi kavo',
      },
    },
    footer: {
      source: 'Izvorna koda na GitHubu',
      privacy: 'Zasebnost',
    },
    cookies: {
      banner:
        'Spletno mesto uporablja localStorage samo za jezik in temo. Brez analitike ali oglaševalskega sledenja. Podrobnosti v obvestilu o zasebnosti.',
      accept: 'Sprejmi',
      reject: 'Samo nujno',
      privacy: 'Obvestilo o zasebnosti',
    },
    privacy: {
      title: 'Obvestilo o zasebnosti',
      updated: 'Nazadnje posodobljeno: julij 2026',
      close: 'Zapri',
      sections: {
        controller: {
          title: 'Upravljavec podatkov',
          body: 'Ivan Kolganov upravlja rackot.ru. Za vprašanja o zasebnosti: Telegram @KolganovIvan ali LinkedIn (povezave v razdelku Kontakt).',
        },
        data: {
          title: 'Kateri podatki se obdelujejo',
          body: 'Statično osebno spletno mesto. Brez uporabniških računov in obrazcev. Dnevniki gostovanja lahko vsebujejo IP, vrsto brskalnika in čas zahteve — kot pri običajnem spletnem gostovanju.',
        },
        cookies: {
          title: 'Piškotki in localStorage',
          body: 'Ob sprejetju se jezik in tema shranita v brskalnik (rackotru-locale, rackotru-theme, rackotru-consent). Samo funkcionalne nastavitve — brez sledenja. Pri « Samo nujno » se nastavitve med obiski ne shranijo.',
        },
        thirdParty: {
          title: 'Vsebina tretjih oseb',
          body: 'Spletno mesto naloži profilno fotografijo z GitHuba, pisave Google Fonts in povezave do zunanjih storitev. Ti ponudniki imajo lastne politike zasebnosti.',
        },
        rights: {
          title: 'Vaše pravice (GDPR)',
          body: 'Soglasje lahko kadarkoli prekličete z brisanjem podatkov spletnega mesta v brskalniku ali z izbiro « Samo nujno » ob naslednjem obisku. Imate pravico do dostopa, popravka, izbrisa, omejitve ali ugovora ter pritožbe nadzornemu organu.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Vprašanja o tem obvestilu: Ivan Kolganov — @KolganovIvan na Telegramu ali imkolganov na LinkedIn.',
        },
      },
    },
  }
