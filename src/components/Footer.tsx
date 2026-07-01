import { profile } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {profile.fullName} · {t.footer.builtWith}
      </p>
      <a href="https://github.com/IMKolganov/rackotru" target="_blank" rel="noreferrer">
        {t.footer.source}
      </a>
    </footer>
  )
}
