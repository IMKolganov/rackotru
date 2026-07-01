import type { DeepPartial, Translations } from '../types'

export const is: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Hugbúnaðarþróunarmaður',
      description: 'Ivan Kolganov — þróunarmaður VPN og bakenda lausna með .NET og Python.',
    },
    nav: {
      about: 'Um mig',
      skills: 'Hæfni',
      projects: 'Verkefni',
      contact: 'Samband',
      github: 'GitHub',
      language: 'Tungumál',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Aðalflakk',
    },
    hero: {
      greeting: 'Halló, ég er {{name}}',
      name: 'Ivan',
      tagline: 'Hugbúnaðarþróunarmaður',
      bio: 'VPN og bakenda lausnir með .NET og Python. Innfædd forrit, Docker innviðir, eftirlit og Telegram samþættingar.',
      viewProjects: 'Skoða verkefni',
      getInTouch: 'Hafa samband',
      repos: 'Geymslur',
      followers: 'Fylgjendur',
      following: 'Fylgist með',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Um mig',
      title: 'Það sem ég byggi',
      highlights: [
        'VPN biðlarar á mörgum vettvangi (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN netþjónar með .NET API',
        'Rauntíma eftirlitsmælaborð',
        'Telegram botar og Mini App staðfestendur',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Hæfni og verkfæri',
    },
    projects: {
      eyebrow: 'Opinn hugbúnaður',
      title: 'Valin verkefni',
      subtitle: 'Hápunktar frá GitHub — aðallega DataGate VPN vistkerfið.',
      moreTitle: 'Fleiri geymslur',
      browseAll: 'Allar {{count}} geymslur á GitHub →',
      stars: '{{count}} stjörnur',
      items: {
        OpenVPNGateBot: 'Bot fyrir frjálst og opið internet.',
        DataGateMonitor: 'OpenVPN eftirlit með mælaborði og rauntíma stöðu.',
        DataGateWin: 'Innfædd Windows VPN forrit — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN netþjónn með .NET API og Easy-RSA.',
        DataGateAndroid: 'Innfædd Android VPN forrit — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Innfædd iOS VPN forrit — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF uppsetningarforrit fyrir DataGate Windows VPN.',
        DataGateOpenVpnServer: 'Sjálfstæður Docker OpenVPN netþjónn með EasyRSA PKI og .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData staðfestir fyrir ASP.NET.',
        StatusGate: 'Sjálfhýst stöðuvettvangur.',
        DataGateMonitorFrontend: 'VPN vefmælaborð — ASP.NET Core + React.',
        DataGateLinux: 'Linux skjáborðs VPN biðlari — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Samband',
      title: 'Tengjumst',
      lead: 'Opinn fyrir samstarfi um bakenda, VPN innviði og þróunartól.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Kaupa mér kaffi',
      },
    },
    footer: {
      source: 'Grunnkóði á GitHub',
      privacy: 'Persónuvernd',
    },
    cookies: {
      banner:
        'Síðan notar localStorage aðeins fyrir tungumál og þema. Engin greining né auglýsingar rakning. Sjá persónuverndartilkynningu.',
      accept: 'Samþykkja',
      reject: 'Aðeins nauðsynlegt',
      privacy: 'Persónuverndartilkynning',
    },
    privacy: {
      title: 'Persónuverndartilkynning',
      updated: 'Síðast uppfært: júlí 2026',
      close: 'Loka',
      sections: {
        controller: {
          title: 'Ábyrgðaraðili',
          body: 'Ivan Kolganov rekur rackot.ru. Fyrir persónuverndarfyrirspurnir: Telegram @KolganovIvan eða LinkedIn (tenglar í kafla Samband).',
        },
        data: {
          title: 'Hvaða gögn eru unnin',
          body: 'Kyrrstæð persónuleg vefsíða. Engir notendareikningar eða eyðublöð. Hýsingarskrár geta innihaldið IP, vafrategund og tíma beiðni — eins og við venjulega vefhýsingu.',
        },
        cookies: {
          title: 'Vafrakökur og localStorage',
          body: 'Ef þú samþykkir eru tungumál og þema vistað í vafranum (rackotru-locale, rackotru-theme, rackotru-consent). Aðeins virkni stillingar — engin rakning. Með « Aðeins nauðsynlegt » eru stillingar ekki vistaðar milli heimsókna.',
        },
        thirdParty: {
          title: 'Efni þriðja aðila',
          body: 'Síðan hleður prófílmynd frá GitHub, leturgerðir frá Google Fonts og tengla á ytri þjónustu. Þessir veitendur hafa sínar eigin persónuverndarstefnur.',
        },
        rights: {
          title: 'Réttindi þín (GDPR)',
          body: 'Þú getur dregið samþykki til baka með því að hreinsa gögn síðunnar í vafranum eða valið « Aðeins nauðsynlegt » við næstu heimsókn. Þú átt rétt á aðgangi, leiðréttingu, eyðingu, takmörkun eða mótmælum og kvörtun til eftirlitsyfirvalds.',
        },
        contact: {
          title: 'Samband',
          body: 'Spurningar um þessa tilkynningu: Ivan Kolganov — @KolganovIvan á Telegram eða imkolganov á LinkedIn.',
        },
      },
    },
  }
