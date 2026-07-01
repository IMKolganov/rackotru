import { profile } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

export default function About() {
  const { t, format } = useI18n()

  return (
    <section className="section" id="about">
      <div className="section__header">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h2 className="section__title">{t.about.title}</h2>
      </div>
      <div className="about">
        <p className="about__lead">
          {format(t.about.lead, {
            location: profile.location,
            company: profile.company,
          })}
        </p>
        <ul className="about__list">
          {t.about.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
