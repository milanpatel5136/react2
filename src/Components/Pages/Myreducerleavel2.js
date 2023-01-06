import React, { useReducer, useState } from 'react'

export default function Myreducerleavel2() {
 
    const Myreducer = (state,action)=> {

        switch (action.type)
        {
            case 'Add' :
            return[...state,action.payload];

            case "delet":
                const maindata=[...state]
                maindata.splice(action.payload,1)

                return maindata

            default :

            return state;
        }
    }
    
        const [data,setdata] = useState ('');
        const [pre,setpre] = useReducer(Myreducer,[])

        const myhandler = (m) => {
            setdata(m.target.value)
        }

        const mysubmit = () => {
            setpre ({ type : "Add" ,payload: data })
            console.log(pre);
        }

        const mydelet = (n) => { 
            setpre ({ type : "delet" ,payload: n })
             
        }

  return (
    <div>
          <input type='text' onChange={myhandler}/>
          <input type="button" value="save" onClick={mysubmit}/>

          {pre.map((val,index)=>{
            return(
                <h2>{val} <input type="button" value="delet" onClick={()=>{mydelet(index)}}/></h2>
            )
          })}
          
    </div>
  )
}

