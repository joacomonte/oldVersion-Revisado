import React from 'react'
import './SliderMobilesizeStyle.css'

function SliderMobilesize() {
  return (
    <div className='small-sliderContainer'>
      <div className='small-interior'>
        
        <div className='small-caracs'>
          <div className='small-brandModel'>
            <h1>APPLE 12</h1>
            <h3>256gb</h3>
          </div>
          <div className='small-detalleContainer'>
            {/* <div className='small-fotoDetalle'></div> */}
            <div className='small-descripcionDetalle'>la pantalla tiene 5.42 pulgadas (iPhone 13 mini y iPhone 12 mini), 5.85 pulgadas</div>
          </div>
          <div className='small-detalleContainer'>
            {/* <div className='small-fotoDetalle'></div> */}
            <div className='small-descripcionDetalle'>iPhone es una línea de teléfonos inteligentes de alta gama </div>
          </div>
          <div className='small-detalleContainer'>
            {/* <div className='small-fotoDetalle'></div> */}
            <div className='small-descripcionDetalle'>Ejecuta el sistema operativo móvil iOS.</div>
          </div>

        </div>
        <div className='small-fotoContainer'>
          <div className='small-foto'></div>
        </div>
      </div>
    </div>
  )
}

export default SliderMobilesize