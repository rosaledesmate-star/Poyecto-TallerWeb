import { useEffect, useState } from 'react'
import Modal from '../components/Modal.jsx'
import '../contacto.css'

export default function Contacto() {
  const [modalAbierto, setModalAbierto] = useState(false)

  useEffect(() => {
    document.title = 'Contacto | TRANSPORTE PROA'
  }, [])

  function cerrarModal() {
    setModalAbierto(false)
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const formulario = e.target
    const datos = new FormData(formulario)
    const cuerpo =
      'Nombre: ' + datos.get('nombre') + '\n' +
      'Correo: ' + datos.get('correo') + '\n\n' +
      'Mensaje:\n' + datos.get('mensaje')

    window.location.href =
      'mailto:trans_proa@hotmail.com' +
      '?subject=' + encodeURIComponent(datos.get('asunto')) +
      '&body=' + encodeURIComponent(cuerpo)

    formulario.reset()
    setModalAbierto(true)
  }

  return (
    <>
      {/* Franja azul */}
      <section className="contacto-banner">
        <div className="contenedor">
          <h1>Contáctanos</h1>
          <p>
            Estamos disponibles para atender tus consultas y coordinar los detalles de tu
            servicio de transporte con plataforma. Escríbenos para brindarte información
            sobre tu solicitud.
          </p>
        </div>
      </section>

      {/* Tarjetas */}
      <section className="contacto-contenido">
        <div className="contenedor">
          <div className="contacto-columnas">

            {/* Datos de contacto */}
            <section className="contacto-datos" id="datos">
              <h2>Datos de contacto</h2>
              <table className="tabla-contacto">
                <tbody>
                  <tr>
                    <th scope="row">Dirección</th>
                    <td>Lurín, Lima, Perú</td>
                  </tr>
                  <tr>
                    <th scope="row">WhatsApp</th>
                    <td>
                      <a href="https://wa.me/51996436009" target="_blank" rel="noopener noreferrer">
                        996 436 009
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono</th>
                    <td>Completar número telefónico</td>
                  </tr>
                  <tr>
                    <th scope="row">Correo</th>
                    <td><a href="mailto:trans_proa@hotmail.com">trans_proa@hotmail.com</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Horario</th>
                    <td>Lunes a sábado, de 8:00 a. m. a 6:00 p. m.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Formulario */}
            <section className="contacto-formulario" id="mensaje">
              <h2>Envíanos un mensaje</h2>
              <p>Completa los siguientes campos para realizar tu consulta.</p>

              <form className="formulario-contacto" onSubmit={manejarEnvio}>
                <div className="campo">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" id="nombre" name="nombre" autoComplete="name" required />
                </div>

                <div className="campo">
                  <label htmlFor="correo">Correo electrónico</label>
                  <input type="email" id="correo" name="correo" autoComplete="email" required />
                </div>

                <div className="campo">
                  <label htmlFor="asunto">Asunto</label>
                  <input type="text" id="asunto" name="asunto" required />
                </div>

                <div className="campo">
                  <label htmlFor="mensaje-texto">Tu mensaje</label>
                  <textarea id="mensaje-texto" name="mensaje" rows={6} required></textarea>
                </div>

                <button className="boton-enviar" type="submit">Enviar mensaje</button>
              </form>
            </section>

          </div>
        </div>
      </section>

      {/* Ventana modal de confirmación (fuera de las tarjetas para no heredar sus estilos) */}
      <Modal abierto={modalAbierto} onCerrar={cerrarModal} titulo="Mensaje listo para enviar">
        <p>
          Se abrió tu programa de correo con el mensaje escrito. Presiona enviar allí para
          completar el envío.
        </p>
        <button className="modal-boton" type="button" onClick={cerrarModal}>
          Entendido
        </button>
      </Modal>
    </>
  )
}