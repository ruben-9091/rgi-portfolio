import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile } from '../../data/profile'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  /* En una ficha de proyecto, "Proyectos" es la sección de la que cuelga */
  const onProjectPage = pathname.startsWith('/proyectos/')

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} to="/" onClick={closeMenu}>
          <span className={styles.brandMark} aria-hidden="true">
            RGI
          </span>
          <span className={styles.brandName}>{profile.name}</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          data-open={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className={styles.toggleBar} aria-hidden="true" />
          <span className={styles.toggleBar} aria-hidden="true" />
          <span className={styles.toggleBar} aria-hidden="true" />
        </button>

        <nav
          id="menu-principal"
          className={styles.nav}
          aria-label="Principal"
          data-open={open}
        >
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  className={styles.link}
                  to={`/#${item.id}`}
                  onClick={closeMenu}
                  aria-current={
                    onProjectPage && item.id === 'proyectos' ? 'true' : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
