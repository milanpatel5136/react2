import React from 'react'
import { Formik, Field, Form } from 'formik';


export default function Myform2() {
  return (
    <div>
 
     <Formik initialValues = {
{
    FirstName : "",
    MiddleName : "",
    LastName : "",
    City : "",
    State : "",
    Contry : "",
}
     }

     onSubmit = {
      (m)=>{
        console.log(m)
      }
     }


     >
        <Form>
            <label>FirstName : </label>
            <Field id="FirstName" name="FirstName"></Field>

            <label>MiddleName : </label>
            <Field id="MiddleName" name="MiddleName"></Field>

            <label>LastName : </label>
            <Field id="LastName" name="LastName"></Field>

            <label>City : </label>
            <Field id="City" name="City"></Field>

            <label>State : </label>
            <Field id="State" name="State"></Field>

            <label>Contry : </label>
            <Field id="COntry" name="Contry"></Field>

            <input type="submit" />
        </Form>
        </Formik>
    </div>
  )
}
