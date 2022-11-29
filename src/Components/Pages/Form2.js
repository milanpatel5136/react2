import React, { useState } from 'react'
import Select from "react-select"

export default function Form2() {
    const [data,setdata] = useState ({
        FirstName : "",
        Degree : "",
        Collage : "",
    });

    const Degreedata = [
        {value : "MCA" , label : "MCA"},
        {value : "M.COM" , label : "M.COM"},
        {value : "B.COM" , label : "B.COM"},
        {value : "B.C.A" , label : "B.C.A"},
        {value : "MBBS" , label : "MBBS"},
    ]

    const Collagedata = [
        {value : "MSU" , label : "MSU"},
        {value : "PARUL Uni." , label : "PARUL Uni."},
        {value : "Nirama" , label : "Nirama"},
        {value : "IIT" , label : "IIT"},
        {value : "GUJARAT" , label : "GUJARAT"},
    ]

    const handler =(m) => {
        console.log (m)
        setdata ({...data,[m.target.name]:m.target.value})
    }

    const handleSubmit = (m) => {
        m.preventDeflault();
        console.log(data);
    }

  return (
    <div>

    <form onSubmit={handleSubmit}>

        <h5>FirstName : <input type="text" name="FirstName" onChange={handler}/></h5>
        
        <Select
        onChange={(m) => {
            handler({target:{name:"Degree",value:m.value}})
        } }
        name = "Degree"
        options={Degreedata}
        />

        <Select
        onChange={(m) => {
            handler({target:{name:"Collage",value:m.value}})
        }}
        name = "Collage"
        options={Collagedata}
        
        />

        <input type="Submit" value="Save"/>

    </form>

    </div>
  )
}
