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
const vpn = 'OpenVPN over WebSocket Secure.'

export const ga: L = {
  meta: { title: 'Ivan Kolganov · Forbróir bogearraí', description: 'Ivan Kolganov — forbróir réitigh VPN agus backend le .NET agus Python.' },
  nav: { about: 'Fúm', skills: 'Scileanna', projects: 'Tionscadail', contact: 'Teagmháil', github: 'GitHub', language: 'Teanga', mainNav: 'Príomh-nascleanúint' },
  hero: { greeting: 'Dia duit, is mise {{name}}', tagline: 'Forbróir bogearraí', bio: 'Réitigh VPN agus backend le .NET agus Python. Cliaint dúchais, bonneagar Docker, monatóireacht agus comhtháthú Telegram.', viewProjects: 'Féach tionscadail', getInTouch: 'Déan teagmháil', repos: 'Stórtha', followers: 'Leantóirí', following: 'Ag leanúint', cardStack: '.NET + Python' },
  about: { eyebrow: 'Fúm', title: 'Cad a thógaim', lead: 'Forbróir i {{location}}, ag {{company}}. Dírithe ar tháirgí líonra slána — ó chliaint VPN go bonneagar coimeádáin.', highlights: h('Cliaint VPN tras-ardán (Windows, macOS, Linux, iOS, Android)', 'Freastalaithe OpenVPN Docker le APIanna .NET', 'Painéil mhonatóireachta fíor-ama', 'Botanna Telegram agus bailíochtóirí Mini App') },
  skills: { eyebrow: 'Stack', title: 'Scileanna & uirlisí' },
  projects: { eyebrow: 'Foinse oscailte', title: 'Tionscadail roghnaithe', subtitle: 'Buaicphointí ó GitHub — go príomha éiceachóras DataGate VPN.', moreTitle: 'Tuilleadh stórtha', browseAll: 'Gach {{count}} stór ar GitHub →', stars: '{{count}} réalta', items: items('Bot le haghaidh idirlín saor agus oscailte.', 'Monatóireacht OpenVPN le painéal agus stádas fíor-ama.', `Aip VPN Windows dúchais — ${vpn}`, 'Freastalaí OpenVPN Docker le API .NET agus Easy-RSA.', `Aip VPN Android dúchais — ${vpn}`, `Aip VPN iOS dúchais — ${vpn}`, 'Suiteálaí WPF do DataGate Windows VPN.', 'Freastalaí OpenVPN Docker le EasyRSA PKI agus .NET Web API.', 'Bailíochtóir initData Mini App Telegram do ASP.NET.', 'Ardán stádais féin-óstáilte le stair teagmhas.', 'Painéal gréasáin VPN — ASP.NET Core + React.', 'Cliant VPN deisce Linux — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Teagmháil', title: 'Ceanglaímis', lead: 'Oscailte do chomhoibriú ar chórais backend, bonneagar VPN agus uirlisí forbróra.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Ceannaigh caife dom' } },
  footer: { builtWith: 'Tógtha le React & Vite', source: 'Foinse ar GitHub' },
}

export const mt: L = {
  meta: { title: 'Ivan Kolganov · Żviluppatur tas-softwer', description: 'Ivan Kolganov — żviluppatur ta\' soluzzjonijiet VPN u backend b\'.NET u Python.' },
  nav: { about: 'Dwar', skills: 'Ħiliet', projects: 'Proġetti', contact: 'Kuntatt', github: 'GitHub', language: 'Lingwa', mainNav: 'Navigazzjoni prinċipali' },
  hero: { greeting: 'Bonġu, jien {{name}}', tagline: 'Żviluppatur tas-softwer', bio: 'Soluzzjonijiet VPN u backend b\'.NET u Python. Klijenti nattivi, infrastruttura Docker, monitoring u integrazzjonijiet Telegram.', viewProjects: 'Ara proġetti', getInTouch: 'Ikkuntattja', repos: 'Repo', followers: 'Segwaċi', following: 'Qed issegwi', cardStack: '.NET + Python' },
  about: { eyebrow: 'Dwar', title: 'X\'nbeni', lead: 'Żviluppatur f\'{{location}}, f\'{{company}}. Fokus fuq prodotti tan-netwerk siguri — minn klijenti VPN għal infrastruttura konteniturizzata.', highlights: h('Klijenti VPN cross-platform (Windows, macOS, Linux, iOS, Android)', 'Servers OpenVPN Dockerizzati b\'API .NET', 'Dashboards ta\' monitoring f\'ħin reali', 'Bots Telegram u validators Mini App') },
  skills: { eyebrow: 'Stack', title: 'Ħiliet u għodod' },
  projects: { eyebrow: 'Open source', title: 'Proġetti magħżula', subtitle: 'Highlights minn GitHub — l-ekosistema DataGate VPN.', moreTitle: 'Aktar repositories', browseAll: 'Il-{{count}} repos kollha fuq GitHub →', stars: '{{count}} stilel', items: items('Bot għal internet liberu u miftuħ.', 'Monitoring OpenVPN b\'dashboard u status f\'ħin reali.', `App VPN Windows nattiva — ${vpn}`, 'Server OpenVPN Dockerizzat b\'API .NET u Easy-RSA.', `App VPN Android nattiva — ${vpn}`, `App VPN iOS nattiva — ${vpn}`, 'Installer WPF għal DataGate Windows VPN.', 'Server OpenVPN Docker b\'EasyRSA PKI u .NET Web API.', 'Validator initData Mini App Telegram għal ASP.NET.', 'Pjattaforma ta\' status self-hosted.', 'Dashboard web VPN — ASP.NET Core + React.', 'Klijent VPN desktop Linux — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Kuntatt', title: 'Ejja nikkonnettjaw', lead: 'Miftuħ għal kollaborazzjoni fuq backend, infrastruttura VPN u għodod tal-iżviluppaturi.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Ixtri kafè' } },
  footer: { builtWith: 'Magħmul b\'React u Vite', source: 'Kodiċi fuq GitHub' },
}

