import type { PartialTranslations } from './partial'

type L = PartialTranslations

const items = (
  bot: string,
  monitor: string,
  win: string,
  manager: string,
  android: string,
  ios: string,
  installer: string,
  server: string,
  tg: string,
  status: string,
  frontend: string,
  linux: string,
) => ({
  OpenVPNGateBot: bot,
  DataGateMonitor: monitor,
  DataGateWin: win,
  DataGateOpenVpnManager: manager,
  DataGateAndroid: android,
  DataGateIOS: ios,
  'DataGateWin.Installer': installer,
  DataGateOpenVpnServer: server,
  WebMiniTgAppValidateToken: tg,
  StatusGate: status,
  DataGateMonitorFrontend: frontend,
  DataGateLinux: linux,
})

const highlights = (
  a: string,
  b: string,
  c: string,
  d: string,
): [string, string, string, string] => [a, b, c, d]

export const pl: L = {
  meta: { title: 'Ivan Kolganov · Programista', description: 'Ivan Kolganov — programista rozwiązań VPN i backendu z .NET i Python.' },
  nav: { about: 'O mnie', skills: 'Umiejętności', projects: 'Projekty', contact: 'Kontakt', github: 'GitHub', language: 'Język', mainNav: 'Nawigacja główna' },
  hero: { greeting: 'Cześć, jestem {{name}}', tagline: 'Programista', bio: 'Rozwiązania VPN i backend z .NET i Python. Klienci natywni, infrastruktura Docker, monitoring i integracje Telegram.', viewProjects: 'Zobacz projekty', getInTouch: 'Kontakt', repos: 'Repozytoria', followers: 'Obserwujący', following: 'Obserwowani', cardStack: '.NET + Python' },
  about: { eyebrow: 'O mnie', title: 'Co tworzę', lead: 'Programista z {{location}}, w {{company}}. Skupiam się na bezpiecznych produktach sieciowych — od klientów VPN po infrastrukturę w kontenerach.', highlights: highlights('Wieloplatformowe klienty VPN (Windows, macOS, Linux, iOS, Android)', 'Serwery OpenVPN w Dockerze z API .NET', 'Dashboardy monitoringu w czasie rzeczywistym', 'Boty Telegram i walidatory backendu Mini App') },
  skills: { eyebrow: 'Stack', title: 'Umiejętności i narzędzia' },
  projects: { eyebrow: 'Open source', title: 'Wyróżnione projekty', subtitle: 'Najlepsze z GitHub — głównie ekosystem VPN DataGate.', moreTitle: 'Więcej repozytoriów', browseAll: 'Zobacz wszystkie {{count}} repozytoria na GitHub →', stars: '{{count}} gwiazdek', items: items('Bot łączący ze swobodnym i otwartym internetem.', 'Monitoring OpenVPN z dashboardem i statusem na żywo.', 'Natywna aplikacja VPN Windows — OpenVPN over WebSocket Secure.', 'Serwer OpenVPN w Dockerze z API .NET i Easy-RSA.', 'Natywna aplikacja VPN Android — OpenVPN over WebSocket Secure.', 'Natywna aplikacja VPN iOS — OpenVPN over WebSocket Secure.', 'Instalator WPF dla klienta DataGate Windows.', 'Samodzielny serwer OpenVPN Docker z EasyRSA PKI i .NET Web API.', 'Walidator initData Mini App Telegram dla ASP.NET.', 'Platforma statusu self-hosted z historią incydentów.', 'Dashboard VPN — ASP.NET Core + React.', 'Klient VPN Linux — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Porozmawiajmy', lead: 'Otwarty na współpracę przy backendzie, infrastrukturze VPN i narzędziach deweloperskich.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Postaw kawę' } },
  footer: { builtWith: 'Zbudowano w React i Vite', source: 'Kod na GitHub' },
}

