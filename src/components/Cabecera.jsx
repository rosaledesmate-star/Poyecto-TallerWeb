import { Link, NavLink } from 'react-router-dom'

export default function Cabecera() {
  return (
    <header className="cabecera">
      <nav className="navbar-menu">

        <div className="logo">
          <Link to="/" aria-label="Transporte PROA - Inicio">
            <img src="/logo.svg" alt="Logotipo de Transporte PROA" width="403" height="300" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/acerca-de">Acerca de</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>

      </nav>
    </header>
  )
}