export const ca: L = {
  meta: { title: 'Ivan Kolganov · Desenvolupador de programari', description: 'Ivan Kolganov — desenvolupador de solucions VPN i backend amb .NET i Python.' },
  nav: { about: 'Sobre mi', skills: 'Habilitats', projects: 'Projectes', contact: 'Contacte', github: 'GitHub', language: 'Idioma', mainNav: 'Navegació principal' },
  hero: { greeting: 'Hola, sóc {{name}}', tagline: 'Desenvolupador de programari', bio: 'Solucions VPN i backend amb .NET i Python. Clients natius, infraestructura Docker, dashboards i integracions Telegram.', viewProjects: 'Veure projectes', getInTouch: 'Contactar', repos: 'Repos', followers: 'Seguidors', following: 'Seguint', cardStack: '.NET + Python' },
  about: { eyebrow: 'Sobre mi', title: 'Què construeixo', lead: 'Desenvolupador a {{location}}, a {{company}}. M\'enfoco en productes de xarxa segurs — de clients VPN a infraestructura en contenidors.', highlights: h('Clients VPN multiplataforma (Windows, macOS, Linux, iOS, Android)', 'Servidors OpenVPN dockeritzats amb API .NET', 'Dashboards de monitoratge en temps real', 'Bots de Telegram i validadors Mini App') },
  skills: { eyebrow: 'Stack', title: 'Habilitats i eines' },
  projects: { eyebrow: 'Codi obert', title: 'Projectes destacats', subtitle: 'Destacats de GitHub — sobretot l\'ecosistema DataGate VPN.', moreTitle: 'Més repositoris', browseAll: 'Tots els {{count}} repos a GitHub →', stars: '{{count}} estrelles', items: items('Un bot per a un internet lliure i obert.', 'Monitoratge OpenVPN amb dashboard i estat en temps real.', `App VPN nativa Windows — ${vpn}`, 'Servidor OpenVPN dockeritzat amb API .NET i Easy-RSA.', `App VPN nativa Android — ${vpn}`, `App VPN nativa iOS — ${vpn}`, 'Instal·lador WPF per al client DataGate Windows.', 'Servidor OpenVPN Docker amb EasyRSA PKI i .NET Web API.', 'Validador initData Mini App Telegram per ASP.NET.', 'Plataforma d\'estat autoallotjada.', 'Dashboard web VPN — ASP.NET Core + React.', 'Client VPN d\'escriptori Linux — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Contacte', title: 'Connectem', lead: 'Obert a col·laborar en backend, infraestructura VPN i eines de desenvolupador.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Convida\'m un cafè' } },
  footer: { builtWith: 'Fet amb React i Vite', source: 'Codi a GitHub' },
}

