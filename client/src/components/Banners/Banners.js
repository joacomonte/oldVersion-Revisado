import React from 'react'
import './BannersStyle.css'
import bgJoystick from '../../images/bg-joystick.jpg'
import bgCamera from '../../images/bg-camera.jpg'
import bgPhone from '../../images/bg-phone.jpg'

function Banner1() {
  return (
    <>
        <div className='banner-pageContainer'>
            <div className='banner-imgContainer'> 
                <div className='textOfBannerLeft'>Detallamos las condiciones</div>
                <img className='banner-img' src={bgJoystick}></img>

            </div>
        </div>
        <div className='banner-pageContainer'>
            <div className='banner-imgContainer'> 
                <img className='banner-img' src={bgCamera}></img>
            </div>
        </div>
        <div className='banner-pageContainer'>
            <div className='banner-imgContainer'> 
                <div className='textOfBannerLeft'>Devolución gratuita hasta 10 días</div>
                <img className='banner-img' src={bgPhone}></img>
            </div>
        </div>

    </>
    

  )
}

export default Banner1