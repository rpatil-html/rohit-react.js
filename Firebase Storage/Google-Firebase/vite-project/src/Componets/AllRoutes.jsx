import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Product from './Product';
import Login from './Login';
import DashBord from './DashBord';
import Post from './Post';
import Updeta from './updeta';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/DashBord' element={<DashBord />}></Route>
          <Route path='/Post'element={<Post />}></Route>
          <Route path='/Updeta' element={<Updeta />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes

