import { LOCALE_CODES, type LocaleCode, type Translations } from './types'
import { en } from './locales/en'
import type { PartialTranslations } from './locales/partial'

const STORAGE_KEY = 'rackotru-locale'

export function isLocaleCode(value: string): value is LocaleCode {
  return (LOCALE_CODES as readonly string[]).includes(value)
}

export function detectLocale(): LocaleCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isLocaleCode(stored)) return stored
  } catch {
    // ignore
  }

  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const lang of languages) {
    const normalized = lang.toLowerCase()
    const base = normalized.split('-')[0]

    if (base === 'nb' || base === 'nn') return 'no'
    if (isLocaleCode(base)) return base
  }

  return 'en'
}

export function saveLocale(locale: LocaleCode): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // ignore
  }
}

export function deepMerge<T extends object>(base: T, patch: Partial<T>): T {
  const result = { ...base }

  for (const key of Object.keys(patch) as (keyof T)[]) {
    const value = patch[key]
    if (value === undefined) continue

    const baseValue = base[key]
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      result[key] = deepMerge(
        baseValue as object,
        value as object,
      ) as T[keyof T]
    } else {
      result[key] = value as T[keyof T]
    }
  }

  return result
}

export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    String(values[key] ?? ''),
  )
}

export function buildTranslations(
  locale: LocaleCode,
  overrides: PartialTranslations,
): Translations {
  if (locale === 'en') return en
  return deepMerge(en, overrides as Partial<Translations>)
}
