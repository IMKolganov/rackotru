import type { Translations } from '../types'

export const en: Translations = {
  meta: {
    title: 'Ivan Kolganov · Software Developer',
    description:
      'Ivan Kolganov — Software Developer building VPN and backend solutions with .NET and Python.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    github: 'GitHub',
    language: 'Language',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    mainNav: 'Main navigation',
  },
  hero: {
    greeting: "Hi, I'm {{name}}",
    name: 'Ivan',
    tagline: 'Software Developer',
    bio: 'Building VPN & backend solutions with .NET and Python. Native clients, Dockerized infrastructure, monitoring dashboards, and Telegram integrations.',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    repos: 'Repos',
    followers: 'Followers',
    following: 'Following',
    cardStack: '.NET + Python',
  },
  about: {
    eyebrow: 'About',
    title: 'What I build',
    lead: "I'm a software developer based in {{location}}. I founded {{team}} — a developer team for non-commercial side projects, and we sometimes build things together. I focus on secure networking products — from native VPN clients to containerized server infrastructure and monitoring tools.",
    highlights: [
      'Cross-platform VPN clients (Windows, macOS, Linux, iOS, Android)',
      'Dockerized OpenVPN servers with .NET management APIs',
      'Real-time monitoring dashboards and status platforms',
      'Telegram bots and Mini App backend validators',
    ],
  },
  skills: {
    eyebrow: 'Stack',
    title: 'Skills & tools',
  },
  projects: {
    eyebrow: 'Open source',
    title: 'Featured projects',
    subtitle:
      'Highlights from my GitHub — mostly the DataGate VPN ecosystem and related tooling.',
    moreTitle: 'More repositories',
    browseAll: 'Browse all {{count}} repos on GitHub →',
    stars: '{{count}} stars',
    items: {
      OpenVPNGateBot: 'A bot that connects you to a free and open internet.',
      DataGateMonitor:
        'Monitoring suite for OpenVPN servers with a dashboard and real-time status.',
      DataGateWin: 'Native Windows VPN app — OpenVPN over WebSocket Secure.',
      DataGateOpenVpnManager:
        'Dockerized OpenVPN server with .NET management API and Easy-RSA integration.',
      DataGateAndroid: 'Native Android VPN app — OpenVPN over WebSocket Secure.',
      DataGateIOS: 'Native iOS VPN app — OpenVPN over WebSocket Secure.',
      'DataGateWin.Installer': 'WPF installer for the DataGate Windows VPN client.',
      DataGateOpenVpnServer:
        'Self-contained Docker OpenVPN server with EasyRSA PKI and .NET Web API.',
      WebMiniTgAppValidateToken:
        'Telegram Mini App initData validator for ASP.NET — signature & expiration checks.',
      StatusGate:
        'Self-hosted service status platform with uptime timelines and incident history.',
      DataGateMonitorFrontend:
        'Web dashboard for monitoring VPN connections — ASP.NET Core + React.',
      DataGateLinux:
        'Desktop VPN client for Linux — Qt 6, Google sign-in, embedded OpenVPN 3.',
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's connect",
    lead: 'Open to collaboration on backend systems, VPN infrastructure, and developer tools. Reach out via LinkedIn or explore my work on GitHub.',
    links: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      twitter: 'X (Twitter)',
      facebook: 'Facebook',
      telegram: '@KolganovIvan',
      datagate: 'DataGate',
      rackot: 'Rackot production',
      coffee: 'Buy me a coffee',
    },
  },
  footer: {
    source: 'Source on GitHub',
    privacy: 'Privacy',
  },
  cookies: {
    banner:
      'This site uses browser local storage for language and theme preferences only. No analytics or ad tracking. See the privacy notice for details.',
    accept: 'Accept',
    reject: 'Essential only',
    privacy: 'Privacy notice',
  },
  privacy: {
    title: 'Privacy notice',
    updated: 'Last updated: July 2026',
    close: 'Close',
    sections: {
      controller: {
        title: 'Data controller',
        body: 'Ivan Kolganov operates rackot.ru. For privacy requests contact me via Telegram @KolganovIvan or LinkedIn (links in the Contact section).',
      },
      data: {
        title: 'What data is processed',
        body: 'This is a static personal website. I do not operate user accounts or collect form submissions. Server logs at the hosting provider may include IP address, browser type, and request time as part of normal web hosting.',
      },
      cookies: {
        title: 'Cookies & local storage',
        body: 'If you accept, the site stores your language and theme choice in your browser (localStorage keys rackotru-locale, rackotru-theme, rackotru-consent). These are functional preferences only — not used for tracking or profiling. If you choose “Essential only”, preferences are not saved between visits.',
      },
      thirdParty: {
        title: 'Third-party content',
        body: 'The site loads a profile photo from GitHub, fonts from Google Fonts, and links to external services (GitHub, social networks, etc.). Those providers have their own privacy policies when you visit them.',
      },
      rights: {
        title: 'Your rights (GDPR)',
        body: 'You may withdraw consent at any time by clearing site data in your browser or choosing “Essential only” on your next visit. You have the right to access, rectify, erase, restrict, or object to processing where applicable, and to lodge a complaint with your supervisory authority.',
      },
      contact: {
        title: 'Contact',
        body: 'Questions about this notice: Ivan Kolganov — @KolganovIvan on Telegram or imkolganov on LinkedIn.',
      },
    },
  },
}
