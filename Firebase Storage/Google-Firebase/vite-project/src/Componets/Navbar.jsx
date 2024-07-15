import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to={"/login"}>Login</Link>
      <Link to={"/Product"}>Product</Link>
      <Link to={"/DashBord"}>DashBord</Link>
      <Link to={"/Post"}>Post</Link>
      <Link to={"/Updeta"}>Updeta</Link>
      </div>
    </div>
  )
}

export default Navbar
