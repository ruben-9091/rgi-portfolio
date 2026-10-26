import { Section } from '../../components/Section/Section'
import { skillGroups } from '../../data/skills'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Tecnología y gestión de equipos"
      lead="Lo que uso para construir interfaces, lo que he trabajado en el backend y lo que traigo del retail."
      tone="muted"
    >
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.id} className={styles.card}>
            <h3 className={styles.title}>{group.title}</h3>
            <p className={styles.summary}>{group.summary}</p>
            <ul className={styles.tags} aria-label={`Habilidades de ${group.title}`}>
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
  )
}
