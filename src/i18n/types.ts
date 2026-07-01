export const LOCALE_CODES = [
  'en', 'ru', 'de', 'fr', 'es', 'it', 'pt', 'nl', 'pl', 'uk',
  'cs', 'ro', 'hu', 'el', 'sv', 'da', 'fi', 'no', 'bg', 'hr',
  'sk', 'sl', 'lt', 'lv', 'et', 'ga', 'mt', 'ca', 'eu', 'gl',
  'is', 'sr', 'bs', 'mk', 'sq', 'be', 'lb', 'cy', 'tr',
] as const

export type LocaleCode = (typeof LOCALE_CODES)[number]

export const LOCALE_LABELS: Record<LocaleCode, string> = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  uk: 'Українська',
  cs: 'Čeština',
  ro: 'Română',
  hu: 'Magyar',
  el: 'Ελληνικά',
  sv: 'Svenska',
  da: 'Dansk',
  fi: 'Suomi',
  no: 'Norsk',
  bg: 'Български',
  hr: 'Hrvatski',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  et: 'Eesti',
  ga: 'Gaeilge',
  mt: 'Malti',
  ca: 'Català',
  eu: 'Euskara',
  gl: 'Galego',
  is: 'Íslenska',
  sr: 'Српски',
  bs: 'Bosanski',
  mk: 'Македонски',
  sq: 'Shqip',
  be: 'Беларуская',
  lb: 'Lëtzebuergesch',
  cy: 'Cymraeg',
  tr: 'Türkçe',
}

export interface Translations {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    skills: string
    projects: string
    contact: string
    github: string
    language: string
    mainNav: string
  }
  hero: {
    greeting: string
    name: string
    tagline: string
    bio: string
    viewProjects: string
    getInTouch: string
    repos: string
    followers: string
    following: string
    cardStack: string
  }
  about: {
    eyebrow: string
    title: string
    lead: string
    highlights: [string, string, string, string]
  }
  skills: {
    eyebrow: string
    title: string
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    moreTitle: string
    browseAll: string
    stars: string
    items: Record<string, string>
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    links: {
      github: string
      linkedin: string
      instagram: string
      twitter: string
      facebook: string
      datagate: string
      rackot: string
      coffee: string
    }
  }
  footer: {
    builtWith: string
    source: string
  }
}
