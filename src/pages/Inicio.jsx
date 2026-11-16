import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../inicio.css'

export default function Inicio() {
  useEffect(() => {
    document.title = 'TRANSPORTE PROA'
  }, [])

  return (
  <div className="pagina-inicio">
    {/* Portada */}
    <section className="portada">
      <img
        src="/banner.png"
        alt="Camión con plataforma de Transporte PROA al atardecer"
        fetchPriority="high"
      />
      <small>Servicios de transporte de carga</small>
      <h1>Transportamos tu carga con seguridad y puntualidad</h1>
      <p>
        Brindamos soluciones de transporte con plataforma para empresas que buscan confianza,
        eficiencia y compromiso en cada traslado.
      </p>
      <Link className="boton claro" to="/contacto">Solicitar cotización</Link>
    </section>

      {/* Presentación de la empresa */}
      <section className="presentacion">
        <div className="presentacion-texto">
          <h2>Comprometidos con cada destino</h2>
          <p>
            En TRANSPORTE PROA trabajamos con compromiso y responsabilidad para brindar soluciones
            de transporte de carga con plataforma. Nuestra experiencia nos permite atender las
            necesidades de nuestros clientes, priorizando la seguridad, la puntualidad y el
            cumplimiento de cada servicio.
          </p>
          <Link className="boton" to="/acerca-de">Conocer la empresa</Link>
        </div>
        <img src="/acerca.png" alt="Imagen de la empresa Transporte PROA" loading="lazy" />
      </section>

      {/* Valores */}
      <section className="valores alt">
        <h2>Nuestros valores</h2>
        <article>
          <i className="fa-solid fa-handshake icono" aria-hidden="true"></i>
          <h3>Compromiso</h3>
          <p>Orientación al cumplimiento de las necesidades de cada cliente.</p>
        </article>
        <article>
          <i className="fa-solid fa-shield-halved icono" aria-hidden="true"></i>
          <h3>Seguridad</h3>
          <p>Compromiso con el cuidado de la carga durante la prestación de cada servicio.</p>
        </article>
        <article>
          <i className="fa-solid fa-clock icono" aria-hidden="true"></i>
          <h3>Eficiencia</h3>
          <p>Atención puntual y organizada de los horarios y compromisos acordados.</p>
        </article>
      </section>

      {/* Servicios */}
      <section className="servicios">
        <h2>Nuestros servicios</h2>
        <p>
          Ofrecemos servicios de transporte de carga con plataforma, orientados al traslado de
          materiales y mercancías compatibles con las características de nuestras unidades.
        </p>
        <Link className="boton" to="/servicios">Ver servicios</Link>
      </section>

      {/* Cobertura */}
      <section className="cobertura alt">
        <div className="cobertura-texto">
          <h2>Nuestra cobertura</h2>
          <p>
            Atendemos rutas en Lima, Cañete, Chincha, Pisco e Ica, brindando soluciones de
            transporte de carga.
          </p>
          <ul>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Lima</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Cañete</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Chincha</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Pisco</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Ica</li>
          </ul>
          <Link className="boton" to="/contacto">Consultar una ruta</Link>
        </div>
        <img
          src="/mapa.jpeg"
          alt="Mapa de la ruta de cobertura: Lima, Cañete, Chincha, Pisco e Ica"
          width="1312"
          height="816"
          loading="lazy"
        />
      </section>

      {/* Llamada final */}
      <section className="llamada">
        <h2>¿Necesitas transportar tu carga?</h2>
        <p>Contáctanos para consultar sobre nuestro servicio.</p>
        <Link className="boton claro" to="/contacto">Cotizar servicio</Link>
      </section>
    </div>
  )
}