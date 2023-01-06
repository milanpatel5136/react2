import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


export default function Matirail() {
 
    
     const [data,setdata] = useState ({
        Fname : "",
        Lname : "",
        add : "",
        city : "",
        ste : "",
     });

     const handler = (m) => {
            setdata ({...data,[m.target.name]:m.target.value })
     }

    const submit = (n) => {
        n.preventDefault ()
        console.log(data)
    }

     
  return (
    <form onSubmit={submit}>


    
      <TextField  label="First Name" name="Fname" variant="standard" onChange={handler}/><br/><br/>
      <TextField  label="Last Name" name="Lname" variant="standard" onChange={handler}/><br/><br/>
      <TextField  label="Address" name="add" variant="outlined" onChange={handler}/><br/><br/>
      <TextField label="City" name="city" variant="standard" onChange={handler}/><br/><br/>
      <TextField 
        select
        label="State"
        name ="ste"
        onChange={handler}
        SelectProps ={{
            native: "true"
        }}

      >
        <option>~select~</option>
        <option>Gujarat</option>
        <option>Rajasthan</option>
        <option>Panjab</option>
        <option>Goa</option>
        <option>Maharatra</option>
      </TextField><br/><br/>

       
      <input type="Submit" value="Save"/>


    </form>
  )
}
