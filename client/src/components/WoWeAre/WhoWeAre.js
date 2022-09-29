import React from 'react'
import './WhoWeAreStyle.css'

function WhoWeAre() {
  return (
    <div className='whoweare-container' >
        <div className='whoweare-content'>
            <div className='ourStory'>
                Revisado® es una empresa emergente dominada por una 
                filosofía de negocio innovadora que se destaca por ser 
                escalable y dinámica. 
            </div>
            <div className='contacts-container'>
                <div className='singleContact-container'>
                    <div className='pedro-img'></div>
                    <div className='greenContainer'>
                        <h2>Pedro</h2>
                        <h3>CEO</h3>
                    </div>
                    <h4>Position<br></br>Mail</h4>
                </div>
                <div className='singleContact-container'>
                    <div className='pedro-img'></div>
                    <div className='greenContainer'>
                        <h2>Pedro 2</h2>
                        <h3>El de mi izquierda es puto</h3>
                    </div>
                    <h4>Position<br></br>Mail</h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WhoWeAre