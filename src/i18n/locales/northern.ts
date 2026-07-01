import type { PartialTranslations } from './partial'

type L = PartialTranslations

const items = (
  bot: string, monitor: string, win: string, manager: string,
  android: string, ios: string, installer: string, server: string,
  tg: string, status: string, frontend: string, linux: string,
) => ({
  OpenVPNGateBot: bot, DataGateMonitor: monitor, DataGateWin: win,
  DataGateOpenVpnManager: manager, DataGateAndroid: android, DataGateIOS: ios,
  'DataGateWin.Installer': installer, DataGateOpenVpnServer: server,
  WebMiniTgAppValidateToken: tg, StatusGate: status,
  DataGateMonitorFrontend: frontend, DataGateLinux: linux,
})

const h = (a: string, b: string, c: string, d: string): [string, string, string, string] => [a, b, c, d]

export const sv: L = {
  meta: { title: 'Ivan Kolganov · Mjukvaruutvecklare', description: 'Ivan Kolganov — utvecklare av VPN- och backendlösningar med .NET och Python.' },
  nav: { about: 'Om', skills: 'Färdigheter', projects: 'Projekt', contact: 'Kontakt', github: 'GitHub', language: 'Språk', mainNav: 'Huvudnavigering' },
  hero: { greeting: 'Hej, jag är {{name}}', tagline: 'Mjukvaruutvecklare', bio: 'VPN- och backendlösningar med .NET och Python. Native-klienter, Docker-infrastruktur, monitoring och Telegram-integrationer.', viewProjects: 'Visa projekt', getInTouch: 'Kontakta', repos: 'Repos', followers: 'Följare', following: 'Följer', cardStack: '.NET + Python' },
  about: { eyebrow: 'Om', title: 'Vad jag bygger', lead: 'Utvecklare i {{location}}, på {{company}}. Fokus på säkra nätverksprodukter — från VPN-klienter till containeriserad infrastruktur.', highlights: h('Plattformsoberoende VPN-klienter (Windows, macOS, Linux, iOS, Android)', 'Dockeriserade OpenVPN-servrar med .NET API', 'Realtidsmonitoring och statusplattformar', 'Telegram-botar och Mini App-backendvalidatorer') },
  skills: { eyebrow: 'Stack', title: 'Färdigheter & verktyg' },
  projects: { eyebrow: 'Open source', title: 'Utvalda projekt', subtitle: 'Höjdpunkter från GitHub — främst DataGate VPN-ekosystemet.', moreTitle: 'Fler repon', browseAll: 'Alla {{count}} repos på GitHub →', stars: '{{count}} stjärnor', items: items('En bot för ett fritt och öppet internet.', 'OpenVPN-övervakning med dashboard och realtidsstatus.', 'Native Windows VPN-app — OpenVPN over WebSocket Secure.', 'Dockeriserad OpenVPN-server med .NET API och Easy-RSA.', 'Native Android VPN-app — OpenVPN over WebSocket Secure.', 'Native iOS VPN-app — OpenVPN over WebSocket Secure.', 'WPF-installationsprogram för DataGate Windows VPN.', 'Fristående Docker OpenVPN-server med EasyRSA PKI och .NET Web API.', 'Telegram Mini App initData-validator för ASP.NET.', 'Self-hostad statusplattform med incidenthistorik.', 'VPN-webbdashboard — ASP.NET Core + React.', 'Linux desktop VPN-klient — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Låt oss connecta', lead: 'Öppen för samarbete kring backend, VPN-infrastruktur och utvecklarverktyg.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Bjud på kaffe' } },
  footer: { builtWith: 'Byggd med React & Vite', source: 'Källkod på GitHub' },
}

