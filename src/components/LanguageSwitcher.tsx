import { useEffect, useId, useRef, useState } from 'react'
import { LOCALE_CODES, type LocaleCode } from '../i18n/types'
import { useI18n } from '../i18n/I18nContext'

export default function LanguageSwitcher() {
  const { locale, setLocale, t, localeLabels } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const selectLocale = (code: LocaleCode) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div
      ref={rootRef}
      className={`lang-switcher${open ? ' lang-switcher--open' : ''}`}
    >
      <button
        type="button"
        className="lang-switcher__trigger"
        aria-label={t.nav.language}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-switcher__value">{localeLabels[locale]}</span>
        <span className="lang-switcher__chevron" aria-hidden />
      </button>
      {open && (
        <ul
          id={listId}
          className="lang-switcher__menu"
          role="listbox"
          aria-label={t.nav.language}
        >
          {LOCALE_CODES.map((code) => (
            <li key={code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                className={`lang-switcher__option${
                  code === locale ? ' lang-switcher__option--active' : ''
                }`}
                onClick={() => selectLocale(code)}
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
