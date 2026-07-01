import { LOCALE_CODES } from '../i18n/types'
import { useI18n } from '../i18n/I18nContext'

export default function LanguageSwitcher() {
  const { locale, setLocale, t, localeLabels } = useI18n()

  return (
    <label className="lang-switcher">
      <span className="visually-hidden">{t.nav.language}</span>
      <select
        className="lang-switcher__select"
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        aria-label={t.nav.language}
      >
        {LOCALE_CODES.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  )
}
