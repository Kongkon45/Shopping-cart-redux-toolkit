import React from 'react'
import Products from "../Products.json"
import Product from './Product'
import Cart from './Cart'

const ShoppingCart = () => {
    // console.log(Products)
  return (
    <div className='flex gap-5'>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 mx-5'>
            {Products && Products?.map((product)=>{
                return <Product key={product.id} product={product}/>
            })}
        </div>
        {/* <div className='w-2/5'>
            <Cart/>
        </div> */}
    </div>
  )
}

export default ShoppingCart