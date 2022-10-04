import React, { useState } from 'react'
import './MenuBarStyle.css';


import { Link } from "react-router-dom";


function RevisadoTitle(props) {

  const [index, setIndex] = useState(props.pageIndex);


  return (
    <div className='RevisadoPageContainer'>
      <div className='RevisadoContainer'>

        <Link to="/" style={{ textDecoration: 'none', height:'100%', color:'white' }}>
          <div className={`navButton ${index===0 ?'active':null}`} onClick={ () => {setIndex(0)}} > Inicio</div>
        </Link>

        <Link to="/shop-page" style={{ textDecoration: 'none', height:'100%', color:'white' }}>
        <div className={`navButton ${index===1 ?'active':null}`} onClick={ () => {setIndex(1)}}> Shop</div>
        </Link>
        <div className={`navButton ${index===2 ?'active':null}`} onClick={ () => {setIndex(2)}}> Nosotros</div>
        <div className={`navButton ${index===3 ?'active':null}`} onClick={ () => {setIndex(3)}}> Login</div>
      </div>
    </div>


  )
}

export default RevisadoTitle



        
        {/* <div className='menuDiv' >
        <Routes>
            <Route path='/' element={<Navbar/>} />
          </Routes>
        </div> */}