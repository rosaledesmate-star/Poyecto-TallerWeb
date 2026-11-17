import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false)

  function cerrarMenu() {
    setAbierto(false)
  }

  // Cierra el menú con la tecla Escape
  useEffect(() => {
    if (!abierto) return

    function alPresionarTecla(e) {
      if (e.key === 'Escape') setAbierto(false)
    }

    document.addEventListener('keydown', alPresionarTecla)
    return () => document.removeEventListener('keydown', alPresionarTecla)
  }, [abierto])

  return (
    <header className="cabecera">
      <nav className="navbar-menu">

        <div className="logo">
          <Link to="/" aria-label="Transporte PROA - Inicio" onClick={cerrarMenu}>
            <img src="/logo.svg" alt="Logotipo de Transporte PROA" width="403" height="300" />
          </Link>
        </div>

        <button
          className={'boton-menu' + (abierto ? ' abierto' : '')}
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="menu-principal" className={'nav-links' + (abierto ? ' abierto' : '')}>
          <li><NavLink to="/" end onClick={cerrarMenu}>Inicio</NavLink></li>
          <li><NavLink to="/acerca-de" onClick={cerrarMenu}>Acerca de</NavLink></li>
          <li><NavLink to="/servicios" onClick={cerrarMenu}>Servicios</NavLink></li>
          <li><NavLink to="/contacto" onClick={cerrarMenu}>Contacto</NavLink></li>
        </ul>

      </nav>
    </header>
  )
}