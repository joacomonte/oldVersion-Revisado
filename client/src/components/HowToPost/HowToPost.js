import React from 'react'
import './HowToPostStyle.css'
import { ImPhone, ImTruck } from "react-icons/im";
import { SiSpeedtest } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";

function HowToPost() {


    const iconsSize = 60;

  return (


    <div className='Howtopost-Container'> 

        <div className='Howtopost-title'>
            Queres publicar tu producto?
        </div>


        <div className='Howtopost-stepsContainer'> 

            <div className='stepContainer'>
                <div><ImPhone size={iconsSize}/></div>
                <h2>Contactanos</h2>
                <h3>Por Whatsapp o Instagram</h3>
                <button className='WsButton'>WhatsApp</button>
            </div>
            <div className='stepContainer'>
                <div><ImTruck size={iconsSize}/></div>
                <h2>Recibimos tu producto</h2>
                <h3>Contamos con diferentes puntos en CABA y GBA <br></br><button>Mas info aca</button></h3>

            </div>
            <div className='stepContainer'>
                <div><SiSpeedtest size={iconsSize}/></div>
                <h2>Testeamos y presupuestamos</h2>
                <h3>Realizamos los chequeos correspondientes y estimamos un precio de venta. <br></br><button>Mas info aca</button></h3>
                

            </div>
            <div className='stepContainer'>
                <div><GiTakeMyMoney size={iconsSize}/></div>
                <h2>Sorprendete con la venta </h2>
                <h3>Podes despreocuparte y esperar que te notifiquemos que se concreto la venta!<br></br> <button>Mas info aca</button></h3>
            </div>

        </div>

    </div>
  )
}

export default HowToPost