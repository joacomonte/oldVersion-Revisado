import React from 'react'
import './ShopStyle.css';
import bgMain from '../../images/bg-main.jpg'
import revisadoLogo from '../../images/RevisadoCompleto@4x.png';

function Shop() {
  return (

    <div className='hero-pageContainer'>


      <div className='hero-imgContainer'> 
        <img className='logo' src={revisadoLogo} alt='hola'></img>

        <div className='sub1'  >Compra con confianza.</div>
        <div className='sub2'  >Vende sin esfuerzo</div>

        <img className='hero-img' src={bgMain} width={1000}></img>
      </div>
    </div>

  )
}

export default Shop

{/*         
    <div className='shopContainer'>
        <div className='nuestroCatalogo'> Nuestro catalogo de productos </div>

            <button className='buttonShop'> Shop </button>
            <h3 style={{color:'black'}} > o entrar a</h3>
            <h2 style={{color:'black', marginTop:'10px' }}> @re.visado</h2>

    </div> */}