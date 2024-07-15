import {signInWithPopup, signOut} from "firebase/auth"
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from "../Serivse/firebase";
import React from "react";

const Login = () => {

  const [user] = useAuthState(auth);
  console.log(user)
    const handlesubmit=()=>{
      signInWithPopup(auth, provider)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    };

    const handleLogout=()=>{
      signOut(auth).then((res) => {
        console.log("logout")
      }).catch((err) => {
        console.log(err)
      });
    }
    

  return (
    <div>
        <h1>Login</h1>
        <GoogleButton onClick={handlesubmit}>Login-Google</GoogleButton>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Login

