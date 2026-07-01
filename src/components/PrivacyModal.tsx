import { useEffect, useRef } from 'react'
import { useConsent } from '../cookies/ConsentContext'
import { useI18n } from '../i18n/I18nContext'

export default function PrivacyModal() {
  const { privacyOpen, closePrivacy } = useConsent()
  const { t } = useI18n()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!privacyOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePrivacy()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [closePrivacy, privacyOpen])

  if (!privacyOpen) return null

  const sections = [
    t.privacy.sections.controller,
    t.privacy.sections.data,
    t.privacy.sections.cookies,
    t.privacy.sections.thirdParty,
    t.privacy.sections.rights,
    t.privacy.sections.contact,
  ]

  return (
    <div className="privacy-modal" role="presentation" onClick={closePrivacy}>
      <div
        ref={dialogRef}
        className="privacy-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="privacy-modal__header">
          <div>
            <h2 id="privacy-title" className="privacy-modal__title">
              {t.privacy.title}
            </h2>
            <p className="privacy-modal__updated">{t.privacy.updated}</p>
          </div>
          <button
            type="button"
            className="privacy-modal__close"
            onClick={closePrivacy}
            aria-label={t.privacy.close}
          >
            ×
          </button>
        </header>
        <div className="privacy-modal__body">
          {sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
        <footer className="privacy-modal__footer">
          <button type="button" className="btn btn--primary" onClick={closePrivacy}>
            {t.privacy.close}
          </button>
        </footer>
      </div>
    </div>
  )
}
