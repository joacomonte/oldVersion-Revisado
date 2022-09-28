
import './SliderProductsStyle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation'




function SliderProducts (){

  
  return (
    <div className='SwiperContainer'>
      <h1 style={{color:'white', textAlign:'center', padding:'50px 0'}}> Productos destacados</h1>

    <Swiper className='swip'
      modules={[Navigation, Autoplay]}
      navigation
      speed={800}
      slidesPerView={1}
      autoplay
    >
      <SwiperSlide className='sliderContainer'>
      </SwiperSlide>

      <SwiperSlide>
        <div className='sliderContainer2'>
          <div className='interior'>
            <div className='caracs'>
              <div className='brandModel'>
                <h1>APPLE 12</h1>
                <h3>256gb</h3>
              </div>
              <div className='detalleContainer'>
                <div className='fotoDetalle'></div>
                <div className='descripcionDetalle'>la pantalla tiene 5.42 pulgadas (iPhone 13 mini y iPhone 12 mini), 5.85 pulgadas</div>
              </div>
              <div className='detalleContainer'>
                <div className='fotoDetalle'></div>
                <div className='descripcionDetalle'>iPhone es una línea de teléfonos inteligentes de alta gama </div>
              </div>
              <div className='detalleContainer'>
                <div className='fotoDetalle'></div>
                <div className='descripcionDetalle'>Ejecuta el sistema operativo móvil iOS.</div>
              </div>

            </div>
            <div className='foto'>
              <div></div>
            </div>
          </div>
        </div>
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