export const uk: L = {
  meta: { title: 'Іван Колганов · Розробник ПЗ', description: 'Іван Колганов — розробник VPN і backend-рішень на .NET і Python.' },
  nav: { about: 'Про мене', skills: 'Навички', projects: 'Проєкти', contact: 'Контакти', github: 'GitHub', language: 'Мова', mainNav: 'Головна навігація' },
  hero: { greeting: 'Привіт, я {{name}}', tagline: 'Розробник ПЗ', bio: 'VPN і backend-рішення на .NET і Python. Нативні клієнти, Docker-інфраструктура, моніторинг і Telegram-інтеграції.', viewProjects: 'Дивитись проєкти', getInTouch: 'Зв\'язатися', repos: 'Репозиторії', followers: 'Підписники', following: 'Підписки', cardStack: '.NET + Python' },
  about: { eyebrow: 'Про мене', title: 'Чим займаюсь', lead: 'Розробник з {{location}}, працюю в {{company}}. Спеціалізуюсь на безпечних мережевих продуктах — від VPN-клієнтів до контейнеризованої інфраструктури.', highlights: highlights('Кросплатформні VPN-клієнти (Windows, macOS, Linux, iOS, Android)', 'OpenVPN-сервери в Docker з .NET API', 'Дашборди моніторингу в реальному часі', 'Telegram-боти та валідатори Mini App') },
  skills: { eyebrow: 'Стек', title: 'Навички та інструменти' },
  projects: { eyebrow: 'Open source', title: 'Обрані проєкти', subtitle: 'Найкраще з GitHub — переважно екосистема DataGate VPN.', moreTitle: 'Інші репозиторії', browseAll: 'Усі {{count}} репозиторіїв на GitHub →', stars: '{{count}} зірок', items: items('Бот для вільного та відкритого інтернету.', 'Моніторинг OpenVPN з дашбордом і статусом у реальному часі.', 'Нативний VPN-клієнт Windows — OpenVPN over WebSocket Secure.', 'OpenVPN-сервер у Docker з .NET API та Easy-RSA.', 'Нативний VPN-клієнт Android — OpenVPN over WebSocket Secure.', 'Нативний VPN-клієнт iOS — OpenVPN over WebSocket Secure.', 'WPF-інсталятор для клієнта DataGate Windows.', 'Автономний Docker OpenVPN-сервер з EasyRSA PKI та .NET Web API.', 'Валідатор initData Telegram Mini App для ASP.NET.', 'Self-hosted платформа статусу з історією інцидентів.', 'Веб-дашборд VPN — ASP.NET Core + React.', 'VPN-клієнт Linux — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Контакти', title: 'На зв\'язку', lead: 'Відкритий до співпраці з backend, VPN-інфраструктурою та dev-інструментами.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Пригостити кавою' } },
  footer: { builtWith: 'Зроблено на React і Vite', source: 'Код на GitHub' },
}

export const cs: L = {
  meta: { title: 'Ivan Kolganov · Vývojář softwaru', description: 'Ivan Kolganov — vývojář VPN a backend řešení s .NET a Python.' },
  nav: { about: 'O mně', skills: 'Dovednosti', projects: 'Projekty', contact: 'Kontakt', github: 'GitHub', language: 'Jazyk', mainNav: 'Hlavní navigace' },
  hero: { greeting: 'Ahoj, jsem {{name}}', tagline: 'Vývojář softwaru', bio: 'VPN a backend řešení s .NET a Python. Nativní klienti, Docker infrastruktura, monitoring a Telegram integrace.', viewProjects: 'Zobrazit projekty', getInTouch: 'Kontaktovat', repos: 'Repozitáře', followers: 'Sledující', following: 'Sleduji', cardStack: '.NET + Python' },
  about: { eyebrow: 'O mně', title: 'Co tvořím', lead: 'Vývojář z {{location}}, v {{company}}. Zaměřuji se na bezpečné síťové produkty — od VPN klientů po kontejnerizovanou infrastrukturu.', highlights: highlights('Multiplatformní VPN klienti (Windows, macOS, Linux, iOS, Android)', 'Dockerizované OpenVPN servery s .NET API', 'Monitoring dashboardy v reálném čase', 'Telegram boti a validátory Mini App backendu') },
  skills: { eyebrow: 'Stack', title: 'Dovednosti a nástroje' },
  projects: { eyebrow: 'Open source', title: 'Vybrané projekty', subtitle: 'Nejlepší z GitHubu — především ekosystém DataGate VPN.', moreTitle: 'Další repozitáře', browseAll: 'Všech {{count}} repozitářů na GitHubu →', stars: '{{count}} hvězd', items: items('Bot pro svobodný a otevřený internet.', 'Monitoring OpenVPN s dashboardem a stavem v reálném čase.', 'Nativní VPN aplikace Windows — OpenVPN over WebSocket Secure.', 'Dockerizovaný OpenVPN server s .NET API a Easy-RSA.', 'Nativní VPN aplikace Android — OpenVPN over WebSocket Secure.', 'Nativní VPN aplikace iOS — OpenVPN over WebSocket Secure.', 'WPF instalátor pro DataGate Windows VPN klienta.', 'Samostatný Docker OpenVPN server s EasyRSA PKI a .NET Web API.', 'Validátor initData Telegram Mini App pro ASP.NET.', 'Self-hosted status platforma s historií incidentů.', 'Web dashboard VPN — ASP.NET Core + React.', 'Desktop VPN klient Linux — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Pojďme se spojit', lead: 'Otevřen spolupráci na backendu, VPN infrastruktuře a vývojářských nástrojích.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Kup mi kávu' } },
  footer: { builtWith: 'Vytvořeno v React a Vite', source: 'Zdrojový kód na GitHubu' },
}

