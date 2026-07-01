import type { MouseEvent } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { stripHashFromUrl } from '../utils/scroll'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import ScrollLink from './ScrollLink'

function scrollToTop(event: MouseEvent) {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  stripHashFromUrl()
}

export default function Navbar() {
  const { t } = useI18n()

  const navItems = [
    { to: 'about', label: t.nav.about },
    { to: 'skills', label: t.nav.skills },
    { to: 'projects', label: t.nav.projects },
    { to: 'contact', label: t.nav.contact },
  ]

  return (
    <header className="nav-shell">
      <div className="nav">
        <a href="/" className="nav__logo" onClick={scrollToTop}>
          <span className="nav__logo-mark">IK</span>
          <span className="nav__logo-text">Kolganov</span>
        </a>
        <nav className="nav__links" aria-label={t.nav.mainNav}>
          {navItems.map((item) => (
            <ScrollLink key={item.to} to={item.to} className="nav__link">
              {item.label}
            </ScrollLink>
          ))}
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="https://github.com/IMKolganov"
            className="nav__cta"
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.github}
          </a>
        </div>
      </div>
    </header>
  )
}
