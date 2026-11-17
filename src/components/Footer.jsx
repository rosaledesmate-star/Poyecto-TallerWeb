import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="contenedorfooter">

        <div className="contenedor logo-footer">
          <Link className="logotipo-pie" to="/">
            <img src="/logo.svg" alt="Logotipo de Transporte PROA" width="300" height="90" loading="lazy" />
          </Link>
          <p>Seguridad y puntualidad en cada destino.</p>
        </div>

        <div className="contenedor navegacion">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca-de">Acerca de</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="contenedor contacto">
          <h3>Contacto</h3>
          <p>trans_proa@hotmail.com</p>
          <p>Lunes a sábado, de 8:00 a. m. a 6:00 p. m.</p>
        </div>

      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} TRANSPORTE PROA S.A.C. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}