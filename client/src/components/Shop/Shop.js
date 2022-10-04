import React from 'react'
import './ShopStyle.css';
import bgMain from '../../images/bg-main.jpg'
import revisadoLogo from '../../images/RevisadoCompleto@4x.png';

function Shop() {
  return (

    <div className='hero-pageContainer'>


      <div className='hero-imgContainer'> 
        <img className='logo' src={revisadoLogo} alt='hola'></img>

        <div className='sub1'> Compra con <mark style={{color:'#38ED9A', background:'none'}}>confianza.</mark></div>
        <div className='sub2'> Vende <mark style={{color:'#38ED9A', background:'none'}}>sin esfuerzo</mark></div>
        <button className='buttonShop'> Más detalles </button>

        <div className='hero-img'></div>
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