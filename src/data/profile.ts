export interface Project {
  name: string
  language: string
  stars: number
  url: string
  featured?: boolean
}

export type ProfileLinkKey =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'twitter'
  | 'facebook'
  | 'telegram'
  | 'datagate'
  | 'rackot'
  | 'coffee'

export interface ProfileLink {
  key: ProfileLinkKey
  url: string
  icon: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'facebook' | 'telegram' | 'globe' | 'coffee'
}

export interface HeroCard {
  label: string
  position: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' | 'mid-right' | 'mid-left'
  active?: boolean
}

export const heroCards: HeroCard[] = [
  { label: 'OpenVPN', position: 'top-right', active: true },
  { label: 'XRay', position: 'top-left', active: true },
  { label: 'DataGate', position: 'mid-right' },
  { label: 'Docker', position: 'mid-left' },
  { label: 'Telegram', position: 'bottom-right' },
]

export const profile = {
  name: 'Ivan',
  fullName: 'Ivan Kolganov',
  handle: 'IMKolganov',
  team: 'Rackot production',
  location: 'Cyprus',
  siteSinceYear: 2014,
  avatar: 'https://avatars.githubusercontent.com/u/110064602?v=4',
  stats: {
    repos: 70,
    followers: 6,
    following: 51,
  },
  links: [
    { key: 'github', url: 'https://github.com/IMKolganov', icon: 'github' },
    { key: 'linkedin', url: 'https://www.linkedin.com/in/imkolganov', icon: 'linkedin' },
    { key: 'instagram', url: 'https://www.instagram.com/imkolganov/', icon: 'instagram' },
    { key: 'twitter', url: 'https://x.com/imkolganov', icon: 'twitter' },
    { key: 'facebook', url: 'https://www.facebook.com/IMKolganov', icon: 'facebook' },
    { key: 'telegram', url: 'https://t.me/KolganovIvan', icon: 'telegram' },
    { key: 'datagate', url: 'https://datagateapp.com', icon: 'globe' },
    { key: 'rackot', url: 'https://rackot.ru', icon: 'globe' },
    { key: 'coffee', url: 'https://buymeacoffee.com/imkolganov', icon: 'coffee' },
  ] satisfies ProfileLink[],
  skills: [
    '.NET',
    'C#',
    'Python',
    'React',
    'TypeScript',
    'OpenVPN',
    'Docker',
    'ASP.NET Core',
    'gRPC',
    'Kotlin',
    'Swift',
    'C++',
    'Go',
    'Telegram Bots',
    'Raspberry Pi',
  ],
}

export const projects: Project[] = [
  { name: 'OpenVPNGateBot', language: 'C#', stars: 6, url: 'https://github.com/IMKolganov/OpenVPNGateBot', featured: true },
  { name: 'DataGateMonitor', language: 'Shell', stars: 2, url: 'https://github.com/IMKolganov/DataGateMonitor', featured: true },
  { name: 'DataGateWin', language: 'C++', stars: 2, url: 'https://github.com/IMKolganov/DataGateWin', featured: true },
  { name: 'DataGateOpenVpnManager', language: 'C#', stars: 2, url: 'https://github.com/IMKolganov/DataGateOpenVpnManager', featured: true },
  { name: 'DataGateAndroid', language: 'Kotlin', stars: 1, url: 'https://github.com/IMKolganov/DataGateAndroid', featured: true },
  { name: 'DataGateIOS', language: 'C', stars: 1, url: 'https://github.com/IMKolganov/DataGateIOS', featured: true },
  { name: 'DataGateWin.Installer', language: 'C#', stars: 1, url: 'https://github.com/IMKolganov/DataGateWin.Installer' },
  { name: 'DataGateOpenVpnServer', language: 'C#', stars: 1, url: 'https://github.com/IMKolganov/DataGateOpenVpnServer' },
  { name: 'WebMiniTgAppValidateToken', language: 'C#', stars: 1, url: 'https://github.com/IMKolganov/WebMiniTgAppValidateToken' },
  { name: 'StatusGate', language: 'Shell', stars: 0, url: 'https://github.com/IMKolganov/StatusGate' },
  { name: 'DataGateMonitorFrontend', language: 'TypeScript', stars: 0, url: 'https://github.com/IMKolganov/DataGateMonitorFrontend' },
  { name: 'DataGateLinux', language: 'C++', stars: 0, url: 'https://github.com/IMKolganov/DataGateLinux' },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
