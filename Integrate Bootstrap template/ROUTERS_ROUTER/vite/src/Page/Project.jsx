import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = { email, password }

    try {
      const response = await axios.post("https://reqres.in/api/login", userData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(response.data)
      localStorage.setItem("token", response.data.token)
      history.push('/private')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email..."
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password..."
          value={password}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
