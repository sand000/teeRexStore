import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Cart from '../Components/Cart';
import ProductsListing from '../Components/ProductsListing';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductsListing />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<ProductsListing/>}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
