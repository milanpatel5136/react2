import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'


export default function Grid1() {

       const [column,setcolumn] = useState ([
        {field:'id',filter:'true'},
        {field:'title',filter:'true',sortable:'true'},
        {field:'url'},
        {field:'thumbnailUrl'},
       ]);

       const [row,setrow] = useState ([]);

       useEffect (()=> {

        fetch ("https://jsonplaceholder.typicode.com/photos")
        .then (m => m.json())
        .then (m => {

              setrow (m)
        })
       },[])

  return (
    <div className="ag-theme-alpine" style={{height:500,width:1000}}>
        <AgGridReact
               rowData={row}
               columnDefs={column}>
           </AgGridReact>

    </div>
  )
}