export const da: L = {
  meta: { title: 'Ivan Kolganov · Softwareudvikler', description: 'Ivan Kolganov — udvikler af VPN- og backendløsninger med .NET og Python.' },
  nav: { about: 'Om', skills: 'Færdigheder', projects: 'Projekter', contact: 'Kontakt', github: 'GitHub', language: 'Sprog', mainNav: 'Hovednavigation' },
  hero: { greeting: 'Hej, jeg er {{name}}', tagline: 'Softwareudvikler', bio: 'VPN- og backendløsninger med .NET og Python. Native klienter, Docker-infrastruktur, monitoring og Telegram-integrationer.', viewProjects: 'Se projekter', getInTouch: 'Kontakt', repos: 'Repos', followers: 'Følgere', following: 'Følger', cardStack: '.NET + Python' },
  about: { eyebrow: 'Om', title: 'Hvad jeg bygger', lead: 'Udvikler i {{location}}, hos {{company}}. Fokus på sikre netværksprodukter — fra VPN-klienter til containeriseret infrastruktur.', highlights: h('Cross-platform VPN-klienter (Windows, macOS, Linux, iOS, Android)', 'Dockeriserede OpenVPN-servere med .NET API', 'Realtids monitoring dashboards', 'Telegram-bots og Mini App backend-validatorer') },
  skills: { eyebrow: 'Stack', title: 'Færdigheder & værktøjer' },
  projects: { eyebrow: 'Open source', title: 'Udvalgte projekter', subtitle: 'Højdepunkter fra GitHub — især DataGate VPN-økosystemet.', moreTitle: 'Flere repositories', browseAll: 'Alle {{count}} repos på GitHub →', stars: '{{count}} stjerner', items: items('En bot til et frit og åbent internet.', 'OpenVPN-overvågning med dashboard og realtidsstatus.', 'Native Windows VPN-app — OpenVPN over WebSocket Secure.', 'Dockeriseret OpenVPN-server med .NET API og Easy-RSA.', 'Native Android VPN-app — OpenVPN over WebSocket Secure.', 'Native iOS VPN-app — OpenVPN over WebSocket Secure.', 'WPF-installationsprogram til DataGate Windows VPN.', 'Selvstændig Docker OpenVPN-server med EasyRSA PKI og .NET Web API.', 'Telegram Mini App initData-validator til ASP.NET.', 'Self-hostet statusplatform med incidenthistorik.', 'VPN-webdashboard — ASP.NET Core + React.', 'Linux desktop VPN-klient — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Lad os forbinde', lead: 'Åben for samarbejde om backend, VPN-infrastruktur og udviklerværktøjer.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Køb mig en kaffe' } },
  footer: { builtWith: 'Bygget med React & Vite', source: 'Kildekode på GitHub' },
}

export const fi: L = {
  meta: { title: 'Ivan Kolganov · Ohjelmistokehittäjä', description: 'Ivan Kolganov — VPN- ja backend-ratkaisujen kehittäjä .NET:llä ja Pythonilla.' },
  nav: { about: 'Tietoa', skills: 'Taidot', projects: 'Projektit', contact: 'Yhteystiedot', github: 'GitHub', language: 'Kieli', mainNav: 'Päänavigointi' },
  hero: { greeting: 'Hei, olen {{name}}', tagline: 'Ohjelmistokehittäjä', bio: 'VPN- ja backend-ratkaisuja .NET:llä ja Pythonilla. Natiivit sovellukset, Docker-infrastruktuuri, monitorointi ja Telegram-integraatiot.', viewProjects: 'Näytä projektit', getInTouch: 'Ota yhteyttä', repos: 'Repot', followers: 'Seuraajat', following: 'Seurataan', cardStack: '.NET + Python' },
  about: { eyebrow: 'Tietoa', title: 'Mitä rakennan', lead: 'Kehittäjä {{location}}ssa, {{company}}lla. Keskityn turvallisiin verkkotuotteisiin — VPN-asiakkaista kontaineroituun infrastruktuuriin.', highlights: h('Monialustaiset VPN-asiakkaat (Windows, macOS, Linux, iOS, Android)', 'Dockeroidut OpenVPN-palvelimet .NET API:lla', 'Reaaliaikaiset monitorointidashboardit', 'Telegram-botit ja Mini App -validaattorit') },
  skills: { eyebrow: 'Stack', title: 'Taidot ja työkalut' },
  projects: { eyebrow: 'Avoin lähdekoodi', title: 'Valitut projektit', subtitle: 'GitHub-kohokohdat — erityisesti DataGate VPN -ekosysteemi.', moreTitle: 'Lisää repoja', browseAll: 'Kaikki {{count}} repoa GitHubissa →', stars: '{{count}} tähteä', items: items('Botti vapaaan ja avoimeen internetiin.', 'OpenVPN-monitorointi dashboardilla ja reaaliaikaisella tilalla.', 'Natiivi Windows VPN -sovellus — OpenVPN over WebSocket Secure.', 'Dockerioitu OpenVPN-palvelin .NET API:lla ja Easy-RSA:lla.', 'Natiivi Android VPN -sovellus — OpenVPN over WebSocket Secure.', 'Natiivi iOS VPN -sovellus — OpenVPN over WebSocket Secure.', 'WPF-asennusohjelma DataGate Windows VPN:lle.', 'Erillinen Docker OpenVPN -palvelin EasyRSA PKI:lla ja .NET Web API:lla.', 'Telegram Mini App initData -validaattori ASP.NET:lle.', 'Itse isännöity statusalusta incident-historialla.', 'VPN-verkkodashboard — ASP.NET Core + React.', 'Linux-työpöytä VPN -asiakas — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Yhteystiedot', title: 'Ollaan yhteydessä', lead: 'Avoin yhteistyölle backendin, VPN-infrastruktuurin ja dev-työkalujen parissa.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Tarjoa kahvi' } },
  footer: { builtWith: 'Tehty Reactilla ja Vitellä', source: 'Lähdekoodi GitHubissa' },
}

