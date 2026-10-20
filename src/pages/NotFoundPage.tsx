import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <section className={styles.page} aria-labelledby="notfound-title">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Error 404</p>
        <h1 id="notfound-title" className={styles.title}>
          Esta página no existe
        </h1>
        <p className={styles.text}>
          Puede que el enlace esté mal escrito o que la página haya cambiado de
          sitio.
        </p>
        <Link className={styles.link} to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
