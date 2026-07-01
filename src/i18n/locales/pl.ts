import type { DeepPartial, Translations } from '../types'

export const pl: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Programista',
      description: 'Ivan Kolganov — programista rozwiązań VPN i backendu z .NET i Python.',
    },
    nav: {
      about: 'O mnie',
      skills: 'Umiejętności',
      projects: 'Projekty',
      contact: 'Kontakt',
      github: 'GitHub',
      language: 'Język',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Nawigacja główna',
    },
    hero: {
      greeting: 'Cześć, jestem {{name}}',
      name: 'Ivan',
      tagline: 'Programista',
      bio: 'Rozwiązania VPN i backend z .NET i Python. Klienci natywni, infrastruktura Docker, monitoring i integracje Telegram.',
      viewProjects: 'Zobacz projekty',
      getInTouch: 'Kontakt',
      repos: 'Repozytoria',
      followers: 'Obserwujący',
      following: 'Obserwowani',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'O mnie',
      title: 'Co tworzę',
      highlights: [
        'Wieloplatformowe klienty VPN (Windows, macOS, Linux, iOS, Android)',
        'Serwery OpenVPN w Dockerze z API .NET',
        'Dashboardy monitoringu w czasie rzeczywistym',
        'Boty Telegram i walidatory backendu Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Umiejętności i narzędzia',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Wyróżnione projekty',
      subtitle: 'Najlepsze z GitHub — głównie ekosystem VPN DataGate.',
      moreTitle: 'Więcej repozytoriów',
      browseAll: 'Zobacz wszystkie {{count}} repozytoria na GitHub →',
      stars: '{{count}} gwiazdek',
      items: {
        OpenVPNGateBot: 'Bot łączący ze swobodnym i otwartym internetem.',
        DataGateMonitor: 'Monitoring OpenVPN z dashboardem i statusem na żywo.',
        DataGateWin: 'Natywna aplikacja VPN Windows — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Serwer OpenVPN w Dockerze z API .NET i Easy-RSA.',
        DataGateAndroid: 'Natywna aplikacja VPN Android — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Natywna aplikacja VPN iOS — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Instalator WPF dla klienta DataGate Windows.',
        DataGateOpenVpnServer: 'Samodzielny serwer OpenVPN Docker z EasyRSA PKI i .NET Web API.',
        WebMiniTgAppValidateToken: 'Walidator initData Mini App Telegram dla ASP.NET.',
        StatusGate: 'Platforma statusu self-hosted z historią incydentów.',
        DataGateMonitorFrontend: 'Dashboard VPN — ASP.NET Core + React.',
        DataGateLinux: 'Klient VPN Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Porozmawiajmy',
      lead: 'Otwarty na współpracę przy backendzie, infrastrukturze VPN i narzędziach deweloperskich.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Postaw kawę',
      },
    },
    footer: {
      source: 'Kod na GitHub',
      privacy: 'Prywatność',
    },
    cookies: {
      banner:
        'Ta strona używa localStorage tylko do języka i motywu. Bez analityki i śledzenia reklam. Szczegóły w informacji o prywatności.',
      accept: 'Akceptuj',
      reject: 'Tylko niezbędne',
      privacy: 'Informacja o prywatności',
    },
    privacy: {
      title: 'Informacja o prywatności',
      updated: 'Ostatnia aktualizacja: lipiec 2026',
      close: 'Zamknij',
      sections: {
        controller: {
          title: 'Administrator danych',
          body: 'Ivan Kolganov prowadzi rackot.ru. W sprawach prywatności: Telegram @KolganovIvan lub LinkedIn (linki w sekcji Kontakt).',
        },
        data: {
          title: 'Jakie dane są przetwarzane',
          body: 'Statyczna strona osobista. Brak kont użytkowników i formularzy. Logi hostingu mogą zawierać adres IP, typ przeglądarki i czas żądania — jak przy zwykłym hostingu.',
        },
        cookies: {
          title: 'Pliki cookie i localStorage',
          body: 'Po akceptacji język i motyw są zapisywane w przeglądarce (rackotru-locale, rackotru-theme, rackotru-consent). To ustawienia funkcjonalne — bez śledzenia. Przy « Tylko niezbędne » ustawienia nie są zapisywane między wizytami.',
        },
        thirdParty: {
          title: 'Treści stron trzecich',
          body: 'Strona ładuje zdjęcie profilowe z GitHub, czcionki Google Fonts i linki do zewnętrznych usług. Ci dostawcy mają własne polityki prywatności.',
        },
        rights: {
          title: 'Twoje prawa (RODO)',
          body: 'Możesz wycofać zgodę, usuwając dane strony w przeglądarce lub wybierając « Tylko niezbędne » przy następnej wizycie. Masz prawo dostępu, sprostowania, usunięcia, ograniczenia lub sprzeciwu oraz skargi do organu nadzorczego.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Pytania dotyczące tej informacji: Ivan Kolganov — @KolganovIvan na Telegramie lub imkolganov na LinkedIn.',
        },
      },
    },
  }
