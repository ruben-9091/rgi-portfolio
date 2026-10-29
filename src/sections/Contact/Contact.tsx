import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="¿Hablamos?"
      lead="Estoy buscando mi siguiente paso como Front-End. Si crees que encajo en tu equipo, escríbeme."
      layout="split"
    >
      <div className={styles.content}>
        <div className={styles.actions}>
          <Button href={`mailto:${profile.email}`}>Escríbeme</Button>
          <Button href={profile.cv} variant="secondary" download>
            Descargar CV
          </Button>
        </div>

        <ul className={styles.list}>
          <li>
            <a className={styles.item} href={`mailto:${profile.email}`}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{profile.email}</span>
            </a>
          </li>
          <li>
            <a
              className={styles.item}
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={styles.label}>GitHub</span>
              <span className={styles.value}>github.com/ruben-9091</span>
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </li>
          <li>
            <a
              className={styles.item}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={styles.label}>LinkedIn</span>
              <span className={styles.value}>linkedin.com/in/ruben-gomez-dev</span>
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}
