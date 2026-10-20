import { Section } from '../../components/Section/Section'
import { experience } from '../../data/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia"
      title="Once años de retail y una formación full-stack"
      tone="muted"
    >
      <ol className={styles.timeline}>
        {experience.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.meta}>
              <span className={styles.badge}>{item.kind}</span>
              {item.period ? (
                <span className={styles.period}>{item.period}</span>
              ) : null}
            </div>

            <div className={styles.body}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.organisation}>{item.organisation}</p>
              <p className={styles.summary}>{item.summary}</p>
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