export const ro: L = {
  meta: { title: 'Ivan Kolganov · Dezvoltator software', description: 'Ivan Kolganov — dezvoltator de soluții VPN și backend cu .NET și Python.' },
  nav: { about: 'Despre', skills: 'Abilități', projects: 'Proiecte', contact: 'Contact', github: 'GitHub', language: 'Limbă', mainNav: 'Navigare principală' },
  hero: { greeting: 'Salut, sunt {{name}}', tagline: 'Dezvoltator software', bio: 'Soluții VPN și backend cu .NET și Python. Clienți nativi, infrastructură Docker, dashboard-uri și integrări Telegram.', viewProjects: 'Vezi proiecte', getInTouch: 'Contactează-mă', repos: 'Repo-uri', followers: 'Urmăritori', following: 'Urmăresc', cardStack: '.NET + Python' },
  about: { eyebrow: 'Despre', title: 'Ce construiesc', lead: 'Dezvoltator în {{location}}, la {{company}}. Mă concentrez pe produse de rețea securizate — de la clienți VPN nativi la infrastructură containerizată.', highlights: highlights('Clienți VPN multiplatformă (Windows, macOS, Linux, iOS, Android)', 'Servere OpenVPN dockerizate cu API-uri .NET', 'Dashboard-uri de monitorizare în timp real', 'Boți Telegram și validatori backend Mini App') },
  skills: { eyebrow: 'Stack', title: 'Abilități și instrumente' },
  projects: { eyebrow: 'Open source', title: 'Proiecte recomandate', subtitle: 'Repere de pe GitHub — în special ecosistemul VPN DataGate.', moreTitle: 'Mai multe depozite', browseAll: 'Toate cele {{count}} repo-uri pe GitHub →', stars: '{{count}} stele', items: items('Un bot care te conectează la un internet liber și deschis.', 'Suite de monitorizare OpenVPN cu dashboard și status în timp real.', 'Aplicație VPN nativă Windows — OpenVPN over WebSocket Secure.', 'Server OpenVPN dockerizat cu API .NET și Easy-RSA.', 'Aplicație VPN nativă Android — OpenVPN over WebSocket Secure.', 'Aplicație VPN nativă iOS — OpenVPN over WebSocket Secure.', 'Installer WPF pentru clientul VPN DataGate Windows.', 'Server OpenVPN Docker cu PKI EasyRSA și API .NET.', 'Validator initData Mini App Telegram pentru ASP.NET.', 'Platformă de status self-hosted cu istoric incidente.', 'Dashboard web VPN — ASP.NET Core + React.', 'Client VPN desktop Linux — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Contact', title: 'Hai să ne conectăm', lead: 'Deschis colaborării pe backend, infrastructură VPN și instrumente pentru dezvoltatori.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Cumpără-mi o cafea' } },
  footer: { builtWith: 'Realizat cu React și Vite', source: 'Cod sursă pe GitHub' },
}

