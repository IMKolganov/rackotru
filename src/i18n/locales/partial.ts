import type { Translations } from '../types'

export type PartialTranslations = {
  [K in keyof Translations]?: Translations[K] extends Record<string, unknown>
    ? Partial<Translations[K]>
    : Translations[K]
}
