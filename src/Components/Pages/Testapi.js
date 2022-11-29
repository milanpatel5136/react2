import React, { useEffect, useState } from 'react'

export default function Testapi() {

    const [data,setdata] = useState ([])
    useEffect(() => {
        fetch    ("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json")
        .then (m => m.json())
        .then (m=> {
            setdata (m)
        })
    },[])


  return (
    <div>

        <table>
            {
              data.map ((Element)=> {
              
                return (
                    <tr>
                        <td>{Element.disclosure_year}</td>
                        <td>{Element.disclosure_date}</td>
                        <td>{Element.transaction_date}</td>
                        <td>{Element.owner}</td>
                        <td>{Element.ticker}</td>
                        <td>{Element.asset_description}</td>
                        <td>{Element.type}</td>
                        <td>{Element.amount}</td>
                        <td>{Element.representative}</td>
                        <td>{Element.district}</td>
                        <td>{Element.ptr_link}</td>
                       
                    </tr>
                )

              })
            }
        </table>
    </div>
  )
}
