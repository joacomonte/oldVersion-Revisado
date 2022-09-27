import React from 'react'
import './RevisadoTitle.css';
import revisadoLogo from '../../images/RevisadoCompleto@4x.png';


function RevisadoTitle() {
  return (
    <div className='RevisadoContainer'>
          <img className='logo' src={revisadoLogo} alt='hola' ></img>
          <div>
            <div className='title' style={{color:'white', fontSize:'22px'}} >Compra con confianza.</div>
            <div style={{color:'white', fontSize:'22px'}} >Vende sin esfuerzo</div>
          </div>
    </div>

  )
}

export default RevisadoTitle