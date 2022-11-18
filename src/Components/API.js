import React from 'react';
import { useEffect , useState } from 'react';

export default function Task() {

  const [data,setdata] =  useState([])

  useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then (x => x.json())
  .then (x => {
    setdata(x)
  })
})

  return (
    
    <div>
       <table>
        {

        data.map((element)=> {

              return(
              <tr>
              <td>{element.userId}</td>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.completed}</td>
              </tr>
              )
        })
        
        
        }
        </table>
    </div>
  )
}