export const hu: L = {
  meta: { title: 'Ivan Kolganov · Szoftverfejlesztő', description: 'Ivan Kolganov — VPN és backend megoldások .NET-tel és Pythonnal.' },
  nav: { about: 'Rólam', skills: 'Készségek', projects: 'Projektek', contact: 'Kapcsolat', github: 'GitHub', language: 'Nyelv', mainNav: 'Fő navigáció' },
  hero: { greeting: 'Szia, {{name}} vagyok', tagline: 'Szoftverfejlesztő', bio: 'VPN és backend megoldások .NET-tel és Pythonnal. Natív kliensek, Docker infrastruktúra, monitoring és Telegram integrációk.', viewProjects: 'Projektek megtekintése', getInTouch: 'Kapcsolatfelvétel', repos: 'Repók', followers: 'Követők', following: 'Követve', cardStack: '.NET + Python' },
  about: { eyebrow: 'Rólam', title: 'Amit építek', lead: 'Fejlesztő {{location}}-ról, a {{company}}-nál. Biztonságos hálózati termékekre fókuszálok — natív VPN kliensektől a konténerizált infrastruktúráig.', highlights: highlights('Platformfüggetlen VPN kliensek (Windows, macOS, Linux, iOS, Android)', 'Dockerizált OpenVPN szerverek .NET API-kkal', 'Valós idejű monitoring dashboardok', 'Telegram botok és Mini App backend validátorok') },
  skills: { eyebrow: 'Stack', title: 'Készségek és eszközök' },
  projects: { eyebrow: 'Nyílt forráskód', title: 'Kiemelt projektek', subtitle: 'GitHub kiemelések — főleg a DataGate VPN ökoszisztéma.', moreTitle: 'További repók', browseAll: 'Mind a {{count}} repo a GitHubon →', stars: '{{count}} csillag', items: items('Bot a szabad és nyílt internethez.', 'OpenVPN monitoring dashboarddal és valós idejű státusszal.', 'Natív Windows VPN alkalmazás — OpenVPN over WebSocket Secure.', 'Dockerizált OpenVPN szerver .NET API-val és Easy-RSA-val.', 'Natív Android VPN alkalmazás — OpenVPN over WebSocket Secure.', 'Natív iOS VPN alkalmazás — OpenVPN over WebSocket Secure.', 'WPF telepítő a DataGate Windows VPN klienshez.', 'Önálló Docker OpenVPN szerver EasyRSA PKI-val és .NET Web API-val.', 'Telegram Mini App initData validátor ASP.NET-hez.', 'Self-hosted státusz platform incidens előzményekkel.', 'VPN web dashboard — ASP.NET Core + React.', 'Linux asztali VPN kliens — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kapcsolat', title: 'Lépj kapcsolatba', lead: 'Nyitott együttműködésre backend, VPN infrastruktúra és fejlesztői eszközök terén.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Fizesd a kávémat' } },
  footer: { builtWith: 'React és Vite', source: 'Forráskód a GitHubon' },
}

export const el: L = {
  meta: { title: 'Ivan Kolganov · Προγραμματιστής', description: 'Ivan Kolganov — προγραμματιστής λύσεων VPN και backend με .NET και Python.' },
  nav: { about: 'Σχετικά', skills: 'Δεξιότητες', projects: 'Έργα', contact: 'Επικοινωνία', github: 'GitHub', language: 'Γλώσσα', mainNav: 'Κύρια πλοήγηση' },
  hero: { greeting: 'Γεια, είμαι ο {{name}}', tagline: 'Προγραμματιστής', bio: 'Λύσεις VPN και backend με .NET και Python. Native clients, Docker, dashboards και ενσωματώσεις Telegram.', viewProjects: 'Δες έργα', getInTouch: 'Επικοινωνία', repos: 'Repos', followers: 'Ακόλουθοι', following: 'Ακολουθώ', cardStack: '.NET + Python' },
  about: { eyebrow: 'Σχετικά', title: 'Τι φτιάχνω', lead: 'Προγραμματιστής στην {{location}}, στην {{company}}. Εστιάζω σε ασφαλή δικτυακά προϊόντα — από native VPN clients έως containerized υποδομή.', highlights: highlights('Cross-platform VPN clients (Windows, macOS, Linux, iOS, Android)', 'Dockerized OpenVPN servers με .NET APIs', 'Dashboards παρακολούθησης σε πραγματικό χρόνο', 'Telegram bots και Mini App validators') },
  skills: { eyebrow: 'Stack', title: 'Δεξιότητες & εργαλεία' },
  projects: { eyebrow: 'Open source', title: 'Επιλεγμένα έργα', subtitle: 'Από το GitHub — κυρίως το οικοσύστημα DataGate VPN.', moreTitle: 'Περισσότερα repos', browseAll: 'Όλα τα {{count}} repos στο GitHub →', stars: '{{count}} αστέρια', items: items('Bot για ελεύθερο και ανοιχτό internet.', 'OpenVPN monitoring με dashboard και real-time status.', 'Native Windows VPN app — OpenVPN over WebSocket Secure.', 'Dockerized OpenVPN server με .NET API και Easy-RSA.', 'Native Android VPN app — OpenVPN over WebSocket Secure.', 'Native iOS VPN app — OpenVPN over WebSocket Secure.', 'WPF installer για DataGate Windows VPN client.', 'Docker OpenVPN server με EasyRSA PKI και .NET Web API.', 'Telegram Mini App initData validator για ASP.NET.', 'Self-hosted status platform με incident history.', 'VPN web dashboard — ASP.NET Core + React.', 'Linux desktop VPN client — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Επικοινωνία', title: 'Ας συνδεθούμε', lead: 'Ανοιχτός σε συνεργασία για backend, VPN υποδομή και dev tools.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Κέρασέ με καφέ' } },
  footer: { builtWith: 'Φτιαγμένο με React & Vite', source: 'Πηγαίος κώδικας στο GitHub' },
}

