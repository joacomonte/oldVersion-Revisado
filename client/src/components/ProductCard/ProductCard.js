import React from 'react'
import './ProductCardStyle.css'
import play from '../../images/play-test.jpg'



function ProductCard() {
  return (
    <>
        <div className='productCard-container'>
            <div className='productCard-content' >
                <img className='productCard-img' src={play}></img>
                <div>
                    <div className='productCard-title'>Playstation 4</div>
                    <div className='productCard-rating'>Rating: 4/5</div>
                    <div className='productCard-price'>$145.000</div>
                </div>

            </div>
        </div>
    
    </>
  )
}

export default ProductCard