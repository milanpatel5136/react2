import React, { useState,useEffect } from 'react'

export default function TestApi3() {

    const [data,setdata] = useState ([])
    useEffect (()=> {
        fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then (n => n.json())
        .then (n => {
            setdata (n)
        })
    },[])
  

  return (
    <div>

        <table>
          
          {
            data?.drinks?.map ((Element)=> {
                return (
                    <tr>
                    <td>{Element.idDrink}</td>
                    <td>{Element.strDrink}</td>
                    <td>{Element.strDrinkAlternate}</td>
                    <td>{Element.strTags}</td>
                    <td>{Element.strVideo}</td>
                    <td>{Element.strCategory}</td>
                    <td>{Element.strIBA}</td>
                    <td>{Element.strAlcoholic}</td>
                    <td>{Element.strGlass}</td>
                    <td>{Element.strInstructions}</td>
                    <td>{Element.strInstructionsES}</td>
                    
                    </tr>
                )
            })
          }

        </table>

    </div>
  )
}
