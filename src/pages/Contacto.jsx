import { useEffect, useState } from 'react'
import Modal from '../components/Modal.jsx'
import '../contacto.css'

// Orden de los campos, para llevar el foco al primero que tenga error
const CAMPOS = ['nombre', 'correo', 'asunto', 'mensaje']

// Revisa los datos y devuelve un objeto con un mensaje por cada campo inválido
function validar(datos) {
  const errores = {}

  const nombre = datos.get('nombre').trim()
  const correo = datos.get('correo').trim()
  const asunto = datos.get('asunto').trim()
  const mensaje = datos.get('mensaje').trim()

  if (nombre.length < 3) {
    errores.nombre = 'Escribe tu nombre completo (mínimo 3 letras).'
  } else if (/\d/.test(nombre)) {
    errores.nombre = 'El nombre no debe contener números.'
  }

  if (correo === '') {
    errores.correo = 'Escribe tu correo electrónico.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    errores.correo = 'Escribe un correo válido, por ejemplo nombre@dominio.com.'
  }

  if (asunto.length < 3) {
    errores.asunto = 'Escribe un asunto (mínimo 3 caracteres).'
  }

  if (mensaje.length < 10) {
    errores.mensaje = 'Tu mensaje debe tener al menos 10 caracteres.'
  }

  return errores
}

export default function Contacto() {
  const [errores, setErrores] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)

  useEffect(() => {
    document.title = 'Contacto | TRANSPORTE PROA'
  }, [])

  function cerrarModal() {
    setModalAbierto(false)
  }

  // Al escribir en un campo, se borra su mensaje de error
  function limpiarError(e) {
    const campo = e.target.name
    if (errores[campo]) {
      setErrores({ ...errores, [campo]: undefined })
    }
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const formulario = e.target
    const datos = new FormData(formulario)

    const nuevosErrores = validar(datos)
    setErrores(nuevosErrores)

    // Si hay errores: lleva el foco al primer campo invalido y no envia
    for (const campo of CAMPOS) {
      if (nuevosErrores[campo]) {
        formulario.elements[campo].focus()
        return
      }
    }

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

              <form
                className="formulario-contacto"
                onSubmit={manejarEnvio}
                onInput={limpiarError}
                noValidate
              >
                <div className="campo">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    required
                    aria-invalid={errores.nombre ? 'true' : 'false'}
                    aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                  />
                  {errores.nombre && (
                    <span className="campo-error" id="error-nombre" role="alert">
                      {errores.nombre}
                    </span>
                  )}
                </div>

                <div className="campo">
                  <label htmlFor="correo">Correo electrónico</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    autoComplete="email"
                    required
                    aria-invalid={errores.correo ? 'true' : 'false'}
                    aria-describedby={errores.correo ? 'error-correo' : undefined}
                  />
                  {errores.correo && (
                    <span className="campo-error" id="error-correo" role="alert">
                      {errores.correo}
                    </span>
                  )}
                </div>

                <div className="campo">
                  <label htmlFor="asunto">Asunto</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    aria-invalid={errores.asunto ? 'true' : 'false'}
                    aria-describedby={errores.asunto ? 'error-asunto' : undefined}
                  />
                  {errores.asunto && (
                    <span className="campo-error" id="error-asunto" role="alert">
                      {errores.asunto}
                    </span>
                  )}
                </div>

                <div className="campo">
                  <label htmlFor="mensaje-texto">Tu mensaje</label>
                  <textarea
                    id="mensaje-texto"
                    name="mensaje"
                    rows={6}
                    required
                    aria-invalid={errores.mensaje ? 'true' : 'false'}
                    aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
                  ></textarea>
                  {errores.mensaje && (
                    <span className="campo-error" id="error-mensaje" role="alert">
                      {errores.mensaje}
                    </span>
                  )}
                </div>

                <button className="boton-enviar" type="submit">Enviar mensaje</button>
              </form>
            </section>

          </div>
        </div>
      </section>

      {/* Ventana modal de confirmación */}
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