export const eu: L = {
  meta: { title: 'Ivan Kolganov · Software garatzailea', description: 'Ivan Kolganov — VPN eta backend soluzioen garatzailea .NET eta Python-ekin.' },
  nav: { about: 'Niri buruz', skills: 'Trebetasunak', projects: 'Proiektuak', contact: 'Kontaktua', github: 'GitHub', language: 'Hizkuntza', mainNav: 'Nabigazio nagusia' },
  hero: { greeting: 'Kaixo, {{name}} naiz', tagline: 'Software garatzailea', bio: 'VPN eta backend soluzioak .NET eta Python-ekin. Bezero natiboak, Docker azpiegitura, monitorizazioa eta Telegram integrazioak.', viewProjects: 'Ikusi proiektuak', getInTouch: 'Harremanetan jarri', repos: 'Repoak', followers: 'Jarraitzaileak', following: 'Jarraitzen', cardStack: '.NET + Python' },
  about: { eyebrow: 'Niri buruz', title: 'Zer eraikitzen dudan', lead: '{{location}}-ko garatzailea, {{company}}-n. Sare produktu seguruen ardatzean — VPN bezerotik edukiontzi azpiegituretara.', highlights: h('Plataforma anitzeko VPN bezeroak (Windows, macOS, Linux, iOS, Android)', 'OpenVPN zerbitzari Dockerizatuak .NET API-ekin', 'Denbora errealeko monitorizazio panelak', 'Telegram botak eta Mini App balidatzaileak') },
  skills: { eyebrow: 'Stack', title: 'Trebetasunak eta tresnak' },
  projects: { eyebrow: 'Kode irekia', title: 'Nabarmendutako proiektuak', subtitle: 'GitHub-eko onenak — batez ere DataGate VPN ekosistema.', moreTitle: 'Repo gehiago', browseAll: '{{count}} repo guztiak GitHub-en →', stars: '{{count}} izar', items: items('Bot internet aske eta irekirako.', 'OpenVPN monitorizazioa panelarekin eta denbora errealeko egoerarekin.', `Windows VPN aplikazio natiboa — ${vpn}`, 'OpenVPN zerbitzari Dockerizatua .NET API eta Easy-RSA-rekin.', `Android VPN aplikazio natiboa — ${vpn}`, `iOS VPN aplikazio natiboa — ${vpn}`, 'WPF instalatzailea DataGate Windows VPN-rako.', 'Docker OpenVPN zerbitzaria EasyRSA PKI eta .NET Web API-rekin.', 'Telegram Mini App initData balidatzailea ASP.NET-rako.', 'Self-hosted egoera plataforma.', 'VPN web panela — ASP.NET Core + React.', 'Linux mahaigaineko VPN bezeroa — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Kontaktua', title: 'Konekta gaitezen', lead: 'Backend, VPN azpiegitura eta garatzaile tresnetan lankidetzarako irekia.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Erosi kafe bat' } },
  footer: { builtWith: 'React eta Vite-rekin egina', source: 'Iturburua GitHub-en' },
}

export const gl: L = {
  meta: { title: 'Ivan Kolganov · Desenvolvedor de software', description: 'Ivan Kolganov — desenvolvedor de solucións VPN e backend con .NET e Python.' },
  nav: { about: 'Sobre min', skills: 'Habilidades', projects: 'Proxectos', contact: 'Contacto', github: 'GitHub', language: 'Idioma', mainNav: 'Navegación principal' },
  hero: { greeting: 'Ola, son {{name}}', tagline: 'Desenvolvedor de software', bio: 'Solucións VPN e backend con .NET e Python. Clientes nativos, infraestrutura Docker, dashboards e integracións Telegram.', viewProjects: 'Ver proxectos', getInTouch: 'Contactar', repos: 'Repos', followers: 'Seguidores', following: 'Seguindo', cardStack: '.NET + Python' },
  about: { eyebrow: 'Sobre min', title: 'O que constrúo', lead: 'Desenvolvedor en {{location}}, en {{company}}. Enfócame en produtos de rede seguros — de clientes VPN a infraestrutura en contedores.', highlights: h('Clientes VPN multiplataforma (Windows, macOS, Linux, iOS, Android)', 'Servidores OpenVPN dockerizados con API .NET', 'Dashboards de monitorización en tempo real', 'Bots de Telegram e validadores Mini App') },
  skills: { eyebrow: 'Stack', title: 'Habilidades e ferramentas' },
  projects: { eyebrow: 'Código aberto', title: 'Proxectos destacados', subtitle: 'Destacados de GitHub — sobre todo o ecosistema DataGate VPN.', moreTitle: 'Máis repositorios', browseAll: 'Todos os {{count}} repos en GitHub →', stars: '{{count}} estrelas', items: items('Un bot para internet libre e aberto.', 'Monitorización OpenVPN con dashboard e estado en tempo real.', `App VPN nativa Windows — ${vpn}`, 'Servidor OpenVPN dockerizado con API .NET e Easy-RSA.', `App VPN nativa Android — ${vpn}`, `App VPN nativa iOS — ${vpn}`, 'Instalador WPF para DataGate Windows VPN.', 'Servidor OpenVPN Docker con EasyRSA PKI e .NET Web API.', 'Validador initData Mini App Telegram para ASP.NET.', 'Plataforma de estado autoaloxada.', 'Dashboard web VPN — ASP.NET Core + React.', 'Cliente VPN de escritorio Linux — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Contacto', title: 'Conectémonos', lead: 'Aberto a colaborar en backend, infraestrutura VPN e ferramentas de desenvolvemento.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Cómprame un café' } },
  footer: { builtWith: 'Feito con React e Vite', source: 'Código en GitHub' },
}

