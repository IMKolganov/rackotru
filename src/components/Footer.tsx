import { profile } from '../data/profile'
import { useConsent } from '../cookies/ConsentContext'
import { useI18n } from '../i18n/I18nContext'

function formatCopyrightYears(sinceYear: number): string {
  const currentYear = new Date().getFullYear()
  return sinceYear === currentYear ? String(currentYear) : `${sinceYear}–${currentYear}`
}

export default function Footer() {
  const { t } = useI18n()
  const { openPrivacy } = useConsent()

  return (
    <footer className="footer">
      <p>
        © {formatCopyrightYears(profile.siteSinceYear)} {profile.fullName}
      </p>
      <div className="footer__links">
        <button type="button" className="footer__link" onClick={openPrivacy}>
          {t.footer.privacy}
        </button>
        <a href="https://github.com/IMKolganov/rackotru" target="_blank" rel="noreferrer">
          {t.footer.source}
        </a>
      </div>
    </footer>
  )
}
