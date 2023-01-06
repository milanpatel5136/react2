import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getUserList}  from './action/Index';

export default function UserReducer() {
 
    const data = useSelector(m=> m.user.data.data);

    const myDisa = useDispatch();

    

    useEffect(()=> {
        myDisa(getUserList());
    },[])

  return (
    <div>

    <table>
       {data?.map((val) => {
        return(
             
            <tr>
                  <td>{val.email}</td>
            </tr>
          
        )
       })}

</table>       
    </div>
  );
}