export const is: L = {
  meta: { title: 'Ivan Kolganov · Hugbúnaðarþróunarmaður', description: 'Ivan Kolganov — þróunarmaður VPN og bakenda lausna með .NET og Python.' },
  nav: { about: 'Um mig', skills: 'Hæfni', projects: 'Verkefni', contact: 'Samband', github: 'GitHub', language: 'Tungumál', mainNav: 'Aðalflakk' },
  hero: { greeting: 'Halló, ég er {{name}}', tagline: 'Hugbúnaðarþróunarmaður', bio: 'VPN og bakenda lausnir með .NET og Python. Innfædd forrit, Docker innviðir, eftirlit og Telegram samþættingar.', viewProjects: 'Skoða verkefni', getInTouch: 'Hafa samband', repos: 'Geymslur', followers: 'Fylgjendur', following: 'Fylgist með', cardStack: '.NET + Python' },
  about: { eyebrow: 'Um mig', title: 'Það sem ég byggi', lead: 'Þróunarmaður í {{location}}, hjá {{company}}. Einbeiti mér að öruggum netvörum — frá VPN biðlurum til geymsluvæddra innviða.', highlights: h('VPN biðlarar á mörgum vettvangi (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN netþjónar með .NET API', 'Rauntíma eftirlitsmælaborð', 'Telegram botar og Mini App staðfestendur') },
  skills: { eyebrow: 'Stack', title: 'Hæfni og verkfæri' },
  projects: { eyebrow: 'Opinn hugbúnaður', title: 'Valin verkefni', subtitle: 'Hápunktar frá GitHub — aðallega DataGate VPN vistkerfið.', moreTitle: 'Fleiri geymslur', browseAll: 'Allar {{count}} geymslur á GitHub →', stars: '{{count}} stjörnur', items: items('Bot fyrir frjálst og opið internet.', 'OpenVPN eftirlit með mælaborði og rauntíma stöðu.', `Innfædd Windows VPN forrit — ${vpn}`, 'Docker OpenVPN netþjónn með .NET API og Easy-RSA.', `Innfædd Android VPN forrit — ${vpn}`, `Innfædd iOS VPN forrit — ${vpn}`, 'WPF uppsetningarforrit fyrir DataGate Windows VPN.', 'Sjálfstæður Docker OpenVPN netþjónn með EasyRSA PKI og .NET Web API.', 'Telegram Mini App initData staðfestir fyrir ASP.NET.', 'Sjálfhýst stöðuvettvangur.', 'VPN vefmælaborð — ASP.NET Core + React.', 'Linux skjáborðs VPN biðlari — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Samband', title: 'Tengjumst', lead: 'Opinn fyrir samstarfi um bakenda, VPN innviði og þróunartól.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Kaupa mér kaffi' } },
  footer: { builtWith: 'Byggt með React og Vite', source: 'Grunnkóði á GitHub' },
}

export const sr: L = {
  meta: { title: 'Иван Колганов · Софтверски инжењер', description: 'Иван Колганов — развој VPN и backend решења са .NET и Python.' },
  nav: { about: 'О мени', skills: 'Вештине', projects: 'Пројекти', contact: 'Контакт', github: 'GitHub', language: 'Језик', mainNav: 'Главна навигација' },
  hero: { greeting: 'Здраво, ја сам {{name}}', tagline: 'Софтверски инжењер', bio: 'VPN и backend решења са .NET и Python. Нативни клијенти, Docker инфраструктура, мониторинг и Telegram интеграције.', viewProjects: 'Погледај пројекте', getInTouch: 'Контакт', repos: 'Репозиторијуми', followers: 'Пратиоци', following: 'Пратим', cardStack: '.NET + Python' },
  about: { eyebrow: 'О мени', title: 'Шта градим', lead: 'Развој у {{location}}, у {{company}}. Фокус на сигурне мрежне производе — од VPN клијената до контејнеризоване инфраструктуре.', highlights: h('Вишеплатформски VPN клијенти (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN сервери са .NET API', 'Мониторинг табле у реалном времену', 'Telegram ботови и Mini App валидатори') },
  skills: { eyebrow: 'Стек', title: 'Вештине и алати' },
  projects: { eyebrow: 'Open source', title: 'Истакнути пројекти', subtitle: 'Најбоље са GitHub-а — углавном DataGate VPN екосистем.', moreTitle: 'Више репозиторијума', browseAll: 'Свих {{count}} репозиторијума на GitHub →', stars: '{{count}} звездица', items: items('Бот за слободан и отворен интернет.', 'OpenVPN мониторинг са таблом и статусом уживо.', `Нативна Windows VPN апликација — ${vpn}`, 'Docker OpenVPN сервер са .NET API и Easy-RSA.', `Нативна Android VPN апликација — ${vpn}`, `Нативна iOS VPN апликација — ${vpn}`, 'WPF инсталер за DataGate Windows VPN.', 'Самостални Docker OpenVPN сервер са EasyRSA PKI и .NET Web API.', 'Telegram Mini App initData валидатор за ASP.NET.', 'Self-hosted платформа статуса.', 'VPN веб табла — ASP.NET Core + React.', 'Linux desktop VPN клијент — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Контакт', title: 'Повежимо се', lead: 'Отворен за сарадњу на backend-у, VPN инфраструктури и dev алатима.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Купи ми кафу' } },
  footer: { builtWith: 'Направљено са React и Vite', source: 'Изворни код на GitHub' },
}