export const no: L = {
  meta: { title: 'Ivan Kolganov · Programvareutvikler', description: 'Ivan Kolganov — utvikler av VPN- og backendløsninger med .NET og Python.' },
  nav: { about: 'Om', skills: 'Ferdigheter', projects: 'Prosjekter', contact: 'Kontakt', github: 'GitHub', language: 'Språk', mainNav: 'Hovednavigasjon' },
  hero: { greeting: 'Hei, jeg er {{name}}', tagline: 'Programvareutvikler', bio: 'VPN- og backendløsninger med .NET og Python. Native klienter, Docker-infrastruktur, overvåking og Telegram-integrasjoner.', viewProjects: 'Se prosjekter', getInTouch: 'Ta kontakt', repos: 'Repos', followers: 'Følgere', following: 'Følger', cardStack: '.NET + Python' },
  about: { eyebrow: 'Om', title: 'Hva jeg bygger', lead: 'Utvikler i {{location}}, hos {{company}}. Fokus på sikre nettverksprodukter — fra VPN-klienter til containerisert infrastruktur.', highlights: h('Tverrplattform VPN-klienter (Windows, macOS, Linux, iOS, Android)', 'Dockeriserte OpenVPN-servere med .NET API', 'Sanntids overvåkingsdashboards', 'Telegram-boter og Mini App backend-validatorer') },
  skills: { eyebrow: 'Stack', title: 'Ferdigheter og verktøy' },
  projects: { eyebrow: 'Åpen kildekode', title: 'Utvalgte prosjekter', subtitle: 'Høydepunkter fra GitHub — særlig DataGate VPN-økosystemet.', moreTitle: 'Flere repositories', browseAll: 'Alle {{count}} repos på GitHub →', stars: '{{count}} stjerner', items: items('En bot for et fritt og åpent internett.', 'OpenVPN-overvåking med dashboard og sanntidsstatus.', 'Native Windows VPN-app — OpenVPN over WebSocket Secure.', 'Dockerisert OpenVPN-server med .NET API og Easy-RSA.', 'Native Android VPN-app — OpenVPN over WebSocket Secure.', 'Native iOS VPN-app — OpenVPN over WebSocket Secure.', 'WPF-installasjonsprogram for DataGate Windows VPN.', 'Frittstående Docker OpenVPN-server med EasyRSA PKI og .NET Web API.', 'Telegram Mini App initData-validator for ASP.NET.', 'Self-hostet statusplattform med incidenthistorikk.', 'VPN-webdashboard — ASP.NET Core + React.', 'Linux desktop VPN-klient — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'La oss koble oss', lead: 'Åpen for samarbeid om backend, VPN-infrastruktur og utviklerverktøy.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Kjøp meg en kaffe' } },
  footer: { builtWith: 'Bygget med React og Vite', source: 'Kildekode på GitHub' },
}

export const lt: L = {
  meta: { title: 'Ivan Kolganov · Programinės įrangos kūrėjas', description: 'Ivan Kolganov — VPN ir backend sprendimų kūrėjas su .NET ir Python.' },
  nav: { about: 'Apie', skills: 'Įgūdžiai', projects: 'Projektai', contact: 'Kontaktai', github: 'GitHub', language: 'Kalba', mainNav: 'Pagrindinė navigacija' },
  hero: { greeting: 'Sveiki, aš {{name}}', tagline: 'Programinės įrangos kūrėjas', bio: 'VPN ir backend sprendimai su .NET ir Python. Natyvūs klientai, Docker infrastruktūra, stebėsena ir Telegram integracijos.', viewProjects: 'Peržiūrėti projektus', getInTouch: 'Susisiekti', repos: 'Repozitorijos', followers: 'Sekėjai', following: 'Sekama', cardStack: '.NET + Python' },
  about: { eyebrow: 'Apie', title: 'Ką kuriu', lead: 'Kūrėjas iš {{location}}, {{company}}. Fokusuojuosi į saugius tinklo produktus — nuo VPN klientų iki konteinerizuotos infrastruktūros.', highlights: h('Kryžminės platformos VPN klientai (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN serveriai su .NET API', 'Realaus laiko stebėsenos skydeliai', 'Telegram botai ir Mini App validatoriai') },
  skills: { eyebrow: 'Stack', title: 'Įgūdžiai ir įrankiai' },
  projects: { eyebrow: 'Atviras kodas', title: 'Išskirtiniai projektai', subtitle: 'Geriausia iš GitHub — daugiausia DataGate VPN ekosistema.', moreTitle: 'Daugiau repozitorijų', browseAll: 'Visos {{count}} repozitorijos GitHub →', stars: '{{count}} žvaigždžių', items: items('Botas laisvam ir atviram internetui.', 'OpenVPN stebėsena su skydeliu ir realiu laiku.', 'Natyvi Windows VPN programa — OpenVPN over WebSocket Secure.', 'Docker OpenVPN serveris su .NET API ir Easy-RSA.', 'Natyvi Android VPN programa — OpenVPN over WebSocket Secure.', 'Natyvi iOS VPN programa — OpenVPN over WebSocket Secure.', 'WPF diegimo programa DataGate Windows VPN.', 'Atskiri Docker OpenVPN serveris su EasyRSA PKI ir .NET Web API.', 'Telegram Mini App initData validatorius ASP.NET.', 'Self-hosted status platforma su incidentų istorija.', 'VPN web skydelis — ASP.NET Core + React.', 'Linux darbalaukio VPN klientas — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontaktai', title: 'Susisiekime', lead: 'Atviras bendradarbiavimui backend, VPN infrastruktūroje ir dev įrankiuose.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Pakviesk kavos' } },
  footer: { builtWith: 'Sukurta su React ir Vite', source: 'Šaltinis GitHub' },
}

export const lv: L = {
  meta: { title: 'Ivan Kolganov · Programmatūras izstrādātājs', description: 'Ivan Kolganov — VPN un backend risinājumu izstrādātājs ar .NET un Python.' },
  nav: { about: 'Par mani', skills: 'Prasmes', projects: 'Projekti', contact: 'Kontakti', github: 'GitHub', language: 'Valoda', mainNav: 'Galvenā navigācija' },
  hero: { greeting: 'Sveiki, es esmu {{name}}', tagline: 'Programmatūras izstrādātājs', bio: 'VPN un backend risinājumi ar .NET un Python. Natīvi klienti, Docker infrastruktūra, monitorings un Telegram integrācijas.', viewProjects: 'Skatīt projektus', getInTouch: 'Sazināties', repos: 'Repozitoriji', followers: 'Sekotāji', following: 'Sekoju', cardStack: '.NET + Python' },
  about: { eyebrow: 'Par mani', title: 'Ko es veidoju', lead: 'Izstrādātājs no {{location}}, {{company}}. Koncentrējos uz drošiem tīkla produktiem — no VPN klientiem līdz konteinerizētai infrastruktūrai.', highlights: h('Cross-platform VPN klienti (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN serveri ar .NET API', 'Reāllaika monitoringa paneļi', 'Telegram boti un Mini App validatori') },
  skills: { eyebrow: 'Stack', title: 'Prasmes un rīki' },
  projects: { eyebrow: 'Atvērtais kods', title: 'Izceltie projekti', subtitle: 'Labākais no GitHub — galvenokārt DataGate VPN ekosistēma.', moreTitle: 'Vairāk repozitoriju', browseAll: 'Visi {{count}} repozitoriji GitHub →', stars: '{{count}} zvaigznes', items: items('Bots brīvam un atvērtam internetam.', 'OpenVPN monitorings ar paneli un reāllaika statusu.', 'Natīva Windows VPN lietotne — OpenVPN over WebSocket Secure.', 'Docker OpenVPN serveris ar .NET API un Easy-RSA.', 'Natīva Android VPN lietotne — OpenVPN over WebSocket Secure.', 'Natīva iOS VPN lietotne — OpenVPN over WebSocket Secure.', 'WPF instalētājs DataGate Windows VPN.', 'Atsevišķs Docker OpenVPN serveris ar EasyRSA PKI un .NET Web API.', 'Telegram Mini App initData validators ASP.NET.', 'Self-hosted status platforma ar incidentu vēsturi.', 'VPN web panelis — ASP.NET Core + React.', 'Linux desktop VPN klients — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakti', title: 'Sazināsimies', lead: 'Atvērts sadarbībai backend, VPN infrastruktūrā un dev rīkos.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Nopirkt kafiju' } },
  footer: { builtWith: 'Veidots ar React un Vite', source: 'Avots GitHub' },
}

export const et: L = {
  meta: { title: 'Ivan Kolganov · Tarkvaraarendaja', description: 'Ivan Kolganov — VPN ja backend lahenduste arendaja .NET ja Pythoniga.' },
  nav: { about: 'Minust', skills: 'Oskused', projects: 'Projektid', contact: 'Kontakt', github: 'GitHub', language: 'Keel', mainNav: 'Peamine navigatsioon' },
  hero: { greeting: 'Tere, mina olen {{name}}', tagline: 'Tarkvaraarendaja', bio: 'VPN ja backend lahendused .NET ja Pythoniga. Natiivsed kliendid, Docker infrastruktuur, monitooring ja Telegram integratsioonid.', viewProjects: 'Vaata projekte', getInTouch: 'Võta ühendust', repos: 'Repod', followers: 'Jälgijad', following: 'Jälgin', cardStack: '.NET + Python' },
  about: { eyebrow: 'Minust', title: 'Mida ma ehitan', lead: 'Arendaja {{location}}st, {{company}} juures. Keskendun turvalistele võrgutoodetele — VPN klientidest konteineriseeritud infrastruktuurini.', highlights: h('Mitme platvormi VPN kliendid (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN serverid .NET API-ga', 'Reaalajas monitooringu töölauad', 'Telegram botid ja Mini App valideerijad') },
  skills: { eyebrow: 'Stack', title: 'Oskused ja tööriistad' },
  projects: { eyebrow: 'Avatud lähtekood', title: 'Esiletõstetud projektid', subtitle: 'Parim GitHubist — peamiselt DataGate VPN ökosüsteem.', moreTitle: 'Rohkem repose', browseAll: 'Kõik {{count}} repot GitHubis →', stars: '{{count}} tähte', items: items('Bot vaba ja avatud interneti jaoks.', 'OpenVPN monitooring töölaua ja reaalajas staatusega.', 'Natiivne Windows VPN rakendus — OpenVPN over WebSocket Secure.', 'Docker OpenVPN server .NET API ja Easy-RSA-ga.', 'Natiivne Android VPN rakendus — OpenVPN over WebSocket Secure.', 'Natiivne iOS VPN rakendus — OpenVPN over WebSocket Secure.', 'WPF installer DataGate Windows VPN jaoks.', 'Eraldi Docker OpenVPN server EasyRSA PKI ja .NET Web API-ga.', 'Telegram Mini App initData valideerija ASP.NET jaoks.', 'Self-hosted staatusplatvorm intsidentide ajalooga.', 'VPN veebitöölaud — ASP.NET Core + React.', 'Linuxi lauaarvuti VPN klient — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Ühendame', lead: 'Avatud koostööks backendi, VPN infrastruktuuri ja arendustööriistade vallas.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Osta mulle kohv' } },
  footer: { builtWith: 'Tehtud Reacti ja Vitega', source: 'Lähtekood GitHubis' },
}
