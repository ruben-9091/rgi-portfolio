import { Button } from '../../components/Button/Button'
import TechText from '../../components/TechText/TechText'
import { WebThreadsBackground } from '../../components/WebThreadsBackground/WebThreadsBackground'
import { profile } from '../../data/profile'
import styles from './Hero.module.css'

export function Hero() {
  const sources = profile.photo.sources
  const largest = sources[sources.length - 1]
  const srcSet = sources.map((source) => `${source.src} ${source.width}w`).join(', ')

  return (
    <section className={styles.hero} aria-labelledby="inicio-title">
      <WebThreadsBackground />
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {profile.role} · {profile.location}
          </p>
          <h1 id="inicio-title" className={styles.title}>
            <span className="sr-only">{profile.name}</span>
            <span className={styles.wordmark} aria-hidden="true">
              <TechText
                text={profile.name}
                fontWeight={700}
                fontSize={120}
                letterSpacing={-0.04}
                align="left"
                reveal="letter"
                specks={12}
                intro="type"
                introDuration={1.6}
                labels={false}
                guides={false}
              />
            </span>
          </h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.availability}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability}
          </p>
          <div className={styles.actions}>
            <Button href="#proyectos">Ver proyectos</Button>
            <Button href={profile.cv} variant="secondary" download>
              Descargar CV
            </Button>
            <Button href="#contacto" variant="secondary">
              Hablemos
            </Button>
          </div>
        </div>

        <div className={styles.photoFrame}>
          <img
            className={styles.photo}
            src={largest.src}
            srcSet={srcSet}
            sizes="(min-width: 56rem) 34rem, 90vw"
            alt={profile.photo.alt}
            width={largest.width}
            height={largest.height}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
