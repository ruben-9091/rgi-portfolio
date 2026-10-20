import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.meta}>
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className={styles.links}>
          <li>
            <a className={styles.link} href={`mailto:${profile.email}`}>
              Email
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <p className={styles.note}>
          © {year} · Hecho con React, TypeScript y Vite.
        </p>
      </div>
    </footer>
  )
}
