import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ScrollToHash } from '../components/ScrollToHash/ScrollToHash'
import { SkipLink } from '../components/SkipLink/SkipLink'
import styles from './SiteLayout.module.css'

export function SiteLayout() {
  return (
    <div className={styles.shell}>
      <SkipLink />
      <Header />
      <main id="contenido" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToHash />
    </div>
  )
}
