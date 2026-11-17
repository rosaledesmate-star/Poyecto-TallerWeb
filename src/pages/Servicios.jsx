import { useEffect } from 'react'
import '../servicio.css'

const servicios = [
  {
    numero: 1,
    imagen: '/icono1Servicios.png',
    alt: 'Icono de Transporte de Acero y Hierro',
    titulo: 'Transporte de Acero y Hierro',
    descripcion:
      'Servicio especializado en el traslado pesado de perfiles, tubos, bobinas y varillas de acero o hierro. Operamos con clientes del sector metalmecánico como Aceros Arequipa desde 2008.',
    icono: 'fa-truck',
    puntoTitulo: 'Hasta 31 t',
    puntoTexto: 'Plataforma para carga pesada.',
  },
  {
    numero: 2,
    imagen: '/icono2Servicios.png',
    alt: 'Icono de Transporte de Materiales de Construcción',
    titulo: 'Transporte de Materiales de Construcción',
    descripcion:
      'Traslado eficiente y seguro de estructuras, prefabricados e insumos pesados para el sector construcción en Lima, Lurín, Sur Chico y Callao mediante viajes programados.',
    icono: 'fa-location-dot',
    puntoTitulo: 'Cobertura',
    puntoTexto: 'Lima, Lurín, Sur Chico y Callao.',
  },
  {
    numero: 3,
    imagen: '/icono3Servicios.jpg',
    alt: 'Icono de Transporte de Materias Primas',
    titulo: 'Transporte de Materias Primas',
    descripcion:
      'Soluciones de logística para abastecimiento de industrias y el sector agrícola. Movilizamos insumos a granel o empaquetados aptos para plataforma hasta con 31 toneladas de capacidad.',
    icono: 'fa-layer-group',
    puntoTitulo: 'Industria y agro',
    puntoTexto: 'Abastecemos a industrias y al sector agrícola.',
  },
  {
    numero: 4,
    imagen: '/icono4Servicios.jpg',
    alt: 'Icono de Transporte de Chatarra',
    titulo: 'Transporte de Chatarra',
    descripcion:
      'Servicio orientado al reciclaje industrial y traslado de residuos metálicos pesados desde centros de acopio o plantas industriales hacia fundiciones principales en Ica, Pisco y Callao.',
    icono: 'fa-location-dot',
    puntoTitulo: 'Fundiciones',
    puntoTexto: 'Ica, Pisco y Callao.',
  },
  {
    numero: 5,
    imagen: '/icono5Servicios.jpg',
    alt: 'Icono de Otros Productos y Materiales para Plataforma',
    titulo: 'Otros Productos y Materiales para Plataforma',
    descripcion:
      'Acondicionamos nuestros tractos con plataforma para cualquier tipo de carga pesada diversa que requiera amarre de seguridad, monitoreo GPS y checklist preventivo antes de cada viaje.',
    icono: 'fa-lock',
    puntoTitulo: 'Amarre de seguridad',
    puntoTexto: 'Carga firme y sin movimientos durante todo el viaje.',
  },
]

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

        {servicios.map((servicio) => (
          <article className="servicio" key={servicio.numero}>
            <img src={servicio.imagen} alt={servicio.alt} />
            <div className="servicio-texto">
              <header>
                <span>{servicio.numero}</span>
                <h3>{servicio.titulo}</h3>
              </header>
              <p>{servicio.descripcion}</p>
              <ul className="puntos">
                <li>
                  <i className={'fa-solid ' + servicio.icono + ' icono'}></i>
                  <h4>{servicio.puntoTitulo}</h4>
                  <p>{servicio.puntoTexto}</p>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}