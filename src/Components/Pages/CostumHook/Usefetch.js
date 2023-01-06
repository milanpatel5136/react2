import React, { useEffect, useState } from 'react'

export default function Usefetch(url) {
 
    const[loading , setloading] = useState(true);
    const[data , setData] = useState([]);

    const getData = async()=>{

        const response = await fetch(url);
        const mydata = await response.json();

       setData(mydata);
       setloading(false);

    }

    useEffect(() => {

        getData();

    },[url]);

    return{loading,data}
    
}
