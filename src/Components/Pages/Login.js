import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  

  const myNav = useNavigate();

//   const changeInput = (e) => {

//     setdata ({...data,[e.target.name] : e.target.value});
//   }

//   const  mySubmit=(e)=>{

//     e.preventDefault();

//     axios.post("http://localhost:4000/accounts/authenticate",data)
//     .then(y=>{
//         console.log(y)
// ;

//         localStorage.setItem("userInfo",JSON.stringify(y.data));
        
//         myNav("/productlist");
//     })



  // const FetchData = (e)=> {

  //   axios.get("http://localhost:4000/accounts" ).then (e=> {
  //     console.log(e.data);
  //   })
  //   .catch (
  //     e => {
  //      console.log(e);
  //   })
  // }

   

  return (
    <div>
   
   <Formik initialValues = {
    {
        email : "",
        password : "",
    }
   } 
   onSubmit={(e) => {
    console.log(e);

    axios.post("http://localhost:4000/accounts/authenticate ", e)
      .then((y) => {
        console.log(y)

        localStorage.setItem("user",JSON.stringify(e.data))
        myNav("/product")
        toast("login successfully");
      })
      .catch((y) => {
        toast("Not successfully");

        

        console.log(y);
       });
         }}
        

   
   >
    <Form>
          <label>Email : </label>
          <Field name="email" type="text">

          </Field>
          <label>Password : </label>
          <Field name="password" type="text">

          </Field>
          

          <input type="submit" value="save"/>
          
    </Form>
             
            
    </Formik>
    {/* <button onClick={FetchData}>FetchData</button> */}

    <ToastContainer />

    </div>
  )
  }

