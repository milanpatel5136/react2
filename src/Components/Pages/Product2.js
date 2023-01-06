import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Routertask/Header'

export default function Product2() {
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(r=>r.json())
      .then(y=>{
        setdata(y)
      })
    }, [])

   
    
  return (
   <>
   <Header/>
    <div className='row'>
        {data.map((val)=>{
            return(
                <>
                <div className='text-center col-4'>
                    <div className='card-body'>
                <p>{val.id}</p>
                <p className='card-title'>{val.title}</p>
                <p className='card-title'>{val.price}</p>
                <p className='card-text'>{val.description}</p>
                <p>{val.category}</p>
                <img src={val.image} className="w-50 mx-auto" alt='' />
                <p>{val.rating.rate}</p>

                </div>
                </div>
                </>
                
            )
        })}
    </div>

   </>
  )
}
