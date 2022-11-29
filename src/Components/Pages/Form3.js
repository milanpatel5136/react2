import React, { useState } from 'react'
import Select from 'react-select'

export default function Form3() {

 const [demo,setdemo] = useState({
      name : "",
      degree : "",
      college : "",
      date : "",
      running : "",
      FirstName : "",
      LastName : "",
      endbirthday: ""
    })
     
    const [date,setdate] = useState (false)

    const namedata = [
      {value:"Mr.", label:"Mr."},
      {value:"Mrs.", label:"Mrs."}
    ]

    const degreedata = [
      {value : "B.com" , label : "B.com"},
      {value : "BCA" , label : "BCA."},
      {value : "BBA" , label : "BBA"},
      {value : "BSC" , label : "BSC"},
      {value : "M.com" , label : "M.com"},
    ]

    const collegedata = [
        {value : "MSU" , label : "MSU"},
        {value : "PARUL Uni." , label : "PARUL Uni."},
        {value : "Nirama" , label : "Nirama"},
        {value : "IIT" , label : "IIT"},
        {value : "GUJARAT" , label : "GUJARAT"},
    ]

    const hengler = (e) => {

    

      if (e.target.type === "checkbox") {
  
        if(e.target.checked == true){
          setdate(true)
          
          setdemo({...demo,"endbirthday" : ""})
           
        }else{
          setdate(false)
        }
  
       // setdemo({ ...demo, [e.target.name]: e.target.checked })  
        
      } else {
        setdemo({ ...demo, [e.target.name]: e.target.value })
      }
    }
    

    const detel = (e)=>{
      e.preventDefault();
      console.log(demo)
    }

  return (
    <div>
        <form onSubmit={detel}>
            <Select
            onChange={(e)=>{
                  hengler({target:{name:"name", value:e.value}})
            }}
              name = 'name'
              options = {namedata}
            />
            <h5>First Name : <input type="text" name="FirstName" onChange={hengler} value={demo.FirstName}/></h5>
            <h5>Last Name :<input type="text" name="LastName" onChange={hengler} value={demo.LastName}/></h5> 
            <Select
            onChange={(e)=>{
                  hengler({target:{name:"name", value:e.value}})
            }}
              name = 'degree'
              options = {degreedata}
            />
            <Select
            onChange={(e)=>{
                  hengler({target:{name:"name", value:e.value}})
            }}
              name = 'college'
              options = {collegedata}
            />
            
            <label>Date:</label>
            <input type="date" id="birthday" name="birthday"  onChange={hengler}/>
            <input type="date"  name="endbirthday"  onChange={hengler} disabled={date} value={demo.endbirthday}/> <br/>
 
            <input type="checkbox" name='running' onClick={hengler}/>
            <label>I am already study </label><br/><br/>

            

            <input type="submit" value="Submit"/>
        </form>
        </div>
        )
}