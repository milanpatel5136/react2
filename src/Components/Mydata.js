import React, { useState } from 'react'

export default function Mydata() {

   
    const [employewe,setemployee] = useState ({
        FirstName : "" ,
        LastName : "" ,
        Address : "",
        MobileNo : "",
    })

    const FirstNameHandler = (m) => {
        setemployee ({...employewe,FirstName : m.target.value})
    }

    const LastNameHandler = (m) => {
        setemployee ({...employewe,LastName : m.target.value})
    }

    const AddressHandler = (m) => {
        setemployee ({...employewe,Address : m.target.value})
    }

    const MobilnoHandler = (m) => {
        setemployee ({...employewe,MobileNo : m.target.value})
    }

    const mysubmit= (m) => {
        m.preventDefault();
        console.log(employewe)
    }


  return (
    <div>
        <form onSubmit={mysubmit}>

            <h2>FirstName : <input type="text" name="FirstName" onChange={FirstNameHandler}/></h2>
            <h2>LastName : <input type="text" name="LastName" onChange={LastNameHandler}/></h2>
            <h2>Address : <input type="text" name="Address" onChange={AddressHandler}/></h2>
            <h2>Mobile No : <input type="text" name="Mobil No" onChange={MobilnoHandler}/></h2>

            <input type="submit" value=" Save"/>

        </form>
    </div>
  )
}