export const bs: L = {
  meta: { title: 'Ivan Kolganov · Softverski inženjer', description: 'Ivan Kolganov — razvoj VPN i backend rješenja sa .NET i Python.' },
  nav: { about: 'O meni', skills: 'Vještine', projects: 'Projekti', contact: 'Kontakt', github: 'GitHub', language: 'Jezik', mainNav: 'Glavna navigacija' },
  hero: { greeting: 'Zdravo, ja sam {{name}}', tagline: 'Softverski inženjer', bio: 'VPN i backend rješenja sa .NET i Python. Nativni klijenti, Docker infrastruktura, monitoring i Telegram integracije.', viewProjects: 'Pogledaj projekte', getInTouch: 'Kontakt', repos: 'Repozitoriji', followers: 'Pratioci', following: 'Pratim', cardStack: '.NET + Python' },
  about: { eyebrow: 'O meni', title: 'Šta gradim', lead: 'Developer u {{location}}, u {{company}}. Fokus na sigurne mrežne proizvode — od VPN klijenata do kontejnerizirane infrastrukture.', highlights: h('Cross-platform VPN klijenti (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN serveri sa .NET API', 'Monitoring dashboardi u realnom vremenu', 'Telegram botovi i Mini App validatori') },
  skills: { eyebrow: 'Stack', title: 'Vještine i alati' },
  projects: { eyebrow: 'Open source', title: 'Istaknuti projekti', subtitle: 'Najbolje sa GitHub-a — uglavnom DataGate VPN ekosistem.', moreTitle: 'Više repozitorija', browseAll: 'Svih {{count}} repozitorija na GitHub →', stars: '{{count}} zvjezdica', items: items('Bot za slobodan i otvoren internet.', 'OpenVPN monitoring sa dashboardom i statusom uživo.', `Nativna Windows VPN aplikacija — ${vpn}`, 'Docker OpenVPN server sa .NET API i Easy-RSA.', `Nativna Android VPN aplikacija — ${vpn}`, `Nativna iOS VPN aplikacija — ${vpn}`, 'WPF installer za DataGate Windows VPN.', 'Samostalni Docker OpenVPN server sa EasyRSA PKI i .NET Web API.', 'Telegram Mini App initData validator za ASP.NET.', 'Self-hosted status platforma.', 'VPN web dashboard — ASP.NET Core + React.', 'Linux desktop VPN klijent — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Povežimo se', lead: 'Otvoren za saradnju na backendu, VPN infrastrukturi i dev alatima.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Častiti kafu' } },
  footer: { builtWith: 'Napravljeno sa React i Vite', source: 'Izvorni kod na GitHub' },
}

export const mk: L = {
  meta: { title: 'Иван Колганов · Софтверски инженер', description: 'Иван Колганов — развој на VPN и backend решенија со .NET и Python.' },
  nav: { about: 'За мене', skills: 'Вештини', projects: 'Проекти', contact: 'Контакт', github: 'GitHub', language: 'Јазик', mainNav: 'Главна навигација' },
  hero: { greeting: 'Здраво, јас сум {{name}}', tagline: 'Софтверски инженер', bio: 'VPN и backend решенија со .NET и Python. Нативни клиенти, Docker инфраструктура, мониторинг и Telegram интеграции.', viewProjects: 'Види проекти', getInTouch: 'Контакт', repos: 'Репозитории', followers: 'Следбеници', following: 'Следам', cardStack: '.NET + Python' },
  about: { eyebrow: 'За мене', title: 'Што градам', lead: 'Развој во {{location}}, во {{company}}. Фокус на безбедни мрежни производи — од VPN клиенти до контејнеризирана инфраструктура.', highlights: h('Кросплатформски VPN клиенти (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN сервери со .NET API', 'Мониторинг табли во реално време', 'Telegram ботови и Mini App валидатори') },
  skills: { eyebrow: 'Стек', title: 'Вештини и алатки' },
  projects: { eyebrow: 'Open source', title: 'Истакнати проекти', subtitle: 'Најдобро од GitHub — главно DataGate VPN екосистем.', moreTitle: 'Повеќе репозитории', browseAll: 'Сите {{count}} репозитории на GitHub →', stars: '{{count}} ѕвезди', items: items('Бот за слободен и отворен интернет.', 'OpenVPN мониторинг со табла и статус во живо.', `Нативна Windows VPN апликација — ${vpn}`, 'Docker OpenVPN сервер со .NET API и Easy-RSA.', `Нативна Android VPN апликација — ${vpn}`, `Нативна iOS VPN апликација — ${vpn}`, 'WPF инсталер за DataGate Windows VPN.', 'Самостоен Docker OpenVPN сервер со EasyRSA PKI и .NET Web API.', 'Telegram Mini App initData валидатор за ASP.NET.', 'Self-hosted платформа за статус.', 'VPN веб табла — ASP.NET Core + React.', 'Linux desktop VPN клиент — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Контакт', title: 'Да се поврземе', lead: 'Отворен за соработка на backend, VPN инфраструктура и dev алатки.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Купи ми кафе' } },
  footer: { builtWith: 'Направено со React и Vite', source: 'Изворен код на GitHub' },
}

