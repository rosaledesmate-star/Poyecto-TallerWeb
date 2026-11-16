import { useEffect } from 'react'
import '../servicio.css'

export default function Servicios() {
  useEffect(() => {
    document.title = 'Servicios | TRANSPORTE PROA'
  }, [])

  return (
    <>
      <section className="fondo-presentacion">
        <img src="/ImagenBannerServicios.png" alt="Fondo de Servicios" />
        <div className="texto-presentacion">
          <h1>Servicios</h1>
          <p>Seguridad y puntualidad en cada destino</p>
        </div>
      </section>

      <section className="intro-servicios">
        <p className="etiqueta">Carga pesada en Lima y provincias</p>
        <h2>Soluciones de Transporte de Carga Pesada</h2>
        <p className="descripcion">
          Brindamos soluciones eficientes de transporte terrestre de carga pesada en Lima y
          provincias. Atendemos a empresas y personas particulares mediante viajes programados,
          con capacidad de traslado de hasta 31 toneladas por unidad.
        </p>
      </section>

      {/* Detalle de los servicios principales */}
      <section className="lista-servicios">
        <h2>Tipos de Carga que Transportamos</h2>

        {/* Servicio 1 */}
        <article className="servicio">
          <img src="/icono1Servicios.png" alt="Icono de Transporte de Acero y Hierro" />
          <div className="servicio-texto">
            <header>
              <span>1</span>
              <h3>Transporte de Acero y Hierro</h3>
            </header>
            <p>
              Servicio especializado en el traslado pesado de perfiles, tubos, bobinas y varillas
              de acero o hierro. Operamos con clientes del sector metalmecánico como Aceros
              Arequipa desde 2008.
            </p>
            <ul className="puntos">
              <li>
                <i className="fa-solid fa-truck icono"></i>
                <h4>Hasta 31 t</h4>
                <p>Plataforma para carga pesada.</p>
              </li>
            </ul>
          </div>
        </article>

        {/* Servicio 2 */}
        <article className="servicio">
          <img src="/icono2Servicios.png" alt="Icono de Transporte de Materiales de Construcción" />
          <div className="servicio-texto">
            <header>
              <span>2</span>
              <h3>Transporte de Materiales de Construcción</h3>
            </header>
            <p>
              Traslado eficiente y seguro de estructuras, prefabricados e insumos pesados para el
              sector construcción en Lima, Lurín, Sur Chico y Callao mediante viajes programados.
            </p>
            <ul className="puntos">
              <li>
                <i className="fa-solid fa-location-dot icono"></i>
                <h4>Cobertura</h4>
                <p>Lima, Lurín, Sur Chico y Callao.</p>
              </li>
            </ul>
          </div>
        </article>

        {/* Servicio 3 */}
        <article className="servicio">
          <img src="/icono3Servicios.jpg" alt="Icono de Transporte de Materias Primas" />
          <div className="servicio-texto">
            <header>
              <span>3</span>
              <h3>Transporte de Materias Primas</h3>
            </header>
            <p>
              Soluciones de logística para abastecimiento de industrias y el sector agrícola.
              Movilizamos insumos a granel o empaquetados aptos para plataforma hasta con 31
              toneladas de capacidad.
            </p>
            <ul className="puntos">
              <li>
                <i className="fa-solid fa-layer-group icono"></i>
                <h4>Industria y agro</h4>
                <p>Abastecemos a industrias y al sector agrícola.</p>
              </li>
            </ul>
          </div>
        </article>

        {/* Servicio 4 */}
        <article className="servicio">
          <img src="/icono4Servicios.jpg" alt="Icono de Transporte de Chatarra" />
          <div className="servicio-texto">
            <header>
              <span>4</span>
              <h3>Transporte de Chatarra</h3>
            </header>
            <p>
              Servicio orientado al reciclaje industrial y traslado de residuos metálicos pesados
              desde centros de acopio o plantas industriales hacia fundiciones principales en Ica,
              Pisco y Callao.
            </p>
            <ul className="puntos">
              <li>
                <i className="fa-solid fa-location-dot icono"></i>
                <h4>Fundiciones</h4>
                <p>Ica, Pisco y Callao.</p>
              </li>
            </ul>
          </div>
        </article>

        {/* Servicio 5 */}
        <article className="servicio">
          <img src="/icono5Servicios.jpg" alt="Icono de Otros Productos y Materiales para Plataforma" />
          <div className="servicio-texto">
            <header>
              <span>5</span>
              <h3>Otros Productos y Materiales para Plataforma</h3>
            </header>
            <p>
              Acondicionamos nuestros tractos con plataforma para cualquier tipo de carga pesada
              diversa que requiera amarre de seguridad, monitoreo GPS y checklist preventivo antes
              de cada viaje.
            </p>
            <ul className="puntos">
              <li>
                <i className="fa-solid fa-lock icono"></i>
                <h4>Amarre de seguridad</h4>
                <p>Carga firme y sin movimientos durante todo el viaje.</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  )
}