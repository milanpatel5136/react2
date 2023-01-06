import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'


export default function HeaderHoc() {
   
  return (
    <div>
       <nav class="navbar navbar-inverse ">
  <div class="container-fluid  ">
    <div class="navbar-header">
      <a class="navbar-brand" href="#" >WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><CustomLink to='/'>Home</CustomLink></li>
      <li class="active"><CustomLink to ='/login'>Login</CustomLink></li> 
     
     
    </ul>
     
  </div>

</nav>
    </div>
  )
}
