import { Link } from 'react-router-dom'
import type { Project } from '../../data/types'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, name, tagline, role, stack, image, repo, demo } = project
  const projectPath = `/proyectos/${slug}`

  return (
    <article className={styles.card}>
      <Link
        className={styles.media}
        to={projectPath}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          className={styles.image}
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className={styles.body}>
        <p className={styles.role}>{role}</p>
        <h3 className={styles.title}>
          <Link className={styles.titleLink} to={projectPath}>
            {name}
          </Link>
        </h3>
        <p className={styles.tagline}>{tagline}</p>

        <ul className={styles.stack} aria-label={`Tecnologías de ${name}`}>
          {stack.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <Link className={styles.link} to={projectPath}>
            Ver ficha
          </Link>
          {demo ? (
            <a
              className={styles.link}
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Ver la demo de ${name} en una pestaña nueva`}
            >
              Ver demo
            </a>
          ) : null}
          {repo ? (
            <a
              className={styles.link}
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Ver el código de ${name} en GitHub, en una pestaña nueva`}
            >
              Código
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
