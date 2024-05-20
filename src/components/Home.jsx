import React, { useState } from 'react'
import data from '../assets/products.json'
import Product from './Product'
import '../components/Home.css'

const Home = ({cart, setCart}) => {
  const [products] = useState(data.products) 

  return (
    <div className='product-container'>
     {products.map((product) => (
      <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
     ))}
    </div>
  )
}

export default Home
   