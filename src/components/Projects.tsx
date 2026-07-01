import type { Project } from '../data/profile'
import { featuredProjects, otherProjects, profile } from '../data/profile'
import { useI18n } from '../i18n/I18nContext'

function ProjectCard({ project }: { project: Project }) {
  const { t, format } = useI18n()
  const description =
    t.projects.items[project.name] ?? project.name

  return (
    <a
      href={project.url}
      className="project-card"
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-card__top">
        <h3 className="project-card__name">{project.name}</h3>
        <span
          className="project-card__stars"
          aria-label={format(t.projects.stars, { count: project.stars })}
        >
          ★ {project.stars}
        </span>
      </div>
      <p className="project-card__desc">{description}</p>
      <span className="project-card__lang mono">{project.language}</span>
    </a>
  )
}

export default function Projects() {
  const { t, format } = useI18n()

  return (
    <section className="section" id="projects">
      <div className="section__header">
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2 className="section__title">{t.projects.title}</h2>
        <p className="section__subtitle">{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="section__header section__header--spaced">
        <h3 className="section__title section__title--sm">{t.projects.moreTitle}</h3>
      </div>
      <div className="projects-grid projects-grid--compact">
        {otherProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="projects-more">
        <a
          href={profile.links[0].url}
          className="btn btn--ghost"
          target="_blank"
          rel="noreferrer"
        >
          {format(t.projects.browseAll, { count: profile.stats.repos })}
        </a>
      </div>
    </section>
  )
}
