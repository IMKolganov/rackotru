import { useConsent } from '../cookies/ConsentContext'
import { useI18n } from '../i18n/I18nContext'

export default function CookieBanner() {
  const { bannerVisible, accept, reject, openPrivacy } = useConsent()
  const { t } = useI18n()

  if (!bannerVisible) return null

  return (
    <aside className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title">
      <div className="cookie-banner__content">
        <p id="cookie-banner-title" className="cookie-banner__text">
          {t.cookies.banner}
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn--ghost btn--sm" onClick={openPrivacy}>
            {t.cookies.privacy}
          </button>
          <button type="button" className="btn btn--ghost btn--sm" onClick={reject}>
            {t.cookies.reject}
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={accept}>
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </aside>
  )
}
