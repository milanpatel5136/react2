import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Header() {
  const mynav= useNavigate()
  const logout = (e) =>{
    localStorage.removeItem("user")
    mynav("/")
}

  return (
    <div>
      
        <nav class="navbar navbar-inverse ">
  <div class="container-fluid bg-dark ">
    <div class="navbar-header">
      <a class="navbar-brand text-white" href="#" >WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to='/'>Home</Link></li>
      <li class="active"><Link to ='/About'>About</Link></li>
      <li class="active"><Link to = '/Contact'>Contact</Link></li>
     
     
    </ul>
    
  <button onClick={logout} >Log out</button>
  </div>

</nav>
  
    </div>
  )
}
