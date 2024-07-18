import React from 'react'
import { useContext } from 'react'
import { Themecontex } from '../contex/Themecontex'
import { AuthContext } from '../contex/Authcontex'


function Navbar() {
   const {theme}=useContext(Themecontex)

   const {user,Login,Logout}=useContext(AuthContext)
  return (
    <div>
      <h1>Navbar</h1>
      <h2>user is {user?"login":"logout"}</h2>
      <button onClick={Login}>Login</button>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Navbar
