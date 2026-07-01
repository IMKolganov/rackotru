import type { MouseEvent } from 'react'
import { useI18n } from '../i18n/I18nContext'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

function scrollToTop(event: MouseEvent) {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }
}

export default function Navbar() {
  const { t } = useI18n()

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="nav">
      <a href="/" className="nav__logo" onClick={scrollToTop}>
        <span className="nav__logo-mark">IK</span>
        <span className="nav__logo-text">Kolganov</span>
      </a>
      <nav className="nav__links" aria-label={t.nav.mainNav}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav__link">
            {item.label}
          </a>
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
    </header>
  )
}
