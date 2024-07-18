import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Login from './Login'
import Product from './Product'
import Description from './Description'
import PrivateRoute from './PrivateRoute'


const AllRoute = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Product' element={
          <PrivateRoute>        <Product /></PrivateRoute>
        }></Route>
        <Route path='/Description/:id' element={<Description />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute
