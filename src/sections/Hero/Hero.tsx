import { Button } from '../../components/Button/Button'
import { profile } from '../../data/profile'
import styles from './Hero.module.css'

export function Hero() {
  const sources = profile.photo.sources
  const largest = sources[sources.length - 1]
  const srcSet = sources.map((source) => `${source.src} ${source.width}w`).join(', ')

  return (
    <section className={styles.hero} aria-labelledby="inicio-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {profile.role} · {profile.location}
          </p>
          <h1 id="inicio-title" className={styles.title}>
            {profile.name}
          </h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.availability}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability}
          </p>
          <div className={styles.actions}>
            <Button href="#proyectos">Ver proyectos</Button>
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
            height={750}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
