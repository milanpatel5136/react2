import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function Grid() {

    const [column,setcolumn] = useState([
        {field:'postId'},
        {field:'name', filter:'true',sortable:'true'},
        {field:'email',filter:'true',sortable:'true'},
        {field:'body', filter:'true',sortable:'true'},
    ]);

    const [row,setrow] = useState([]);

    useEffect (() => {
         
        fetch ("https://jsonplaceholder.typicode.com/comments")
        .then (m => m.json())
        .then (m => {
            
            setrow(m)
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
