import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function CountSaga() {
    
    const count = useSelector(m=>m.counter);

    const dis = useDispatch();

    const increment = ()=> {
        
        dis({type: 'INCREMENT'});

    }
    const dicrement = ()=> {
        dis({type: "DICREMENT"})
    }

    const Multi = ()=> {
        dis({type: "Multi"})
    }

  return (
    <div>
        {count}
        <button onClick={increment}>Plus</button>
        <button onClick={dicrement}>Minus</button>
        <button onClick={Multi}>Multi</button>
    </div>
  )
}
