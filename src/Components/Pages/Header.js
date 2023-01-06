import React, { useContext, useState } from 'react'
import UserLanguage from './CreactLanguage'

export default function Header() {

    const {lan,setlan} = useContext(UserLanguage);

    const myhadler = (m)=> {
        setlan (m.target.value)
    }
  return (
    <div>
        <select onChange={myhadler}>
           <option value="en">English</option>
           <option value="guj">Gujrati</option>
        </select>
    </div>
  )
}
