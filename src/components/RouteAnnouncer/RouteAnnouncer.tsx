import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageMeta } from '../../lib/pageMeta'

/**
 * Anuncia la página nueva a los lectores de pantalla y lleva el foco al
 * contenido, que es lo que hace un cambio de página de verdad.
 *
 * No actúa en la carga inicial ni cuando la navegación apunta a un ancla:
 * en ese caso el destino es una sección y el scroll lo gestiona ScrollToHash.
 */
export function RouteAnnouncer() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const pathChanged = previousPath.current !== pathname
    previousPath.current = pathname
    if (!pathChanged) return

    setMessage(getPageMeta(pathname).title)
    if (hash) return

    document.getElementById('contenido')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return (
    <div className="sr-only" role="status">
      {message}
    </div>
  )
}
