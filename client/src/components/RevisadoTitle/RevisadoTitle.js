import React from 'react'
import './RevisadoTitle.css';
import revisadoLogo from '../../images/RevisadoCompleto@4x.png';
import Navbar from '../Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'


function RevisadoTitle() {
  return (
    <div className='RevisadoContainer'>
      <div className='menuDiv' >
      <Routes>
          <Route path='/' element={<Navbar/>} />
        </Routes>
        </div>
    </div>

  )
}

export default RevisadoTitle