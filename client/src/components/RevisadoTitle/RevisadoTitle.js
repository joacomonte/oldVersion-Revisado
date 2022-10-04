import React, { useState } from 'react'
import './RevisadoTitle.css';
import revisadoLogo from '../../images/RevisadoCompleto@4x.png';
import Navbar from '../Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'


function RevisadoTitle() {

  const [index, setIndex] = useState(0);


  return (
    <div className='RevisadoPageContainer'>
      <div className='RevisadoContainer'>
        {/* <div className='menuDiv' >
        <Routes>
            <Route path='/' element={<Navbar/>} />
          </Routes>
        </div> */}
        <div className={`navButton ${index===0 ?'active':null}`} onClick={ () => {setIndex(0)}} > Inicio</div>
        <div className={`navButton ${index===1 ?'active':null}`} onClick={ () => {setIndex(1)}}> Shop</div>
        <div className={`navButton ${index===2 ?'active':null}`} onClick={ () => {setIndex(2)}}> Nosotros</div>
        <div className={`navButton ${index===3 ?'active':null}`} onClick={ () => {setIndex(3)}}> Login</div>
      </div>
    </div>


  )
}

export default RevisadoTitle