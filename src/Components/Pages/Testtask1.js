import React, { useEffect, useState } from "react";
import Testtask2 from "./Testtask2";
import axios from "axios";

export default function Testtask1() {
  const [demo, setdemo] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((y) => {
      setdemo(y.data);
    });
  }, []);
  return (
    <div>
      {demo.map((e) => {
        return <Testtask2 vs={e}></Testtask2>;
      })}
       
    </div>
  );
}
