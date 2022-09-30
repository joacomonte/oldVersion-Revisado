
import './SliderProductsStyle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation'

import SliderFullsize from '../SliderFullsize/SliderFullsize';
import SliderMobilesize from '../SliderMobilesize/SliderMobilesize';




function SliderProducts (){

  
  return (
    <div className='SwiperContainer'>
      <h1 style={{color:'white', textAlign:'center', padding:'50px 0',fontSize:'2.5rem', color:'lightgreen'}}> Productos destacados</h1>

    <Swiper className='swipMobile'
      modules={[Navigation, Autoplay]}
      navigation
      speed={800}
      slidesPerView={1}
      autoplay
    >


      <SwiperSlide>
      {/* <SliderFullsize/> */}
      <SliderMobilesize/>
      </SwiperSlide>
      
      <SwiperSlide>
        {/* <SliderFullsize/> */}
        <SliderMobilesize/>
      </SwiperSlide>

      ...
    </Swiper>
    <div className='detailsButtonContainer'>
      <button className='detailsButton'>Destacados</button>
    </div>
    </div>
  );
};
export default SliderProducts