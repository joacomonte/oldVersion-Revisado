import React from 'react'

function WhoWeAre() {
  return (
    <div className='whoweare-container' >
        <div className='whoweare-content'>
            <div className='ourStory'></div>
            <div className='contacts-container'>
                <h1 className='title'></h1>
                <div className='singleContact-container'>
                    <img></img>
                    <div className='greenContainer'>
                        <h2>nombre</h2>
                        <h3>description</h3>
                    </div>
                    <h4>Position<br></br>Mail</h4>
                </div>
                <div className='singleContact-container'>
                    <img></img>
                    <div className='greenContainer'>
                        <h2>nombre</h2>
                        <h3>description</h3>
                    </div>
                    <h4>Position<br></br>Mail</h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WhoWeAre