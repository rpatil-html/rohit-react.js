import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [email,setemail]=useState([])
  const [password,setpassword]=useState([])

  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,password
    }
    console.log(userdata)

    axios.post("https://reqres.in/api/login",userdata,{
     
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(userdata)
    })
    .then((res)=>{
      
      const data= res.data
      console.log(data)
      localStorage.setItem("token",data.token)
    })
    .catch((err)=>console.log(err))
  }
    
  return (
    <div>
      <h1>LoginPage</h1>
        <form action="" onSubmit={handlesubmit} style={{height:"200px",width:"25%",backgroundColor:"teal",borderRadius:"15px",position:"absolute",left:"38%",top:"20%"}}>
            <input type="text"  onChange={(e)=>setemail(e.target.value)} placeholder='email...' /><br></br> <br></br>
            <input type="text" onChange={(e)=>setpassword(e.target.value)} placeholder='password...' /><br></br> <br></br>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login