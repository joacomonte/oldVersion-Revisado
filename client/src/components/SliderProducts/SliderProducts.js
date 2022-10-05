
import './SliderProductsStyle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation'

import SliderFullsize from '../SliderFullsize/SliderFullsize';
import SliderMobilesize from '../SliderMobilesize/SliderMobilesize';
import { useState, useEffect } from 'react';



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

        {(winWidth>1000) && 
          <SwiperSlide>
            <SliderFullsize/>
          </SwiperSlide>
        }

        {(winWidth>1000) && 
          <SwiperSlide>
            <SliderFullsize/>
          </SwiperSlide> 
        }

        {(winWidth<1000) && 
          <SwiperSlide>
            <SliderMobilesize/>
          </SwiperSlide>
        }
        
        {(winWidth<1000) && 
          <SwiperSlide>
            <SliderMobilesize/>
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