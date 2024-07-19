import React from 'react'
import ProductSelectSection from '../components/product_select_section'

const Product = () => {
  return (
    <div className='flex flex-col'>
      {/* <h1 className='text-lg '>Chose your product</h1> */}
      <ProductSelectSection/>
    </div>
  )
}

export default Product