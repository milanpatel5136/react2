import React, { useState } from 'react'
import Memo1 from './Memo1';

export default function Memo() {

    const [data,setdata] = useState ("");
    const [item,setitem] = useState ([]);

    const myHandler = (m) => {
        setdata (m.target.value)
    }

    const mydata = (m) => {
        let mitem = [...item]
        mitem.push(data)
        setitem(mitem)
    }
 
    return (
    <div>
        
        <input type="text"  onChange={myHandler}/>

        <button onClick={mydata}>CLick</button>

        <Memo1 data={item}/>
        
    </div>
  )
}
