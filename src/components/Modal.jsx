import { useEffect, useRef } from 'react'
import '../modal.css'

export default function Modal({ abierto, onCerrar, titulo, children }) {
  const botonCerrar = useRef(null)

  // Al abrir: bloquea el scroll de la página y lleva el foco al botón de cerrar
  useEffect(() => {
    if (!abierto) return

    document.body.classList.add('modal-abierto')
    botonCerrar.current.focus()

    return () => document.body.classList.remove('modal-abierto')
  }, [abierto])

  // Cierra con la tecla Escape
  useEffect(() => {
    if (!abierto) return

    function alPresionarTecla(e) {
      if (e.key === 'Escape') onCerrar()
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