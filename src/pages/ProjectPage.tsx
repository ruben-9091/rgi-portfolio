import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { absoluteUrl, hasSiteUrl } from '../lib/site'
import { NotFoundPage } from './NotFoundPage'
import styles from './ProjectPage.module.css'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    about: project.stack,
    author: { '@type': 'Person', name: profile.name },
    ...(project.demo ? { url: project.demo } : {}),
    ...(hasSiteUrl ? { mainEntityOfPage: absoluteUrl(`/proyectos/${project.slug}`) } : {}),
  }

  return (
    <article className={styles.page} aria-labelledby="project-title">
      <div className="container">
        <Link className={styles.back} to="/#proyectos">
          ← Volver a proyectos
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>{project.role}</p>
          <h1 id="project-title" className={styles.title}>
            {project.name}
          </h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <ul
            className={styles.stack}
            aria-label={`Tecnologías de ${project.name}`}
          >
            {project.stack.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>

          {project.demo || project.repo ? (
            <div className={styles.actions}>
              {project.demo ? (
                <Button href={project.demo} external>
                  Ver demo
                </Button>
              ) : null}
              {project.repo ? (
                <Button href={project.repo} variant="secondary" external>
                  Ver código
                </Button>
              ) : null}
            </div>
          ) : null}
        </header>

        <img
          className={styles.cover}
          src={project.image.src}
          srcSet={project.image.sources
            .map((source) => `${source.src} ${source.width}w`)
            .join(', ')}
          sizes="(min-width: 72rem) 63rem, 100vw"
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          decoding="async"
        />

        <div className={styles.content}>
          <section className={styles.block} aria-labelledby="project-description">
            <h2 id="project-description" className={styles.blockTitle}>
              El proyecto
            </h2>
            <p className={styles.text}>{project.description}</p>
          </section>

          <section className={styles.block} aria-labelledby="project-highlights">
            <h2 id="project-highlights" className={styles.blockTitle}>
              Qué hice
            </h2>
            <ul className={styles.list}>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block} aria-labelledby="project-learnings">
            <h2 id="project-learnings" className={styles.blockTitle}>
              Qué aprendí
            </h2>
            <ul className={styles.list}>
              {project.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </section>
        </div>

        <nav className={styles.more} aria-label="Otros proyectos">
          <h2 className={styles.moreTitle}>Otros proyectos</h2>
          <ul className={styles.moreList}>
            {otherProjects.map((item) => (
              <li key={item.slug}>
                <Link to={`/proyectos/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </div>
    </article>
  )
}