export const sq: L = {
  meta: { title: 'Ivan Kolganov · Zhvillues softueri', description: 'Ivan Kolganov — zhvillues i zgjidhjeve VPN dhe backend me .NET dhe Python.' },
  nav: { about: 'Rreth meje', skills: 'Aftësitë', projects: 'Projektet', contact: 'Kontakt', github: 'GitHub', language: 'Gjuha', mainNav: 'Navigimi kryesor' },
  hero: { greeting: 'Përshëndetje, unë jam {{name}}', tagline: 'Zhvillues softueri', bio: 'Zgjidhje VPN dhe backend me .NET dhe Python. Klientë nativë, infrastrukturë Docker, monitorim dhe integrime Telegram.', viewProjects: 'Shiko projektet', getInTouch: 'Kontakto', repos: 'Repo', followers: 'Ndjekës', following: 'Ndjek', cardStack: '.NET + Python' },
  about: { eyebrow: 'Rreth meje', title: 'Çfarë ndërtoj', lead: 'Zhvillues në {{location}}, te {{company}}. Fokus në produkte rrjeti të sigurta — nga klientët VPN te infrastruktura e kontejnerizuar.', highlights: h('Klientë VPN cross-platform (Windows, macOS, Linux, iOS, Android)', 'Serverë OpenVPN Docker me API .NET', 'Panele monitorimi në kohë reale', 'Botë Telegram dhe validatorë Mini App') },
  skills: { eyebrow: 'Stack', title: 'Aftësi dhe mjete' },
  projects: { eyebrow: 'Open source', title: 'Projekte të zgjedhura', subtitle: 'Kryesoret nga GitHub — kryesisht ekosistemi DataGate VPN.', moreTitle: 'Më shumë repo', browseAll: 'Të gjitha {{count}} repot në GitHub →', stars: '{{count}} yje', items: items('Bot për internet të lirë dhe të hapur.', 'Monitorim OpenVPN me panel dhe status në kohë reale.', `Aplikacion VPN nativ Windows — ${vpn}`, 'Server OpenVPN Docker me API .NET dhe Easy-RSA.', `Aplikacion VPN nativ Android — ${vpn}`, `Aplikacion VPN nativ iOS — ${vpn}`, 'Instalues WPF për DataGate Windows VPN.', 'Server OpenVPN Docker me EasyRSA PKI dhe .NET Web API.', 'Validator initData Mini App Telegram për ASP.NET.', 'Platformë statusi self-hosted.', 'Panel web VPN — ASP.NET Core + React.', 'Klient VPN desktop Linux — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Le të lidhemi', lead: 'I hapur për bashkëpunim në backend, infrastrukturë VPN dhe mjete zhvillimi.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Më bli një kafe' } },
  footer: { builtWith: 'Ndërtuar me React dhe Vite', source: 'Burimi në GitHub' },
}

export const be: L = {
  meta: { title: 'Іван Колганоў · Распрацоўшчык ПЗ', description: 'Іван Колганоў — распрацоўшчык VPN і backend-рашэнняў на .NET і Python.' },
  nav: { about: 'Пра мяне', skills: 'Навыкі', projects: 'Праекты', contact: 'Кантакты', github: 'GitHub', language: 'Мова', mainNav: 'Галоўная навігацыя' },
  hero: { greeting: 'Прывітанне, я {{name}}', tagline: 'Распрацоўшчык ПЗ', bio: 'VPN і backend-рашэнні на .NET і Python. Натыўныя кліенты, Docker-інфраструктура, маніторынг і Telegram-інтэграцыі.', viewProjects: 'Глядзець праекты', getInTouch: 'Звязацца', repos: 'Рэпазіторыі', followers: 'Падпісчыкі', following: 'Падпіскі', cardStack: '.NET + Python' },
  about: { eyebrow: 'Пра мяне', title: 'Што я ствараю', lead: 'Распрацоўшчык з {{location}}, у {{company}}. Спецыялізуюся на бяспечных сеткавых прадуктах — ад VPN-кліентаў да кантэйнерызаванай інфраструктуры.', highlights: h('Кросплатформенныя VPN-кліенты (Windows, macOS, Linux, iOS, Android)', 'OpenVPN-серверы ў Docker з .NET API', 'Дашборды маніторынгу ў рэальным часе', 'Telegram-боты і валідатары Mini App') },
  skills: { eyebrow: 'Стэк', title: 'Навыкі і інструменты' },
  projects: { eyebrow: 'Open source', title: 'Абраныя праекты', subtitle: 'Лепшае з GitHub — пераважна экасістэма DataGate VPN.', moreTitle: 'Іншыя рэпазіторыі', browseAll: 'Усе {{count}} рэпазіторыяў на GitHub →', stars: '{{count}} зорак', items: items('Бот для свабоднага і адкрытага інтэрнэту.', 'Маніторынг OpenVPN з дашбордам і статусам у рэальным часе.', `Натыўны VPN-кліент Windows — ${vpn}`, 'OpenVPN-сервер у Docker з .NET API і Easy-RSA.', `Натыўны VPN-кліент Android — ${vpn}`, `Натыўны VPN-кліент iOS — ${vpn}`, 'WPF-інсталятар для DataGate Windows VPN.', 'Аўтаномны Docker OpenVPN-сервер з EasyRSA PKI і .NET Web API.', 'Валідатар initData Telegram Mini App для ASP.NET.', 'Self-hosted платформа статусу.', 'Вэб-дашборд VPN — ASP.NET Core + React.', 'VPN-кліент Linux — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Кантакты', title: 'Звяжамся', lead: 'Адкрыты для супрацоўніцтва ў backend, VPN-інфраструктуры і dev-інструментах.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Купі каву' } },
  footer: { builtWith: 'Зроблена на React і Vite', source: 'Код на GitHub' },
}

