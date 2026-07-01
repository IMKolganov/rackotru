import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { localeOverrides } from './locales/registry'
import { en } from './locales/en'
import {
  LOCALE_CODES,
  LOCALE_LABELS,
  type LocaleCode,
  type Translations,
} from './types'
import {
  buildTranslations,
  detectLocale,
  interpolate,
  saveLocale,
} from './utils'

interface I18nContextValue {
  locale: LocaleCode
  setLocale: (locale: LocaleCode) => void
  t: Translations
  format: (template: string, values?: Record<string, string | number>) => string
  localeLabels: typeof LOCALE_LABELS
}

const I18nContext = createContext<I18nContextValue | null>(null)

function resolveTranslations(locale: LocaleCode): Translations {
  return buildTranslations(locale, localeOverrides[locale])
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(detectLocale)

  const setLocale = (next: LocaleCode) => {
    setLocaleState(next)
    saveLocale(next)
  }

  const t = useMemo(() => resolveTranslations(locale), [locale])

  const format = (template: string, values?: Record<string, string | number>) =>
    interpolate(template, values ?? {})

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, setLocale, t, format, localeLabels: LOCALE_LABELS }),
    [locale, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export { LOCALE_CODES, LOCALE_LABELS, en }
export type { LocaleCode, Translations }
