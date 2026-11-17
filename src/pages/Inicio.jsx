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
        <h1>Movilizamos tu carga con seguridad, eficiencia y puntualidad</h1>
        <p>Transporte terrestre de carga pesada con soluciones confiables para cada destino.</p>
        <Link className="boton claro" to="/contacto">Solicitar cotización</Link>
      </section>

      {/* Presentación de la empresa */}
      <section className="presentacion">
        <div className="presentacion-texto">
          <h2>Experiencia y compromiso en cada destino</h2>
          <p>
            Desde 2008, en Transporte Proa S.A.C. brindamos soluciones de transporte terrestre de
            carga, priorizando la seguridad, eficiencia y puntualidad. Trabajamos con
            transportistas asociados para ofrecer un servicio confiable y adaptado a las
            necesidades de nuestros clientes.
          </p>
          <Link className="boton" to="/acerca-de">Conocer la empresa</Link>
        </div>
        <img src="/presentacion.jpeg" alt="Imagen de la empresa Transporte PROA" loading="lazy" />
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
        <div>
          <h2>¿Listo para llevar tu carga a su destino?</h2>
          <p>Conoce cómo trabajamos y descubre nuestra propuesta de transporte.</p>
          <Link className="boton" to="/servicios">DESCUBRE NUESTRO SERVICIO</Link>
        </div>
        <img src="/22.jpeg" alt="Transporte de carga" />
      </section>

      {/* Cobertura */}
      <section className="cobertura alt">
        <div className="cobertura-texto">
          <h2>Llegamos donde tu carga lo necesita.</h2>
          <p>
            Nuestra cobertura comprende importantes localidades del corredor sur de la costa
            peruana, permitiéndonos atender las necesidades de transporte de nuestros clientes en
            diferentes destinos.
          </p>
          <ul>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Lima</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Cañete</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Chincha</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Pisco</li>
            <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Ica</li>
          </ul>
          <Link className="boton" to="/contacto">CONSULTAR UNA RUTA</Link>
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
        <img src="/acerca.png" alt="" />
        <div>
          <h2>¿Necesitas transportar tu carga?</h2>
          <p>Contáctanos para consultar sobre nuestro servicio.</p>
          <a
            className="boton"
            href="https://wa.me/51996436009?text=Hola%2C%20Transporte%20PROA%0A%0ADeseo%20solicitar%20una%20cotizaci%C3%B3n%20de%20transporte%20de%20carga.%0A%0APunto%20de%20recojo%3A%0APunto%20de%20destino%3A%0ATipo%20de%20carga%3A%0APeso%20aproximado%20en%20toneladas%3A%0AFecha%20del%20servicio%3A%0AInformaci%C3%B3n%20adicional%3A%0A%0AQuedo%20atento%20a%20su%20respuesta.%20Muchas%20gracias."
            target="_blank"
            rel="noopener noreferrer"
          >
            COTIZA HOY!
          </a>
        </div>
      </section>
    </div>
  )
}