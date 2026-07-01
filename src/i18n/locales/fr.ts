import type { DeepPartial, Translations } from '../types'

export const fr: DeepPartial<Translations> = {
    meta: {
      title: 'Ivan Kolganov · Développeur logiciel',
      description: 'Ivan Kolganov — développeur de solutions VPN et backend avec .NET et Python.',
    },
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      github: 'GitHub',
      language: 'Langue',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      mainNav: 'Navigation principale',
    },
    hero: {
      greeting: 'Bonjour, je suis {{name}}',
      name: 'Ivan',
      tagline: 'Développeur logiciel',
      bio: 'Solutions VPN et backend avec .NET et Python. Clients natifs, infrastructure Docker, tableaux de bord et intégrations Telegram.',
      viewProjects: 'Voir les projets',
      getInTouch: 'Me contacter',
      repos: 'Dépôts',
      followers: 'Abonnés',
      following: 'Abonnements',
      cardStack: '.NET + Python',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Ce que je construis',
      highlights: [
        'Clients VPN multiplateformes (Windows, macOS, Linux, iOS, Android)',
        'Serveurs OpenVPN dockerisés avec APIs de gestion .NET',
        'Tableaux de bord de monitoring en temps réel',
        'Bots Telegram et validateurs backend Mini App',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Compétences & outils',
    },
    projects: {
      eyebrow: 'Open source',
      title: 'Projets en vedette',
      subtitle: 'Points forts de mon GitHub — surtout l\'écosystème VPN DataGate.',
      moreTitle: 'Autres dépôts',
      browseAll: 'Voir les {{count}} dépôts sur GitHub →',
      stars: '{{count}} étoiles',
      items: {
        OpenVPNGateBot: 'Un bot pour un internet libre et ouvert.',
        DataGateMonitor: 'Suite de monitoring OpenVPN avec tableau de bord et statut en temps réel.',
        DataGateWin: 'Application VPN Windows native — OpenVPN over WebSocket Secure.',
        DataGateOpenVpnManager: 'Serveur OpenVPN dockerisé avec API .NET et Easy-RSA.',
        DataGateAndroid: 'Application VPN Android native — OpenVPN over WebSocket Secure.',
        DataGateIOS: 'Application VPN iOS native — OpenVPN over WebSocket Secure.',
        'DataGateWin.Installer': 'Installateur WPF pour le client VPN DataGate Windows.',
        DataGateOpenVpnServer: 'Serveur OpenVPN Docker autonome avec PKI EasyRSA et API .NET.',
        WebMiniTgAppValidateToken: 'Validateur initData Mini App Telegram pour ASP.NET.',
        StatusGate: 'Plateforme de statut auto-hébergée avec historique d\'incidents.',
        DataGateMonitorFrontend: 'Tableau de bord web VPN — ASP.NET Core + React.',
        DataGateLinux: 'Client VPN desktop Linux — Qt 6, Google sign-in, OpenVPN 3.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Restons en contact',
      lead: 'Ouvert à la collaboration sur les backends, l\'infrastructure VPN et les outils dev.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        telegram: '@KolganovIvan',
        facebook: 'Facebook',
        datagate: 'DataGate',
        rackot: 'Rackot',
        coffee: 'Offrez-moi un café',
      },
    },
    footer: {
      source: 'Code source sur GitHub',
      privacy: 'Confidentialité',
    },
    cookies: {
      banner:
        'Ce site utilise le localStorage uniquement pour la langue et le thème. Pas d’analyse ni de suivi publicitaire. Voir l’avis de confidentialité.',
      accept: 'Accepter',
      reject: 'Essentiels uniquement',
      privacy: 'Avis de confidentialité',
    },
    privacy: {
      title: 'Avis de confidentialité',
      updated: 'Dernière mise à jour : juillet 2026',
      close: 'Fermer',
      sections: {
        controller: {
          title: 'Responsable du traitement',
          body: 'Ivan Kolganov exploite rackot.ru. Pour les demandes de confidentialité : Telegram @KolganovIvan ou LinkedIn (liens dans la section Contact).',
        },
        data: {
          title: 'Données traitées',
          body: 'Site personnel statique. Pas de comptes utilisateurs ni de formulaires. Les journaux de l’hébergeur peuvent inclure l’adresse IP, le type de navigateur et l’heure de la requête — comme pour un hébergement web classique.',
        },
        cookies: {
          title: 'Cookies et localStorage',
          body: 'Si vous acceptez, la langue et le thème sont enregistrés dans le navigateur (rackotru-locale, rackotru-theme, rackotru-consent). Préférences fonctionnelles uniquement — pas de suivi. Avec « Essentiels uniquement », les préférences ne sont pas conservées entre les visites.',
        },
        thirdParty: {
          title: 'Contenu tiers',
          body: 'Le site charge une photo de profil depuis GitHub, des polices Google Fonts et propose des liens vers des services externes. Ces fournisseurs ont leurs propres politiques de confidentialité.',
        },
        rights: {
          title: 'Vos droits (RGPD)',
          body: 'Vous pouvez retirer votre consentement en effaçant les données du site dans le navigateur ou en choisissant « Essentiels uniquement » lors de votre prochaine visite. Vous avez le droit d’accès, de rectification, d’effacement, de limitation ou d’opposition, et de déposer une plainte auprès de votre autorité de contrôle.',
        },
        contact: {
          title: 'Contact',
          body: 'Questions sur cet avis : Ivan Kolganov — @KolganovIvan sur Telegram ou imkolganov sur LinkedIn.',
        },
      },
    },
  }
