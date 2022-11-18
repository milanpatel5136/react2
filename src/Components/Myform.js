import { useState } from "react"
import React  from 'react'
import "./Pages/form.css"


export default function Myform() {

    const [employewe,setemployee] = useState ({
        FirstName : "" ,
        MiddleName : "",
        LastName : "" ,
        Address : "",
        City : "",
        MobileNo : "",
        Gender : "",
        Hobbies : []

    })


    const MyHandler = (s)=> {
       
        if(s.target.name === "Hobbies")
        {
             let mydata = employewe.Hobbies;

            if(s.target.checked){

                
            mydata.push(s.target.value);
            setemployee({...employewe,Hobbies : mydata})

            } 
            
            else
            {
                  let p = mydata.filter ((m)=> {
                    return m != s.target.value
                  })
                  setemployee({...employewe,Hobbies : p})
            }

        }
        else
        {
            setemployee ({...employewe , [s.target.name] :[s.target.value]})
        }

    }
        

    const mysubmit= (s) => {
        s.preventDefault();
        console.log(employewe)
    }


  return (
    <div>
        <form onSubmit={mysubmit}>

            <h5><b>FirstName : <input type="text" name="FirstName" onChange={MyHandler}/></b></h5><br/>
            <h5><b>MiddleName  : <input type="text" name="MiddleName" onChange={MyHandler}/></b></h5><br/>
            <h5><b>LastName : <input type="text" name="LastName" onChange={MyHandler}/></b></h5><br/>
            <h5><b>Address : <input type="text" name="Address" onChange={MyHandler}/></b></h5><br/>
            <h5><b>City : <input type="text" name="City" onChange={MyHandler}/></b></h5><br/>
            <h5><b>Mobile No : <input type="text" name="Mobil No" onChange={MyHandler}/></b></h5><br/>

            <label>
                <b>Gander : </b>
                Male :
            </label>

            <input type="radio" name="Gender" value="Male" onClick={MyHandler}/>

            <label>
                Female :
            </label>

            <input type="radio" name="Gender" value="Female" onClick={MyHandler}/><br/><br/>

            <label>
                <b>Hobbies : </b>
                Traveling
            </label>

            <input type="checkbox" name="Hobbies" value="Traveling" onClick={MyHandler}/>

            <label>
                Sports
            </label>
            
            <input type="checkbox" name="Hobbies" value="Sports" onClick={MyHandler}/>

            <lable>
                Book Redding
            </lable>

            <input type="checkbox" name="Hobbies" value="Book Redding" onClick={MyHandler}/><br/><br/>

            <input type="submit" value=" Save"/>

        </form>
    </div>
  )

  }


