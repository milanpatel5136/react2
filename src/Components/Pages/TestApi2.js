import React, { useState,useEffect } from 'react'

export default function TestApi2() {

    const [data,setdata] = useState ([])
    useEffect(() => {
        fetch    ("https://api2.binance.com/api/v3/ticker/24hr")
        .then (s => s.json())
        .then (s=> {
            setdata (s)
        })
    },[])

  return (
    <div>


        <table>
            {
                data.map ((api)=> {

                    return (
                        <tr>
                            <td>{api.symbol}</td>
                            <td>{api.priceChange}</td>
                            <td>{api.priceChangePercent}</td>
                            <td>{api.weightedAvgPrice}</td>
                            <td>{api.prevClosePrice}</td>
                            <td>{api.lastPrice}</td>
                            <td>{api.lastQty}</td>
                            <td>{api.bidPrice}</td>
                        </tr>
                    )
                })
            }
        </table>

    </div>
  )
}
