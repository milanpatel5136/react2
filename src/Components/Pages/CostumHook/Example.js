import React from 'react'
import Usefetch from './Usefetch'

export default function Example() {
  
    const {loding , data} = Usefetch("https://jsonplaceholder.typicode.com/comments")

  return (
    <div>
        <table>
            <tr>
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
            {data.map((val)=> {
                return (
                    <tr>
                        <td>{val.postId}</td>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.body}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}
