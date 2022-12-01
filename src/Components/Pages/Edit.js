import React from "react";
import { useState } from "react";
import TestData from "./Edit1";

const Pform = () => {
  const [Data, setData] = useState([]);
  const [Add, setAdd] = useState(-1)
  const [Item, setItem] = useState({
    Cname: "",
    Cno: "",
  });

  const remove = (index) => {
    let mydata = [...Data];
    mydata.splice(index, 1);
    setData(mydata);
  };
  

  //   ----------------------------------------------------------------
  const handler = (e) => {
    setItem({ ...Item, [e.target.name]: e.target.value });
  };
  //   ----------------------------------------------------------------
  const add = (index) => {
    let mydata = Data[index];
    setItem(mydata)
    setAdd(index);
  };
//   -----------------------------------------------------------------
  const submitt = (e) => {
    e.preventDefault();
    if (Add >= 0) {
        let d = [...Data]
        d[Add].Cname = Item.Cname;
        d[Add].Cno = Item.Cno;
      setData(d)
      
      setAdd(-1);
    } else {
    let mydata = [...Data];
    mydata.push(Item);
    setData(mydata);
    }
   
   
    
  };
  //   ----------------------------------------------------------------
  return (<div>
    <form onSubmit={submitt}>
      <input type="text" name="Cname" value={Item.Cname} onChange={handler} />
      <input type="text" name="Cno" value={Item.Cno} onChange={handler} />
      <input type="submit" value="Save" className="btn btn-danger" />
      
    </form>
    <TestData datas={Data} delet={remove} add={add} />
    </div>
  );
}

export default Pform;