export const bg: L = {
  meta: { title: 'Иван Колганов · Софтуерен разработчик', description: 'Иван Колганов — разработчик на VPN и backend решения с .NET и Python.' },
  nav: { about: 'За мен', skills: 'Умения', projects: 'Проекти', contact: 'Контакт', github: 'GitHub', language: 'Език', mainNav: 'Основна навигация' },
  hero: { greeting: 'Здравей, аз съм {{name}}', tagline: 'Софтуерен разработчик', bio: 'VPN и backend решения с .NET и Python. Нативни клиенти, Docker инфраструктура, мониторинг и Telegram интеграции.', viewProjects: 'Виж проекти', getInTouch: 'Свържи се', repos: 'Репозитории', followers: 'Последователи', following: 'Следвани', cardStack: '.NET + Python' },
  about: { eyebrow: 'За мен', title: 'Какво създавам', lead: 'Разработчик в {{location}}, в {{company}}. Фокус върху сигурни мрежови продукти — от VPN клиенти до контейнеризирана инфраструктура.', highlights: highlights('Кросплатформени VPN клиенти (Windows, macOS, Linux, iOS, Android)', 'Dockerized OpenVPN сървъри с .NET API', 'Dashboards за мониторинг в реално време', 'Telegram ботове и Mini App валидатори') },
  skills: { eyebrow: 'Стек', title: 'Умения и инструменти' },
  projects: { eyebrow: 'Open source', title: 'Избрани проекти', subtitle: 'Акценти от GitHub — предимно екосистемата DataGate VPN.', moreTitle: 'Още хранилища', browseAll: 'Всички {{count}} repo в GitHub →', stars: '{{count}} звезди', items: items('Бот за свободен и отворен интернет.', 'OpenVPN мониторинг с dashboard и статус в реално време.', 'Нативно VPN приложение за Windows — OpenVPN over WebSocket Secure.', 'Dockerized OpenVPN сървър с .NET API и Easy-RSA.', 'Нативно VPN приложение за Android — OpenVPN over WebSocket Secure.', 'Нативно VPN приложение за iOS — OpenVPN over WebSocket Secure.', 'WPF инсталатор за DataGate Windows VPN клиент.', 'Самостоятелен Docker OpenVPN сървър с EasyRSA PKI и .NET Web API.', 'Telegram Mini App initData валидатор за ASP.NET.', 'Self-hosted платформа за статус с история на инциденти.', 'VPN web dashboard — ASP.NET Core + React.', 'Linux desktop VPN клиент — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Контакт', title: 'Да се свържем', lead: 'Отворен за сътрудничество по backend, VPN инфраструктура и dev инструменти.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Купи ми кафе' } },
  footer: { builtWith: 'Направено с React и Vite', source: 'Код в GitHub' },
}

