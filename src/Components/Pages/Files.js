import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Files() {

    const [data,setdata] = useState (null);
    const [data2,setdata2] = useState ([]);

    const myhandler =(m) => {
  
        console.log(m.target.files)


        setdata(m.target.files[0]);

    }

    const savedata =()=> {
        
        let formData = new FormData();
        formData.append("file",data);

        axios.post("http://localhost:8080/upload",formData).then(n=>{
            console.log(n.data);
        })
    }


    useEffect(() => {
      
    
     axios.get("http://localhost:8080/files").then(y=>{
        setdata2(y.data)
     })
    }, [])
    
    
  return (
    <div>
        <input type="file" onChange={myhandler}/>

        <input type="button" onClick={savedata} value="Save"/>

        {
            data2.map((value) => {
                return(
                    <>
                    <tr>
                        <td>{value.name}</td>
                        <td>{value.url}</td>
                        <td><a href={value.url}>Download</a></td>
                    </tr>
                    </>
                )
            })
        }
    </div>
  )
}
