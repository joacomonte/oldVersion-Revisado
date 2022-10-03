import React from 'react'
import './Banner1Style.css'
import bgJoystick from '../../images/bg-joystick.jpg'
import bgCamera from '../../images/bg-camera.jpg'
import bgPhone from '../../images/bg-phone.jpg'

function Banner1() {
  return (
    <>
        <div className='banner-pageContainer'>
            <div className='banner-imgContainer'> 
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
                <img className='banner-img' src={bgPhone}></img>
            </div>
        </div>

    </>
    

  )
}

export default Banner1