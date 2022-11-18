import { useEffect, useState } from "react"
import React  from 'react'


export default function Task1() {

    const [data,setdata] =  useState([])
  
      useEffect(()=> {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(y=>y.json())
   .then(y=> {
      setdata(y)
  
   })
  
      },[])
    return (
      <div>

        <input type='text'  value/>
          <table>
          {
          data.map((element)=> {
  
                return( <tr><td>{element.email}</td><td>{element.name}</td></tr>)
          })
          
          
          }
          </table>
          </div>
    )
  }