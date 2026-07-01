import { profile } from '../data/profile'
import type { ProfileLinkKey } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

const icons: Record<string, string> = {
  github: '⌘',
  linkedin: 'in',
  instagram: 'IG',
  twitter: 'X',
  facebook: 'f',
  globe: '↗',
  coffee: '☕',
}

export default function Contact() {
  const { t } = useI18n()

  return (
    <section className="section" id="contact">
      <div className="contact card-glass">
        <div className="contact__text">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="contact__lead">{t.contact.lead}</p>
        </div>
        <div className="contact__links">
          {profile.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link__icon" aria-hidden="true">
                {icons[link.icon]}
              </span>
              <span>{t.contact.links[link.key as ProfileLinkKey]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
