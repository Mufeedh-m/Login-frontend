import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './App.css' 


function App() {
      const navigate =useNavigate()
       const[user,setUser]=useState("")
       const[pass,Setpass]=useState("")

       function handleUser(e){
        setUser(e.target.value)
       }
       function handlePass(e){
        Setpass(e.target.value)
       }

       function checked(){
        var logindetails = axios.get(`https://login-backend-2-6ewe.onrender.com/login?username=${user}&password=${pass}`)
        logindetails.then(function(data){
          if(data.data==true){
            navigate('/success')
          }
          else{
            navigate('/failure')
          }
        })
       }

  return (
    <>
   <div className="login-container">
      <div className="login-card">
        <h1 className="title">🚀 Welcome Back</h1>
        <p className="subtitle">Login to continue your journey</p>

        <input
          onChange={handleUser}
          name="username"
          placeholder="Enter Username"
          className="input-box"
        />
        <input
          type="password"
          onChange={handlePass}
          name="password"
          placeholder="Enter Password"
          className="input-box"
        />

        <button onClick={checked} className="login-btn">
          Login
        </button>
      </div>
    </div>
    </>
  )
}

export default App
