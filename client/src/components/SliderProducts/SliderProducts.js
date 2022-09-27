
import './SliderProductsStyle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade} from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation'




function SliderProducts (){

  
  return (
    <div className='SwiperContainer'>

    <Swiper className='swip'
      modules={[Navigation, EffectFade]}
      navigation
      speed={800}
      slidesPerView={1}
      loop
    >
      <SwiperSlide className='sliderContainer'></SwiperSlide>

      <SwiperSlide className='sliderContainer2'></SwiperSlide>

      ...
    </Swiper>

    </div>
  );
};
export default SliderProducts