import React, { useState } from 'react'
import reviews from './data'

export default function Home() {
   const [show,setshow]=useState('');

   const handler = (e)=> {


    setshow(e.target.value  )
   }


  return (
    <div>
      
        <input type="text"  onChange={handler}/>
        <button onClick={show}>click</button>

        {reviews.filter((value,index,array)=>{
            return value.name.indexOf(show)  >=0;


        }).map((value,index,array)=>{



        return (<h3>{value.name}</h3>)
    })}</div>
  )
}
