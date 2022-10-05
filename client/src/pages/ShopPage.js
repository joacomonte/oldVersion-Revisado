import React from 'react'
import './ShopPageStyle.css'
import MenuBar from '../components/MenuBar/MenuBar'
import ProductCard from '../components/ProductCard/ProductCard'

function ShopPage() {
  return (
    <>
    <MenuBar pageIndex={1}/>
    <div className='revisado-pageContainer' >

      <div className='shopPage-productsContainer'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    </div>
    </>

  )
}

export default ShopPage