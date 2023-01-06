import React, { useEffect, useState } from 'react'


export default function Useeffictleval(props) {
 
    const [data , setdata] =   useState([]);
    
    useEffect (()=> {
        fetch ("https://fakestoreapi.com/products?limit=" + props.datas)
        .then(y=> y.json())
        .then(y=>{
            setdata(y)
           console.log(y)
        })
    },[props.datas])

    

  return (
    <div>
    </div>
  )
}
