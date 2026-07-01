import { heroCards, profile } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

export default function Hero() {
  const { t, format } = useI18n()

  return (
    <section className="hero section" id="top">
      <div className="hero__content">
        <p className="eyebrow">@{profile.handle}</p>
        <h1 className="hero__title">
          {format(t.hero.greeting, { name: t.hero.name })}
          <br />
          <span className="gradient-text">{t.hero.tagline}</span>
        </h1>
        <p className="hero__bio">{t.hero.bio}</p>
        <div className="hero__meta">
          <span className="pill">{profile.company}</span>
          <span className="pill">{profile.location}</span>
        </div>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            {t.hero.viewProjects}
          </a>
          <a href="#contact" className="btn btn--ghost">
            {t.hero.getInTouch}
          </a>
        </div>
        <dl className="hero__stats">
          <div>
            <dt>{t.hero.repos}</dt>
            <dd>{profile.stats.repos}</dd>
          </div>
          <div>
            <dt>{t.hero.followers}</dt>
            <dd>{profile.stats.followers}</dd>
          </div>
          <div>
            <dt>{t.hero.following}</dt>
            <dd>{profile.stats.following}</dd>
          </div>
        </dl>
      </div>
      <div className="hero__visual">
        <div className="avatar-ring">
          <img
            src={profile.avatar}
            alt={profile.fullName}
            className="avatar"
            width={280}
            height={280}
          />
        </div>
        {heroCards.map((card, index) => (
          <div
            key={card.label}
            className={`hero__card hero__card--${card.position}`}
            style={{ animationDelay: `${-index * 1.2}s` }}
          >
            <span className="mono">{card.label}</span>
            {card.active && <span className="hero__card-dot" />}
          </div>
        ))}
        <div className="hero__card hero__card--bottom-left" style={{ animationDelay: '-3s' }}>
          <span className="mono">{t.hero.cardStack}</span>
        </div>
      </div>
    </section>
  )
}
