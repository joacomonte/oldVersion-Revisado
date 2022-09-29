import React from 'react'
import './SliderFullsize.css'


function SliderFullsize() {
  return (
    <div className='sliderContainer'>
      <div className='interior'>
        <div className='caracs'>
          <div className='brandModel'>
            <h1>APPLE 12</h1>
            <h3>256gb</h3>
          </div>
          <div className='detalleContainer'>
            <div className='fotoDetalle'></div>
            <div className='descripcionDetalle'>la pantalla tiene 5.42 pulgadas (iPhone 13 mini y iPhone 12 mini), 5.85 pulgadas</div>
          </div>
          <div className='detalleContainer'>
            <div className='fotoDetalle'></div>
            <div className='descripcionDetalle'>iPhone es una línea de teléfonos inteligentes de alta gama </div>
          </div>
          <div className='detalleContainer'>
            <div className='fotoDetalle'></div>
            <div className='descripcionDetalle'>Ejecuta el sistema operativo móvil iOS.</div>
          </div>

        </div>
        <div className='foto'>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default SliderFullsize