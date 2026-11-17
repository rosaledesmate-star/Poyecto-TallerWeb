import { useEffect } from 'react'
import '../acerca_de.css'

export default function AcercaDe() {
  useEffect(() => {
    document.title = 'Acerca de | TRANSPORTE PROA'
  }, [])

  return (
    <>
      <div className="fondopresentacion">
        <img src="/PersonaTrabajandoconcarga.jpg" alt="Imagen de persona trabajando con carga" />
        <h1 className="textofrente">Acerca de</h1>
      </div>

      <section className="QUIENES">
        <div className="textoinformativo">
          <h2>¿QUIÉNES SOMOS?</h2>
          <p>
            Transporte Proa S.A.C. es una empresa dedicada al transporte terrestre de carga pesada,
            creada en el año 2008 como un negocio familiar.
            La empresa tiene como finalidad brindar un servicio de transporte seguro, puntual y eficiente,
            atendiendo las necesidades de empresas y personas particulares que requieren trasladar carga pesada.
            Actualmente, la empresa se encuentra ubicada en Lurín, Lima, y desarrolla principalmente sus
            operaciones en la zona de Sur Chico, extendiéndose hasta Callao.
          </p>
        </div>
        <div className="imagen-quienes">
          <img src="/personaconcaja.png" alt="Imagen de persona trabajando" />
        </div>
      </section>

      <section className="MISION">
        <div className="textomision">
          <h2>NUESTRA MISIÓN</h2>
          <p>
            Brindar soluciones eficientes de transporte terrestre de carga pesada, garantizando seguridad,
            puntualidad y confiabilidad en cada servicio, con el compromiso de satisfacer las
            necesidades logísticas de nuestros clientes y contribuir al desarrollo de sus operaciones.
          </p>
        </div>
        <div className="imagen-mision">
          <img src="/personaleyendodocumentos.png" alt="Imagen de persona leyendo documentos" />
        </div>
      </section>

      <section className="VISION">
        <div className="textovision">
          <h2>NUESTRA VISIÓN</h2>
          <p>
            Ser una empresa líder en el transporte de carga pesada, reconocida por su excelencia operativa,
            seguridad, puntualidad y compromiso con sus clientes.
          </p>
        </div>
        <div className="imagen-vision">
          <img src="/personarespondiendollamadas.png" alt="Imagen de persona respondiendo llamadas" />
        </div>
      </section>
    </>
  )
}