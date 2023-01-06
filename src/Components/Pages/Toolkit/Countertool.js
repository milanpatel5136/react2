import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { dicrement, increment, incrementByAmount } from './Redusertool';

function Countertool() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const [data , setdata] = useState (0);

    const myHandle =(e) =>{
        setdata(e.target.value)
    }



  return (
    <div className='container-fluid'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>{counter.value}</p>
        <button onClick={() => dispatch(dicrement())}>Dicrement</button><br/><br/>
        <button onClick={() => dispatch(incrementByAmount(data))}>increment by number</button><br/><br/>

        <input type='text' onChange={myHandle} />
    </div>
  )
}

export default Countertool;
