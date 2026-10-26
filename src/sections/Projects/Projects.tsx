import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Section } from '../../components/Section/Section'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Cuatro proyectos para enseñar lo que sé hacer"
      lead="De una app full-stack a un juego en canvas: qué problema resolvía cada uno, qué hice yo y qué aprendí."
    >
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
