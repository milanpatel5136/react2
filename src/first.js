import { Button } from 'bootstrap'
import React, { useState } from 'react'

export default function First() {

    const [data,setdata] = useState(0)

    

    const pluse =() => {
           
            setdata(data+1)
        }
    

    const misus =() => {

            if(data == 0)
            {
                setdata()
            }
            else
            {
            setdata(data-1)
            }
            
        
    }
    
    const division =() => {
        setdata(data/2)
    }

    const multi =() => {
        setdata(data*2)
    }

   


  return (
    <div>           
        {data}<br></br>
        <button onClick={pluse}>+click</button>
        <button onClick={misus}>-click</button>
        <button onClick={division}>/click</button>
        <button onClick={multi}>*click</button>
    </div>
  )
}
