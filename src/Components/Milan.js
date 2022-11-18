import React, { useEffect, useState } from 'react';

export default function Milan(){

const [data, setdata]= useState([])

useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(m => m.json)
    .then(m =>{
        setdata(m)
    })
})
  return (
    <div>
        <table>
        {
        data.map((element)=> {
              return(
              <tr>
              <td>{element.albumId}</td>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td><img src={element.url}/></td>
              <td><img src={element.thumbnailUrl}/></td>
              </tr>
              )
        })       
        }
        </table>

        {/* <button type='button' onClick={pre}>click me</button>
        <button type='button' onClick={next}>click hear</button> */}
    </div>
  )
}
