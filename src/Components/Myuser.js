import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Myuser() {

    const [data,setdata]=useState ([])

    useEffect(()=> {

        axios.get('https://api.rootnet.in/covid19-in/stats/testing/history')
        .then(m => {
            setdata(m.data.data);
        })
    },[])

  return (

    <div>
      
      {
        data.map((ele) => {
           return (<div>
            

                    <h6>{ele.day}</h6>
                    <h6>{ele.totalSamplesTested}</h6>
                    <h6>{ele.totalIndividualsTested}</h6>
                    <h6>{ele.totalPositiveCases}</h6>
                    <h6>{ele.source}</h6>

                  
           
           </div>)
        })
      }

    </div>  
  )
}
