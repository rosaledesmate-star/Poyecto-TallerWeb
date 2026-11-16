import { Outlet } from 'react-router-dom'
import Cabecera from './Cabecera.jsx'
import Footer from './Footer.jsx'
import BotonWhatsApp from './BotonWhatsApp.jsx'

export default function Layout() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <Outlet />
      </main>
      <BotonWhatsApp />
      <Footer />
    </>
  )
}