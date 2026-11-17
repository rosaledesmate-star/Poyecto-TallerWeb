import { useEffect, useRef } from 'react'
import '../modal.css'

const ENFOCABLES = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function Modal({ abierto, onCerrar, titulo, children }) {
  const caja = useRef(null)
  const botonCerrar = useRef(null)

  // Al abrir: guarda quien tenia el foco, bloquea el scroll y enfoca el botón de cerrar
  // Al cerrar: devuelve el scroll y el foco al elemento que abrio el modal
  useEffect(() => {
    if (!abierto) return

    const elementoPrevio = document.activeElement
    document.body.classList.add('modal-abierto')
    botonCerrar.current.focus()

    return () => {
      document.body.classList.remove('modal-abierto')
      if (elementoPrevio) elementoPrevio.focus()
    }
  }, [abierto])

  // Teclado: Escape cierra y Tab no sale del modal (focus trapping)
  useEffect(() => {
    if (!abierto) return

    function alPresionarTecla(e) {
      if (e.key === 'Escape') {
        onCerrar()
        return
      }

      if (e.key !== 'Tab') return

      const enfocables = caja.current.querySelectorAll(ENFOCABLES)
      const primero = enfocables[0]
      const ultimo = enfocables[enfocables.length - 1]

      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault()
        ultimo.focus()
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault()
        primero.focus()
      }
    }

    document.addEventListener('keydown', alPresionarTecla)
    return () => document.removeEventListener('keydown', alPresionarTecla)
  }, [abierto, onCerrar])

  if (!abierto) return null

  return (
    // Clic en el fondo oscuro: cierra
    <div className="modal-fondo" onClick={onCerrar}>
      {/* Clic dentro de la caja: no cierra */}
      <div
        ref={caja}
        className="modal-caja"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={botonCerrar}
          className="modal-cerrar"
          type="button"
          aria-label="Cerrar ventana"
          onClick={onCerrar}
        >
          ×
        </button>
        <h2 id="modal-titulo">{titulo}</h2>
        {children}
      </div>
    </div>
  )
}