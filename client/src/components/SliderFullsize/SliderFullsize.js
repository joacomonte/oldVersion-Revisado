import React from 'react'
import './SliderFullsize.css'

// title, subtitle, detalle1, detalle2, detalle 3, 
function SliderFullsize(props) {
  return (
    <div className='sliderContainer'>
      <div className='interior'>
        <div className='caracs'>
          <div className='brandModel'>
            <h1>{props.info.title}</h1>
            <h3>{props.info.subTitle}</h3>
          </div>
          <div className='detalleContainer'>
            <div className='fotoDetalle'></div>
            <div className='descripcionDetalle'>{props.info.detail1}</div>
          </div>
          <div className='detalleContainer'>
            <div className='fotoDetalle'></div>
            <div className='descripcionDetalle'>{props.info.detail2}</div>
          </div>
          <div className='detalleContainer'>
            <div className='fotoDetalle'></div>
            <div className='descripcionDetalle'>{props.info.detail3}</div>
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