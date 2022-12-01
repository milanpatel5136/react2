import React from 'react'

export default function Edit1(props) {

    console.log(props)
  return (
    <div>{props?.datas?.map((element,index)=> {
        return(<div key={index}><span>{element.Cname}</span>  {element.Cname}  <button onClick={()=> {props.add(index)}}>edit</button> <button onClick={()=>{props.delet(index)}}>delete</button></div>)
    })}</div>
  )
}
