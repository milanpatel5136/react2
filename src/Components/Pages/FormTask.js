import { Field, Formik,Form, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup';

let schema = yup.object().shape({
    FirstName: yup.string().required("FirstName is required"),
    LastName: yup.string().required("LastName is required"),
    MobilNo: yup.string().required("MobilNo is required"),
    Address: yup.string().required("Address is required"),
    City: yup.string().required("City is required"),
    Email: yup.string().required("Email is required"),
    Password: yup.string().required("Password is required"),
})


export default function FormTask() {
  return (
    <div>

        <Formik 
         validationSchema={schema}

        initialValues={
            {
                FirstName : "",
                LastName : "",
                MobilNo : "",
                Address : "",
                City : "",
                Email : "",
                Password : "",
            }
        }

        

        onSubmit = {
            (n)=> {
                console.log(n)
            }
        }

        >
            <Form>
                <label>FirstName : </label>
                <Field id="FirstName" name="FirstName"></Field>
                <ErrorMessage 
                         name = "FirstName"
                         component="div"
                         classname="text-denger"
                />

                <label>LastName : </label>
                <Field id="LastName" name="LastName"></Field>
                <ErrorMessage 
                         name = "LastName"
                         component="div"
                         classname="text-denger"
                />


                <label>MobilNO : </label>
                <Field id="MobilNo" name="MobilNo"></Field>
                <ErrorMessage 
                         name = "MobilNo"
                         component="div"
                         classname="text-denger"
                />


                <label>Address : </label>
                <Field id="Address" name="Address"></Field>
                <ErrorMessage 
                         name = "Address"
                         component="div"
                         classname="text-denger"
                />


                <label>City : </label>
                <Field id="City" name="City"></Field>
                <ErrorMessage 
                         name = "City"
                         component="div"
                         classname="text-denger"
                />


                <label>Email : </label>
                <Field type="Email" id="Email" name="Email"></Field>
                <ErrorMessage 
                         name = "Email"
                         component="div"
                         classname="text-denger"
                />


                <label>Password : </label>
                <Field type="password" id="Password" name="Password"></Field>
                <ErrorMessage 
                         name = "Password"
                         component="div"
                         classname="text-denger"
                />


                <input type="Submit"/>
            </Form>
        </Formik>
    </div>
  )
}
