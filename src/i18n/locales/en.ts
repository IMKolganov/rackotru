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
    lead: "I'm a software developer based in {{location}}, working under {{company}}. I focus on secure networking products — from native VPN clients to containerized server infrastructure and monitoring tools.",
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
      datagate: 'DataGate',
      rackot: 'Rackot',
      coffee: 'Buy me a coffee',
    },
  },
  footer: {
    builtWith: 'Built with React & Vite',
    source: 'Source on GitHub',
  },
}