export const hr: L = {
  meta: { title: 'Ivan Kolganov · Razvojni inženjer', description: 'Ivan Kolganov — razvoj VPN i backend rješenja s .NET i Python.' },
  nav: { about: 'O meni', skills: 'Vještine', projects: 'Projekti', contact: 'Kontakt', github: 'GitHub', language: 'Jezik', mainNav: 'Glavna navigacija' },
  hero: { greeting: 'Bok, ja sam {{name}}', tagline: 'Razvojni inženjer', bio: 'VPN i backend rješenja s .NET i Python. Nativni klijenti, Docker infrastruktura, monitoring i Telegram integracije.', viewProjects: 'Pogledaj projekte', getInTouch: 'Kontaktiraj me', repos: 'Repozitoriji', followers: 'Pratitelji', following: 'Pratim', cardStack: '.NET + Python' },
  about: { eyebrow: 'O meni', title: 'Što gradim', lead: 'Razvojni inženjer iz {{location}}, u {{company}}. Fokus na sigurne mrežne proizvode — od VPN klijenata do kontejnerizirane infrastrukture.', highlights: highlights('Cross-platform VPN klijenti (Windows, macOS, Linux, iOS, Android)', 'Dockerizirani OpenVPN poslužitelji s .NET API-jima', 'Dashboardi za praćenje u stvarnom vremenu', 'Telegram botovi i Mini App backend validatori') },
  skills: { eyebrow: 'Stack', title: 'Vještine i alati' },
  projects: { eyebrow: 'Open source', title: 'Istaknuti projekti', subtitle: 'Najbolje s GitHuba — uglavnom DataGate VPN ekosustav.', moreTitle: 'Više repozitorija', browseAll: 'Svih {{count}} repozitorija na GitHubu →', stars: '{{count}} zvjezdica', items: items('Bot za slobodan i otvoren internet.', 'OpenVPN monitoring s dashboardom i statusom uživo.', 'Nativna Windows VPN aplikacija — OpenVPN over WebSocket Secure.', 'Dockerizirani OpenVPN poslužitelj s .NET API i Easy-RSA.', 'Nativna Android VPN aplikacija — OpenVPN over WebSocket Secure.', 'Nativna iOS VPN aplikacija — OpenVPN over WebSocket Secure.', 'WPF installer za DataGate Windows VPN klijent.', 'Samostalni Docker OpenVPN poslužitelj s EasyRSA PKI i .NET Web API.', 'Telegram Mini App initData validator za ASP.NET.', 'Self-hosted status platforma s poviješću incidenata.', 'VPN web dashboard — ASP.NET Core + React.', 'Linux desktop VPN klijent — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Povežimo se', lead: 'Otvoren za suradnju na backendu, VPN infrastrukturi i dev alatima.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Častiti kavu' } },
  footer: { builtWith: 'Napravljeno s React i Vite', source: 'Izvorni kod na GitHubu' },
}

export const sk: L = {
  meta: { title: 'Ivan Kolganov · Softvérový vývojár', description: 'Ivan Kolganov — vývojár VPN a backend riešení s .NET a Python.' },
  nav: { about: 'O mne', skills: 'Zručnosti', projects: 'Projekty', contact: 'Kontakt', github: 'GitHub', language: 'Jazyk', mainNav: 'Hlavná navigácia' },
  hero: { greeting: 'Ahoj, som {{name}}', tagline: 'Softvérový vývojár', bio: 'VPN a backend riešenia s .NET a Python. Natívni klienti, Docker infraštruktúra, monitoring a Telegram integrácie.', viewProjects: 'Zobraziť projekty', getInTouch: 'Kontaktovať', repos: 'Repozitáre', followers: 'Sledovatelia', following: 'Sledujem', cardStack: '.NET + Python' },
  about: { eyebrow: 'O mne', title: 'Čo tvorím', lead: 'Vývojár z {{location}}, v {{company}}. Zameriavam sa na bezpečné sieťové produkty — od VPN klientov po kontajnerizovanú infraštruktúru.', highlights: highlights('Multiplatformné VPN klienty (Windows, macOS, Linux, iOS, Android)', 'Dockerizované OpenVPN servery s .NET API', 'Monitoring dashboardy v reálnom čase', 'Telegram boti a Mini App backend validátory') },
  skills: { eyebrow: 'Stack', title: 'Zručnosti a nástroje' },
  projects: { eyebrow: 'Open source', title: 'Vybrané projekty', subtitle: 'Najlepšie z GitHubu — predovšetkým ekosystém DataGate VPN.', moreTitle: 'Ďalšie repozitáre', browseAll: 'Všetkých {{count}} repozitárov na GitHube →', stars: '{{count}} hviezd', items: items('Bot pre slobodný a otvorený internet.', 'OpenVPN monitoring s dashboardom a stavom v reálnom čase.', 'Natívna Windows VPN aplikácia — OpenVPN over WebSocket Secure.', 'Dockerizovaný OpenVPN server s .NET API a Easy-RSA.', 'Natívna Android VPN aplikácia — OpenVPN over WebSocket Secure.', 'Natívna iOS VPN aplikácia — OpenVPN over WebSocket Secure.', 'WPF inštalátor pre DataGate Windows VPN klienta.', 'Samostatný Docker OpenVPN server s EasyRSA PKI a .NET Web API.', 'Validátor initData Telegram Mini App pre ASP.NET.', 'Self-hosted status platforma s históriou incidentov.', 'VPN web dashboard — ASP.NET Core + React.', 'Linux desktop VPN klient — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Spojme sa', lead: 'Otvorený spolupráci na backende, VPN infraštruktúre a dev nástrojoch.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Kúp mi kávu' } },
  footer: { builtWith: 'Vytvorené v React a Vite', source: 'Zdrojový kód na GitHube' },
}