export const lb: L = {
  meta: { title: 'Ivan Kolganov · Softwareentwéckler', description: 'Ivan Kolganov — Entwéckler vu VPN- a Backend-Léisungen mat .NET a Python.' },
  nav: { about: 'Iwwer mech', skills: 'Fäegkeeten', projects: 'Projeten', contact: 'Kontakt', github: 'GitHub', language: 'Sprooch', mainNav: 'Haaptnavigatioun' },
  hero: { greeting: 'Moien, ech sinn {{name}}', tagline: 'Softwareentwéckler', bio: 'VPN- a Backend-Léisungen mat .NET a Python. Nativ Clienten, Docker-Infrastruktur, Monitoring a Telegram-Integratiounen.', viewProjects: 'Projeten kucken', getInTouch: 'Kontakt', repos: 'Repos', followers: 'Follower', following: 'Follegt', cardStack: '.NET + Python' },
  about: { eyebrow: 'Iwwer mech', title: 'Wat ech bauen', lead: 'Entwéckler zu {{location}}, bei {{company}}. Fokus op sécher Netzwierkprodukter — vu VPN-Clienten bis containeriséierter Infrastruktur.', highlights: h('Cross-Platform VPN-Clienten (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN-Server mat .NET API', 'Echtzäit-Monitoring-Dashboards', 'Telegram-Boten a Mini App-Validatoren') },
  skills: { eyebrow: 'Stack', title: 'Fäegkeeten & Tools' },
  projects: { eyebrow: 'Open Source', title: 'Ausgewielt Projeten', subtitle: 'Highlights vu GitHub — haaptsächlech DataGate VPN-Ökosystem.', moreTitle: 'Méi Repositories', browseAll: 'All {{count}} Repos op GitHub →', stars: '{{count}} Stären', items: items('E Bot fir en fräien an oppene Internet.', 'OpenVPN-Monitoring mat Dashboard an Echtzäit-Status.', `Native Windows VPN-App — ${vpn}`, 'Docker OpenVPN-Server mat .NET API an Easy-RSA.', `Native Android VPN-App — ${vpn}`, `Native iOS VPN-App — ${vpn}`, 'WPF-Installer fir DataGate Windows VPN.', 'Docker OpenVPN-Server mat EasyRSA PKI a .NET Web API.', 'Telegram Mini App initData-Validator fir ASP.NET.', 'Self-hosted Status-Plattform.', 'VPN-Web-Dashboard — ASP.NET Core + React.', 'Linux Desktop VPN-Client — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Loos eis verbannen', lead: 'Oppe fir Zesummenaarbecht bei Backend, VPN-Infrastruktur a Dev-Tools.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Kaf mir e Kaffi' } },
  footer: { builtWith: 'Gebaut mat React & Vite', source: 'Quellcode op GitHub' },
}

