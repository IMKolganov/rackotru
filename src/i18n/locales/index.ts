import type { LocaleCode, Translations } from '../types'
import { deepMerge } from '../utils'
import { en } from './en'
import { ru } from './ru'
import { de } from './de'
import { fr } from './fr'
import { es } from './es'
import { it } from './it'
import { pt } from './pt'
import { nl } from './nl'
import { pl } from './pl'
import { uk } from './uk'
import { cs } from './cs'
import { ro } from './ro'
import { hu } from './hu'
import { el } from './el'
import { sv } from './sv'
import { da } from './da'
import { fi } from './fi'
import { no } from './no'
import { bg } from './bg'
import { hr } from './hr'
import { sk } from './sk'
import { sl } from './sl'
import { lt } from './lt'
import { lv } from './lv'
import { et } from './et'
import { ga } from './ga'
import { mt } from './mt'
import { ca } from './ca'
import { eu } from './eu'
import { gl } from './gl'
import { is } from './is'
import { sr } from './sr'
import { bs } from './bs'
import { mk } from './mk'
import { sq } from './sq'
import { be } from './be'
import { lb } from './lb'
import { cy } from './cy'
import { tr } from './tr'

export const localeOverrides: Record<LocaleCode, Partial<Translations>> = {
  en: {},
  ru,
  de,
  fr,
  es,
  it,
  pt,
  nl,
  pl,
  uk,
  cs,
  ro,
  hu,
  el,
  sv,
  da,
  fi,
  no,
  bg,
  hr,
  sk,
  sl,
  lt,
  lv,
  et,
  ga,
  mt,
  ca,
  eu,
  gl,
  is,
  sr,
  bs,
  mk,
  sq,
  be,
  lb,
  cy,
  tr,
}

export function getTranslations(locale: LocaleCode): Translations {
  if (locale === 'en') return en
  return deepMerge(en, localeOverrides[locale])
}
