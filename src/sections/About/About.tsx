import { Section } from '../../components/Section/Section'
import { about } from '../../data/about'
import styles from './About.module.css'

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title={about.title}
      layout="split"
    >
      <div className={styles.prose}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
