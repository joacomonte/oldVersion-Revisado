
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
      <h1 className='SlidersTitle'> Productos Destacados</h1>

      <Swiper className='swipMobile'
        modules={[Navigation, Autoplay]}
        navigation
        speed={800}
        slidesPerView={1}
        autoplay
      >

        <SwiperSlide>
          <SliderFullsize/>
        </SwiperSlide>

        <SwiperSlide>
          <SliderFullsize/>
        </SwiperSlide>


        <SwiperSlide>
         <SliderMobilesize/>
        </SwiperSlide>
        

        

      </Swiper>
      {/* <div className='detailsButtonContainer'>
        <button className='detailsButton'>Destacados</button>
      </div> */}
    </div>
  );
};
export default SliderProducts