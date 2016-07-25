import React, { PropTypes } from 'react'
import Navbar from '../components/materialize/Navbar.jsx'
import Slider from '../components/materialize/Slider.jsx'
import GlobalSearch from '../components/materialize/GlobalSearch.jsx'
import ThreeSection from '../components/ThreeSection.jsx'

const MainLayout = (props) => {
  return (
    <div>
      <Navbar>
        <a>Inicio</a>
        <a>Nosotros</a>
        <a>Admisión</a>
        <a>Noticias</a>
        <a>Programas</a>
        <a>Servicios</a>
      </Navbar>

      <Slider />
      <ThreeSection />
    </div>
  )
}

export default MainLayout
