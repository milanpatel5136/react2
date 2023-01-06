import React, { useEffect, useState } from 'react'
import Imgpostrow from './ImgPostRow';





export default function Imgpost() {
    
const [data,setdata] = useState ([]);
   
useEffect (()=> {
    fetch ("https://jsonplaceholder.typicode.com/photos")
    .then (m => m.json())
    .then (m => {
        setdata (m)
    })
},[])

  return (
    <div>
     
     {
        data.map ((value)=> {
            return (<Imgpostrow record={value}></Imgpostrow>)
        })
     }
        
    </div>
  )
}
