import React, { useEffect, useState } from 'react'

export default function TestApi4() {

    const [data,setdata] = useState ([])
    useEffect (()=> {
        fetch ("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then (i => i.json())
        .then (i => {
            setdata (i)
        })
    })


  return (
    
    <div>
      <table>

         {
            data?.data?.map ((Element) => {
              
                return (
                    <tr>
                        <td>{Element}</td>
                        <td>{Element}</td>
                        <td>{Element}</td>
                        <td>{Element}</td>
                        <td>{Element}</td>
                        <td>{Element}</td>
                        <td>{Element}</td>
                    </tr>
                )
            })
         }

      </table>
    </div>
  )
}
