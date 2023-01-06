import React from 'react'
import UserLanguage from './CreactLanguage';
import { useContext } from 'react';

export default function Child2() {

    const {lan} = useContext(UserLanguage);


    const mydata = {

        "en" : {
    
          firstName : "FirstName",
          lastName : "lastName"
    
    
        },
    
        "guj" : {
    
    
          firstName : "પ્રથમ નામ",
          lastName : "છેલ્લું નામ"
    
        }
    
     }
    

  return (
    <div>

        <form>

            <label>{mydata[lan].firstName}</label>
            <input type="text" />

            <label>{mydata[lan].lastName}</label>
            <input type="text" />

        </form>
    </div>
  )
}
