import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar';
import Shop from '../components/Shop/Shop';
import SlidersProducts from '../components/SliderProducts/SliderProducts';
import HowToPost from '../components/HowToPost/HowToPost';
import WhoWeAre from '../components/WoWeAre/WhoWeAre';
import NuestraApp from '../components/NuestraApp/NuestraApp';
import Banners from '../components/Banners/Banners';

function HomePage() {
  return (
    <>

        <MenuBar pageIndex={0}/>
        <div className='revisado-pageContainer1'>
          <Shop/>
          <Banners/>
          <SlidersProducts/>
          <HowToPost/>
          <WhoWeAre/>
          <NuestraApp/>
        </div>

</>
  )
}

export default HomePage