import React from 'react'
import './NuestraAppStyle.css'
import watchApp from '../../images/watchApp.png'
import comingSoon from '../../images/comingSoon.png'

function NuestraApp() {
  return (
    <div className='nuestraApp-pageContainer'>
        <div className='nuestraApp-container'>
            <div className='nuestraApp-fotoContainer'> 
                <img className="nuestraApp-img" src={watchApp} alt="watchApp"></img>
            </div>
            <div className='nuestraApp-textContainer'>
                <img className="nuestraApp-soon" src={comingSoon} alt="comingSoon" ></img>
            </div>
        </div>


    </div>
  )
}

export default NuestraApp