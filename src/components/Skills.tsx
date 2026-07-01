import { profile } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

export default function Skills() {
  const { t } = useI18n()

  return (
    <section className="section" id="skills">
      <div className="section__header">
        <p className="eyebrow">{t.skills.eyebrow}</p>
        <h2 className="section__title">{t.skills.title}</h2>
      </div>
      <div className="skills">
        {profile.skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