export const sl: L = {
  meta: { title: 'Ivan Kolganov · Razvijalec programske opreme', description: 'Ivan Kolganov — razvijalec VPN in backend rešitev z .NET in Python.' },
  nav: { about: 'O meni', skills: 'Veščine', projects: 'Projekti', contact: 'Kontakt', github: 'GitHub', language: 'Jezik', mainNav: 'Glavna navigacija' },
  hero: { greeting: 'Živjo, sem {{name}}', tagline: 'Razvijalec programske opreme', bio: 'VPN in backend rešitve z .NET in Python. Nativne aplikacije, Docker infrastruktura, monitoring in Telegram integracije.', viewProjects: 'Poglej projekte', getInTouch: 'Stopi v stik', repos: 'Repozitoriji', followers: 'Sledilci', following: 'Sledim', cardStack: '.NET + Python' },
  about: { eyebrow: 'O meni', title: 'Kaj gradim', lead: 'Razvijalec iz {{location}}, pri {{company}}. Osredotočen na varne omrežne produkte — od VPN odjemalcev do kontejnerizirane infrastrukture.', highlights: highlights('Večplatformni VPN odjemalci (Windows, macOS, Linux, iOS, Android)', 'Dockerizirani OpenVPN strežniki z .NET API', 'Nadzorne plošče v realnem času', 'Telegram boti in Mini App backend validatorji') },
  skills: { eyebrow: 'Stack', title: 'Veščine in orodja' },
  projects: { eyebrow: 'Odprta koda', title: 'Izbrani projekti', subtitle: 'Izpostavljeno na GitHubu — predvsem ekosistem DataGate VPN.', moreTitle: 'Več repozitorijev', browseAll: 'Vseh {{count}} repozitorijev na GitHubu →', stars: '{{count}} zvezdic', items: items('Bot za prost in odprt internet.', 'OpenVPN monitoring z nadzorno ploščo in statusom v živo.', 'Nativna Windows VPN aplikacija — OpenVPN over WebSocket Secure.', 'Dockeriziran OpenVPN strežnik z .NET API in Easy-RSA.', 'Nativna Android VPN aplikacija — OpenVPN over WebSocket Secure.', 'Nativna iOS VPN aplikacija — OpenVPN over WebSocket Secure.', 'WPF namestitveni program za DataGate Windows VPN.', 'Samostojen Docker OpenVPN strežnik z EasyRSA PKI in .NET Web API.', 'Telegram Mini App initData validator za ASP.NET.', 'Self-hosted status platforma z zgodovino incidentov.', 'VPN spletna nadzorna plošča — ASP.NET Core + React.', 'Linux namizni VPN odjemalec — Qt 6, Google sign-in, OpenVPN 3.') },
  contact: { eyebrow: 'Kontakt', title: 'Povežimo se', lead: 'Odprt za sodelovanje pri backendu, VPN infrastrukturi in razvojnih orodjih.', links: { github: 'GitHub', linkedin: 'LinkedIn', datagate: 'DataGate', rackot: 'Rackot', coffee: 'Postrezi kavo' } },
  footer: { builtWith: 'Narejeno z React in Vite', source: 'Izvorna koda na GitHubu' },
}
