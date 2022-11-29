import React, { useState } from 'react'

export default function Testfrom() {

     const [people,setpeople] = useState ({
        Firstname : "",
        Lastname : "",
        Email : "",
        Password : "",
        Password : "",
        Contry : "",
        Year : "",
        Date : "",
        Month : "",
        checkbox2:"",
        checkbox1: ""
     })

     const Handler = (m) => {

        if(m.target.type =="checkbox")
        {
            setpeople ({...people,[m.target.name]: m.target.checked })

        }
        else
        {
        setpeople ({...people,[m.target.name]: m.target.value})
        }


    }

    const mysubmit= (m) => {
        m.preventDefault();
        console.log(people)
    }
     


  return (
    <div>
          <form onSubmit={mysubmit}>

        <h5>First Name : <input type="text"  name="Firstname"  onChange={Handler} /></h5>
        <h5>Last Name : <input type="text" name="Lastname" onChange={Handler} /></h5>
        <h5>Email : <input type="email" name="Email" onChange={Handler} /></h5>
        <h5>Password : <input type="password" name="Password" onChange={Handler}/></h5>
        <h5>Password : <input type="password" name="password" onChange={Handler}/></h5>
        <h5>Contry : <input type="text" name="Contry" onChange={Handler}/></h5>
        <label for="">Birth Date : </label>

        <select id="">
          <option value="Month">Month</option>
          <option value="1">jan</option>
          <option value="2">feb</option>
          <option value="3">mar</option>
          <option value="4">apr</option>
          <option value="5">may</option>
          <option value="6">jun</option>
          <option value="7">jul</option>
          <option value="8">aug</option>
          <option value="9">sep</option>
          <option value="10">oct</option>
          <option value="11">nav</option>
          <option value="12">dec</option>
        </select>
        <select id="">
          <option value="Days">Days</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="1">11</option>
          <option value="2">12</option>
          <option value="3">13</option>
          <option value="4">14</option>
          <option value="5">15</option>
          <option value="6">16</option>
          <option value="7">17</option>
          <option value="8">18</option>
          <option value="9">19</option>
          <option value="10">20</option>
          <option value="1">21</option>
          <option value="2">22</option>
          <option value="3">23</option> 
          <option value="4">24</option>
          <option value="5">25</option>
          <option value="6">26</option>
          <option value="7">27</option>
          <option value="8">28</option>
          <option value="9">29</option>
          <option value="10">30</option>
        </select>
        <select id="">
          <option value="Years">Years</option>
          <option value="1">2011</option>
          <option value="2">2012</option>
          <option value="3">2013</option>
          <option value="4">2014</option>
          <option value="5">2015</option>
          <option value="6">2016</option>
          <option value="7">2017</option>
          <option value="8">2018</option>
          <option value="9">2019</option>
          <option value="10">2020</option>
          <option value="11">2021</option>
          <option value="12">2022</option>
          </select>  <br/> <br/>

          <input type="checkbox"  name="checkbox1" onClick={Handler} />
          This is the javascript <br/>
          <input type="checkbox"  name="checkbox2"  onClick={Handler} />
          This is the css <br/><br/>
        
          <input type="submit" value="Submit"/>  


          </form>
    </div>
  )
}
