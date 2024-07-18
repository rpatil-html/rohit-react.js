import React from 'react'

const PrivateRoute = ({children}) => {
  const token = localStorage.getItem("token")

  if(!token){
    return <h3>You are not loginnnn</h3>
  }
  return children
}

export default PrivateRoute
