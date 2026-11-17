import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollArriba from './components/ScrollArriba.jsx'
import Inicio from './pages/Inicio.jsx'
import AcercaDe from './pages/AcercaDe.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'

export default function App() {
  return (
    <>
     <ScrollArriba />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
    </>
  )
}