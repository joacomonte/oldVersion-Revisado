import React from 'react'
import './SliderMobilesizeStyle.css'

function SliderMobilesize(props) {
  return (
    <div className='small-sliderContainer'>
      <div className='small-interior'>

        <div className='small-brandModel'>
          <h1>{props.info.title}</h1>
          <h3>{props.info.subTitle}</h3>
        </div>
        
        <div className='small-fotoContainer'>
          <div className='small-foto'></div>
        </div>

        <div className='small-caracs'>
          <div className='small-detalleContainer'>
            {/* <div className='small-fotoDetalle'></div> */}
            <div className='small-descripcionDetalle'>{props.info.detail1}</div>
          </div>
          <div className='small-detalleContainer'>
            {/* <div className='small-fotoDetalle'></div> */}
            <div className='small-descripcionDetalle'>{props.info.detail2}</div>
          </div>
          <div className='small-detalleContainer'>
            {/* <div className='small-fotoDetalle'></div> */}
            <div className='small-descripcionDetalle'>{props.info.detail3}</div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SliderMobilesize