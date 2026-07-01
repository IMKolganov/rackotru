import { profile } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

function formatCopyrightYears(sinceYear: number): string {
  const currentYear = new Date().getFullYear()
  return sinceYear === currentYear ? String(currentYear) : `${sinceYear}–${currentYear}`
}

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <p>
        © {formatCopyrightYears(profile.siteSinceYear)} {profile.fullName}
      </p>
      <a href="https://github.com/IMKolganov/rackotru" target="_blank" rel="noreferrer">
        {t.footer.source}
      </a>
    </footer>
  )
}
