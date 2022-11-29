import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropsRow from './PropsRow'

export default function Props() {

    const [data,setData] = useState([]);

    useEffect(()=> {

      fetch("https://fakestoreapi.com/products")
      .then(y=>y.json())
      .then(y=> {
        setData(y)
      })
      
    },[])

  return (
    <div className='row'>
      {
        data.map((value)=> {

            return(<PropsRow record={value}></PropsRow>)
        })
      }
    </div>
  )
}
