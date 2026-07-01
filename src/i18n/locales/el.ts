import type { DeepPartial, Translations } from '../types'

export const el: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Προγραμματιστής',
      description: 'Ivan Kolganov — προγραμματιστής λύσεων VPN και backend με .NET και Python.',
    },
    nav: {
      about: 'Σχετικά',
      skills: 'Δεξιότητες',
      projects: 'Έργα',
      contact: 'Επικοινωνία',
      github: 'GitHub',
      language: 'Γλώσσα',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Κύρια πλοήγηση',
    },
    hero: {
      greeting: 'Γεια, είμαι ο {{name}}',
      name: 'Ivan',
      tagline: 'Προγραμματιστής',
      bio: 'Λύσεις VPN και backend με .NET και Python. Native clients, Docker, dashboards και ενσωματώσεις Telegram.',
      viewProjects: 'Δες έργα',
      getInTouch: 'Επικοινωνία',
      repos: 'Repos',
      followers: 'Ακόλουθοι',
      following: 'Ακολουθώ',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'Σχετικά',
      title: 'Τι φτιάχνω',
      highlights: [
        'Cross-platform VPN clients (Windows, macOS, Linux, iOS, Android)',
        'Dockerized OpenVPN servers με .NET APIs',
        'Dashboards παρακολούθησης σε πραγματικό χρόνο',
        'Telegram bots και Mini App validators',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Δεξιότητες & εργαλεία',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Επιλεγμένα έργα',
      subtitle: 'Από το GitHub — κυρίως το οικοσύστημα DataGate VPN.',
      moreTitle: 'Περισσότερα repos',
      browseAll: 'Όλα τα {{count}} repos στο GitHub →',
      stars: '{{count}} αστέρια',
      items: {
        OpenVPNGateBot: 'Bot για ελεύθερο και ανοιχτό internet.',
        DataGateMonitor: 'OpenVPN monitoring με dashboard και real-time status.',
        DataGateWin: 'Native Windows VPN app — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Dockerized OpenVPN server με .NET API και Easy-RSA.',
        DataGateAndroid: 'Native Android VPN app — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Native iOS VPN app — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'WPF installer για DataGate Windows VPN client.',
        DataGateOpenVpnServer: 'Docker OpenVPN server με EasyRSA PKI και .NET Web API.',
        WebMiniTgAppValidateToken: 'Telegram Mini App initData validator για ASP.NET.',
        StatusGate: 'Self-hosted status platform με incident history.',
        DataGateMonitorFrontend: 'VPN web dashboard — ASP.NET Core + React.',
        DataGateLinux: 'Linux desktop VPN client — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Επικοινωνία',
      title: 'Ας συνδεθούμε',
      lead: 'Ανοιχτός σε συνεργασία για backend, VPN υποδομή και dev tools.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Κέρασέ με καφέ',
      },
    },
    footer: {
      source: 'Πηγαίος κώδικας στο GitHub',
      privacy: 'Απόρρητο',
    },
    cookies: {
      banner:
        'Αυτός ο ιστότοπος χρησιμοποιεί localStorage μόνο για γλώσσα και θέμα. Χωρίς αναλυτικά ή διαφημιστική παρακολούθηση. Δείτε την ειδοποίηση απορρήτου.',
      accept: 'Αποδοχή',
      reject: 'Μόνο απαραίτητα',
      privacy: 'Ειδοποίηση απορρήτου',
    },
    privacy: {
      title: 'Ειδοποίηση απορρήτου',
      updated: 'Τελευταία ενημέρωση: Ιούλιος 2026',
      close: 'Κλείσιμο',
      sections: {
        controller: {
          title: 'Υπεύθυνος επεξεργασίας',
          body: 'Ο Ivan Kolganov λειτουργεί το rackot.ru. Για αιτήματα απορρήτου: Telegram @KolganovIvan ή LinkedIn (σύνδεσμοι στην ενότητα Επικοινωνία).',
        },
        data: {
          title: 'Ποια δεδομένα επεξεργάζονται',
          body: 'Στατικός προσωπικός ιστότοπος. Χωρίς λογαριασμούς χρηστών ή φόρμες. Τα αρχεία καταγραφής φιλοξενίας μπορεί να περιλαμβάνουν IP, τύπο browser και ώρα αιτήματος — όπως σε κανονική φιλοξενία.',
        },
        cookies: {
          title: 'Cookies και localStorage',
          body: 'Αν αποδεχτείτε, γλώσσα και θέμα αποθηκεύονται στον browser (rackotru-locale, rackotru-theme, rackotru-consent). Μόνο λειτουργικές προτιμήσεις — όχι παρακολούθηση. Με « Μόνο απαραίτητα », οι προτιμήσεις δεν αποθηκεύονται μεταξύ επισκέψεων.',
        },
        thirdParty: {
          title: 'Περιεχόμενο τρίτων',
          body: 'Ο ιστότοπος φορτώνει φωτογραφία προφίλ από GitHub, γραμματοσειρές Google Fonts και συνδέσμους σε εξωτερικές υπηρεσίες. Αυτοί οι πάροχοι έχουν δικές τους πολιτικές απορρήτου.',
        },
        rights: {
          title: 'Τα δικαιώματά σας (GDPR)',
          body: 'Μπορείτε να ανακαλέσετε τη συγκατάθεση διαγράφοντας δεδομένα του ιστότοπου στον browser ή επιλέγοντας « Μόνο απαραίτητα » στην επόμενη επίσκεψη. Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού ή εναντίωσης και καταγγελίας στην εποπτική αρχή.',
        },
        contact: {
          title: 'Επικοινωνία',
          body: 'Ερωτήσεις για αυτή την ειδοποίηση: Ivan Kolganov — @KolganovIvan στο Telegram ή imkolganov στο LinkedIn.',
        },
      },
    },
  }
