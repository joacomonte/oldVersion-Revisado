
import './SliderProductsStyle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation'

import SliderFullsize from '../SliderFullsize/SliderFullsize';
import SliderMobilesize from '../SliderMobilesize/SliderMobilesize';
import { useState, useEffect } from 'react';

import data from './SliderProductsData'



function SliderProducts (){

  const [winWidth, setWinWidth] = useState(window.innerWidth)

  const detectSize = () => {
    setWinWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [winWidth])

  
  return (
    <div className='SwiperContainer'>
      <h1 className='SlidersTitle'> Productos Destacados</h1>

      <Swiper className='swipMobile'
        modules={[Navigation, Autoplay]}
        navigation
        speed={800}
        slidesPerView={1}
        autoplay
      >

        {(winWidth>800) && 
          <SwiperSlide>
            <SliderFullsize info={data.destacado1}/>
          </SwiperSlide>
        }

        {(winWidth>800) && 
          <SwiperSlide>
            <SliderFullsize info={data.destacado2}/>
          </SwiperSlide> 
        }

        {(winWidth<800) && 
          <SwiperSlide>
            <SliderMobilesize info={data.destacado2}/>
          </SwiperSlide>
        }

        {(winWidth<800) && 
          <SwiperSlide>
            <SliderMobilesize info={data.destacado2}/>
          </SwiperSlide>
        }
        

        

      </Swiper>
      {/* <div className='detailsButtonContainer'>
        <button className='detailsButton'>Destacados</button>
      </div> */}
    </div>
  );
};
export default SliderProducts