export const cy: L = {
  meta: { title: 'Ivan Kolganov · Datblygwr meddalwedd', description: 'Ivan Kolganov — datblygwr datrysiadau VPN a backend gyda .NET a Python.' },
  nav: { about: 'Amdanaf', skills: 'Sgiliau', projects: 'Prosiectau', contact: 'Cysylltu', github: 'GitHub', language: 'Iaith', mainNav: 'Prif lywio' },
  hero: { greeting: 'Helo, dw i\'n {{name}}', tagline: 'Datblygwr meddalwedd', bio: 'Datrysiadau VPN a backend gyda .NET a Python. Cleientiaid brodorol, seilwaith Docker, monitro ac integreiddiadau Telegram.', viewProjects: 'Gweld prosiectau', getInTouch: 'Cysylltu', repos: 'Repo', followers: 'Dilynwyr', following: 'Yn dilyn', cardStack: '.NET + Python' },
  about: { eyebrow: 'Amdanaf', title: 'Beth rwy\'n ei adeiladu', lead: 'Datblygwr yn {{location}}, yn {{company}}. Canolbwyntio ar gynhyrchion rhwydwaith diogel — o gleientiaid VPN i seilwaith cynhwysydd.', highlights: h('Cleientiaid VPN traws-blatfform (Windows, macOS, Linux, iOS, Android)', 'Gweinyddion OpenVPN Docker gyda API .NET', 'Dangosfyrddau monitro amser real', 'Botiau Telegram a dilyswyr Mini App') },
  skills: { eyebrow: 'Stack', title: 'Sgiliau ac offer' },
  projects: { eyebrow: 'Cod agored', title: 'Prosiectau dan sylw', subtitle: 'Uchafbwyntiau o GitHub — yn bennaf ecosystem DataGate VPN.', moreTitle: 'Mwy o ystorfeydd', browseAll: 'Pob un o\'r {{count}} repo ar GitHub →', stars: '{{count}} seren', items: items('Bot ar gyfer rhyngrwyd rhydd ac agored.', 'Monitro OpenVPN gyda dangosfwrdd a statws amser real.', `Ap VPN brodorol Windows — ${vpn}`, 'Gweinydd OpenVPN Docker gyda API .NET ac Easy-RSA.', `Ap VPN brodorol Android — ${vpn}`, `Ap VPN brodorol iOS — ${vpn}`, 'Gosodwr WPF ar gyfer DataGate Windows VPN.', 'Gweinydd OpenVPN Docker gyda EasyRSA PKI a .NET Web API.', 'Dilysydd initData Mini App Telegram ar gyfer ASP.NET.', 'Platfform statws hunan-gynhaliol.', 'Dangosfwrdd gwe VPN — ASP.NET Core + React.', 'Cleient VPN bwrdd gwaith Linux — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'Cysylltu', title: 'Gadewch i ni gysylltu', lead: 'Agored ar gyfer cydweithio ar backend, seilwaith VPN ac offer datblygu.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Prynwch goffi i mi' } },
  footer: { builtWith: 'Wedi\'i adeiladu gyda React a Vite', source: 'Cod ffynhonnell ar GitHub' },
}

export const tr: L = {
  meta: { title: 'Ivan Kolganov · Yazılım Geliştirici', description: 'Ivan Kolganov — .NET ve Python ile VPN ve backend çözümleri geliştiricisi.' },
  nav: { about: 'Hakkımda', skills: 'Yetenekler', projects: 'Projeler', contact: 'İletişim', github: 'GitHub', language: 'Dil', mainNav: 'Ana navigasyon' },
  hero: { greeting: 'Merhaba, ben {{name}}', tagline: 'Yazılım Geliştirici', bio: '.NET ve Python ile VPN ve backend çözümleri. Native istemciler, Docker altyapısı, izleme panelleri ve Telegram entegrasyonları.', viewProjects: 'Projeleri gör', getInTouch: 'İletişime geç', repos: 'Depolar', followers: 'Takipçiler', following: 'Takip', cardStack: '.NET + Python' },
  about: { eyebrow: 'Hakkımda', title: 'Neler inşa ediyorum', lead: '{{location}}\'da, {{company}} bünyesinde geliştirici. Güvenli ağ ürünlerine odaklanıyorum — VPN istemcilerinden konteyner altyapısına.', highlights: h('Çok platformlu VPN istemcileri (Windows, macOS, Linux, iOS, Android)', 'Docker OpenVPN sunucuları .NET API ile', 'Gerçek zamanlı izleme panelleri', 'Telegram botları ve Mini App doğrulayıcıları') },
  skills: { eyebrow: 'Stack', title: 'Yetenekler ve araçlar' },
  projects: { eyebrow: 'Açık kaynak', title: 'Öne çıkan projeler', subtitle: 'GitHub\'dan öne çıkanlar — çoğunlukla DataGate VPN ekosistemi.', moreTitle: 'Daha fazla depo', browseAll: 'GitHub\'daki tüm {{count}} depo →', stars: '{{count}} yıldız', items: items('Özgür ve açık internet için bir bot.', 'Dashboard ve gerçek zamanlı durumla OpenVPN izleme.', `Native Windows VPN uygulaması — ${vpn}`, 'Docker OpenVPN sunucusu .NET API ve Easy-RSA ile.', `Native Android VPN uygulaması — ${vpn}`, `Native iOS VPN uygulaması — ${vpn}`, 'DataGate Windows VPN için WPF yükleyici.', 'EasyRSA PKI ve .NET Web API ile Docker OpenVPN sunucusu.', 'ASP.NET için Telegram Mini App initData doğrulayıcı.', 'Self-hosted durum platformu.', 'VPN web paneli — ASP.NET Core + React.', 'Linux masaüstü VPN istemcisi — Qt 6, OpenVPN 3.') },
  contact: { eyebrow: 'İletişim', title: 'Bağlanalım', lead: 'Backend, VPN altyapısı ve geliştirici araçlarında işbirliğine açığım.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Bana kahve ısmarla' } },
  footer: { builtWith: 'React ve Vite ile yapıldı', source: 'Kaynak kod GitHub\'da' },
}
