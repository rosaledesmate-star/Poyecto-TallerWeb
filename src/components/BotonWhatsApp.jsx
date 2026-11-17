
import { useLocation } from 'react-router-dom'

const MENSAJE_COTIZACION =
  'Hola, Transporte PROA\n\nDeseo solicitar una cotización de transporte de carga.\n\n' +
  'Punto de recojo:\nPunto de destino:\nTipo de carga:\nPeso aproximado en toneladas:\n' +
  'Fecha del servicio:\nInformación adicional:\n\nQuedo atento a su respuesta. Muchas gracias.'

const MENSAJE_CONSULTA = 'Hola, Transporte PROA. Deseo realizar una consulta.'

export default function BotonWhatsApp() {
  const { pathname } = useLocation()
  const esContacto = pathname === '/contacto'
  const mensaje = esContacto ? MENSAJE_CONSULTA : MENSAJE_COTIZACION

  return (
    <a
      className="boton-whatsapp"
      href={'https://wa.me/51996436009?text=' + encodeURIComponent(mensaje)}
      title={esContacto ? 'WhatsApp' : 'Cotizar por WhatsApp'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt=""
        width="31"
        height="31"
      />
    </a>
  )
}