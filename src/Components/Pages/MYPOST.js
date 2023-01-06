import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

export default function MYPOST() {

    const myDis = useDispatch();

    const mydata = useSelector(m=>m.posts);
    
    useEffect(() => {
        myDis({
            type:"FETCH_POST_REQUEST"
        })
    }, [])
    
  return (
    <div>
        {mydata.map((element)=> {

              return (
                <table>        
                    <td>
                         <th><div>${element.userId}</div></th>
                         <th><div>${element.id}</div></th>
                         <th><div>${element.title}</div></th>
                         <th><div>${element.body}</div></th>
                    </td>
                </table>

              )
        })}
    </div>
  )
}
