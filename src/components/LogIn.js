import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

// - React Forms: https://reactjs.org/docs/forms.html

function LogIn({isLoggedIn,setIsLoggedIn}) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    avatar: "",
    accountType: "pro",
    newsletter: true
  })

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    console.log({username, password})
    if(username === formData.username && password === formData.password){
        setIsLoggedIn(true);
        console.log("isLoggedIn:" + isLoggedIn);
        navigate('/');
    } else {
        navigate("/login")
    }
    
   
  }
  
  function handleChange(event) {
    const key = event.target.id
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }
  
//   console.log(formData)

  return (
    <div className='login-section'>
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />



      <input type="submit" value="Log In" />
      <div className='register-text'>
      <Link to='/signup'>Don't Have An account? Sign Up</Link>
      </div>
    </form>
    </div>
    
  );
}

export default LogIn;