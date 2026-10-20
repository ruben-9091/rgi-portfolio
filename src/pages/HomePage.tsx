import { Section } from '../components/Section/Section'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { Hero } from '../sections/Hero/Hero'
import styles from './HomePage.module.css'

/**
 * Esqueleto de la Fase 1: todas las secciones existen y la navegación
 * funciona. Los pasos 2 a 4 sustituyen estas listas por los componentes
 * definitivos (línea de tiempo, tarjetas, grupos de habilidades y contacto).
 */
export function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="sobre-mi"
        eyebrow="Sobre mí"
        title="Del retail al código, sin borrar el camino"
        lead={profile.intro}
      />

      <Section
        id="experiencia"
        eyebrow="Experiencia"
        title="Once años de retail y una formación full-stack"
        tone="muted"
      >
        <ul className={styles.list}>
          {experience.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemHead}>
                <h3 className={styles.itemTitle}>
                  {item.role} · {item.organisation}
                </h3>
                <p className={styles.itemPeriod}>
                  {item.kind} · {item.period}
                </p>
              </div>
              <p className={styles.itemText}>{item.summary}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="proyectos"
        eyebrow="Proyectos"
        title="Cuatro proyectos para enseñar lo que sé hacer"
      >
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.slug} className={styles.card}>
              <p className={styles.cardMeta}>{project.role}</p>
              <h3 className={styles.itemTitle}>{project.name}</h3>
              <p className={styles.itemText}>{project.tagline}</p>
              <ul className={styles.tags}>
                {project.stack.map((tech) => (
                  <li key={tech} className={styles.tag}>
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="habilidades"
        eyebrow="Habilidades"
        title="Tecnología y gestión de equipos"
        tone="muted"
      >
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.id} className={styles.card}>
              <h3 className={styles.itemTitle}>{group.title}</h3>
              <p className={styles.cardMeta}>{group.summary}</p>
              <ul className={styles.tags}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.tag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="contacto"
        eyebrow="Contacto"
        title="¿Hablamos?"
        lead="Estoy buscando mi siguiente paso como Front-End. Si crees que encajo en tu equipo, escríbeme."
      >
        <ul className={styles.contact}>
          <li>
            <a className={styles.contactLink} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li>
            <a
              className={styles.contactLink}
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              github.com/ruben-9091
            </a>
          </li>
          <li>
            <a
              className={styles.contactLink}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              linkedin.com/in/ruben-gomez-dev
            </a>
          </li>
        </ul>
      </Section>
    </>
  )
}
