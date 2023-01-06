import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { AsncMinus, Minus, Plus } from './action/Index'

export default function MainReducer() {
    const data =useSelector(y=>y.counter)

    const mydis= useDispatch()

    const increm1= ()=>{
        mydis(Plus())
    } 

    const increm2= ()=>{
        mydis(Minus())
    } 

    const increm3= ()=>{
        mydis(AsncMinus(2))
    } 


  return (
    <div>
        {data}
        <button onClick={increm1}>+Inc</button>
        <button onClick={increm2}>-Dec</button>
        <button onClick={increm3}>--De</button>
    </div>
  )
}
