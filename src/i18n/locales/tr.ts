import type { DeepPartial, Translations } from '../types'

export const tr: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Yazılım Geliştirici',
      description: 'Ivan Kolganov — .NET ve Python ile VPN ve backend çözümleri geliştiricisi.',
    },
    nav: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      projects: 'Projeler',
      contact: 'İletişim',
      github: 'GitHub',
      language: 'Dil',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Ana navigasyon',
    },
    hero: {
      greeting: 'Merhaba, ben {{name}}',
      name: 'Ivan',
      tagline: 'Yazılım Geliştirici',
      bio: '.NET ve Python ile VPN ve backend çözümleri. Native istemciler, Docker altyapısı, izleme panelleri ve Telegram entegrasyonları.',
      viewProjects: 'Projeleri gör',
      getInTouch: 'İletişime geç',
      repos: 'Depolar',
      followers: 'Takipçiler',
      following: 'Takip',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Hakkımda',
      title: 'Neler inşa ediyorum',
      highlights: [
        'Çok platformlu VPN istemcileri (Windows, macOS, Linux, iOS, Android)',
        'Docker OpenVPN sunucuları .NET API ile',
        'Gerçek zamanlı izleme panelleri',
        'Telegram botları ve Mini App doğrulayıcıları',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Yetenekler ve araçlar',
    },
    projects: {
      eyebrow: 'Açık kaynak',
      title: 'Öne çıkan projeler',
      subtitle: 'GitHub\'dan öne çıkanlar — çoğunlukla DataGate VPN ekosistemi.',
      moreTitle: 'Daha fazla depo',
      browseAll: 'GitHub\'daki tüm {{count}} depo →',
      stars: '{{count}} yıldız',
      items: {
        OpenVPNGateBot: 'Özgür ve açık internet için bir bot.',
        DataGateMonitor: 'Dashboard ve gerçek zamanlı durumla OpenVPN izleme.',
        DataGateWin: 'Native Windows VPN uygulaması — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Docker OpenVPN sunucusu .NET API ve Easy-RSA ile.',
        DataGateAndroid: 'Native Android VPN uygulaması — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN uygulaması — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'DataGate Windows VPN için WPF yükleyici.',
        DataGateOpenVpnServer: 'EasyRSA PKI ve .NET Web API ile Docker OpenVPN sunucusu.',
        WebMiniTgAppValidateToken: 'ASP.NET için Telegram Mini App initData doğrulayıcı.',
        StatusGate: 'Self-hosted durum platformu.',
        DataGateMonitorFrontend: 'VPN web paneli — ASP.NET Core + React.',
        DataGateLinux: 'Linux masaüstü VPN istemcisi — Qt 6, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Bağlanalım',
      lead: 'Backend, VPN altyapısı ve geliştirici araçlarında işbirliğine açığım.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Bana kahve ısmarla',
      },
    },
    footer: {
      source: 'Kaynak kod GitHub\'da',
      privacy: 'Gizlilik',
    },
    cookies: {
      banner:
        'Bu site yalnızca dil ve tema için localStorage kullanır. Analitik veya reklam izleme yok. Ayrıntılar gizlilik bildiriminde.',
      accept: 'Kabul et',
      reject: 'Yalnızca gerekli',
      privacy: 'Gizlilik bildirimi',
    },
    privacy: {
      title: 'Gizlilik bildirimi',
      updated: 'Son güncelleme: Temmuz 2026',
      close: 'Kapat',
      sections: {
        controller: {
          title: 'Veri sorumlusu',
          body: 'Ivan Kolganov rackot.ru sitesini işletir. Gizlilik talepleri için: Telegram @KolganovIvan veya LinkedIn (İletişim bölümündeki bağlantılar).',
        },
        data: {
          title: 'Hangi veriler işlenir',
          body: 'Statik kişisel site. Kullanıcı hesabı veya form yok. Barındırma günlükleri IP, tarayıcı türü ve istek zamanını içerebilir — normal web barındırmada olduğu gibi.',
        },
        cookies: {
          title: 'Çerezler ve localStorage',
          body: 'Kabul ederseniz dil ve tema tarayıcıda saklanır (rackotru-locale, rackotru-theme, rackotru-consent). Yalnızca işlevsel tercihler — izleme yok. « Yalnızca gerekli » seçeneğinde tercihler ziyaretler arasında saklanmaz.',
        },
        thirdParty: {
          title: 'Üçüncü taraf içerik',
          body: 'Site GitHub\'dan profil fotoğrafı, Google Fonts\'tan yazı tipleri yükler ve harici hizmetlere bağlantılar içerir. Bu sağlayıcıların kendi gizlilik politikaları vardır.',
        },
        rights: {
          title: 'Haklarınız (GDPR)',
          body: 'Tarayıcıdaki site verilerini silerek veya bir sonraki ziyarette « Yalnızca gerekli » seçerek onayı geri çekebilirsiniz. Erişim, düzeltme, silme, kısıtlama veya itiraz hakkınız ve denetim otoritesine şikâyet hakkınız vardır.',
        },
        contact: {
          title: 'İletişim',
          body: 'Bu bildirimle ilgili sorular: Ivan Kolganov — Telegram\'da @KolganovIvan veya LinkedIn\'de imkolganov.',
        },
      },
    },
  }
