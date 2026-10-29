import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { RouteAnnouncer } from '../components/RouteAnnouncer/RouteAnnouncer'
import { ScrollToHash } from '../components/ScrollToHash/ScrollToHash'
import { SkipLink } from '../components/SkipLink/SkipLink'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './SiteLayout.module.css'

export function SiteLayout() {
  usePageMeta()

  return (
    <div className={styles.shell}>
      <SkipLink />
      <RouteAnnouncer />
      <Header />
      <main id="contenido" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToHash />
    </div>
  )
}
