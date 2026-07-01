import type { LocaleCode } from '../types'
import type { PartialTranslations } from './partial'
import { ru } from './ru'
import { de, fr, es, it, pt, nl } from './western'
import { pl, uk, cs, ro, hu, el, bg, hr, sk, sl } from './central'
import { sv, da, fi, no, lt, lv, et } from './northern'
import { ga, mt, ca, eu, gl, is, sr, bs, mk, sq, be, lb, cy, tr } from './other'

export const localeOverrides: Record<LocaleCode, PartialTranslations> = {
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
