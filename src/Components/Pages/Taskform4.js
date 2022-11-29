import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    firstname: yup.string().matches(/^[A-Z]+$/, "Only alphabets are allowed for this field ").max(25).required('*Firstname is required '),
    lastname: yup.string().matches(/^[A-Z]+$/, "Only alphabets are allowed for this field ").max(25).required('*Lastname is required'),
    email: yup.string().required('*Email is required '),
    address: yup.string().max(255).required('*Address is required '),
    zipcode: yup.string().matches(/^[0-9]+$/, "Only numbres are allowed for this field ").max(6).min(6).required('*Zipcode is required '),
    mobile: yup.string().required('*Mobile is required '),
    password: yup.string().matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})",
        "Must Contain 5 Characters, One Alphabet, One Number and one special case Character"
    ).min(5).max(16).required('*Password is required '),
    confirmpassword: yup.string()
        .required().oneOf([yup.ref("password"), null], "Passwords must match"),
    city: yup.string().required('*City is required '),
    state: yup.string().required('*State is required '),
    country: yup.string().required('*Country is required ')
})

export default function Taskform4() {
    return (
        
            <div>
                <Formik initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    address: '',
                    zipcode: "",
                    mobile: '',
                    password: '',
                    confirmpassword: '',
                    city: '',
                    state: '',
                    country: ''
                }}

                    validationSchema={schema}

                    onSubmit={
                        (m) => {
                            console.log(m);
                        }
                    } >
                    <Form >
                        <label>Firstname:</label><br />
                        <Field type='text' name='firstname' placeHolder='Enter Your Firstname' />
                        <ErrorMessage name='firstname' />
                        <br /><br />

                        <label>Lastname:</label><br />
                        <Field type='text' name='lastname' placeHolder='Enter Your Lastname' />
                        <ErrorMessage name='lastname' />
                        <br /><br />

                        <label>Email:</label><br />
                        <Field type='email' name='email' placeHolder='Enter Your Email' />
                        <ErrorMessage name='email' />
                        <br /><br />

                        <label>Address:</label><br />
                        <Field type='text' name='address' placeHolder='Enter Your Address' />
                        <ErrorMessage name='address' />
                        <br /><br />

                        <label>Zip Code:</label><br />
                        <Field type='text' name='zipcode' placeHolder='Enter Your Zip Code' />
                        <ErrorMessage name='zipcode' />
                        <br /><br />

                        <label>Mobile No:</label><br />
                        <Field type='text' name='mobile' placeHolder='Enter Your Mobile No' />
                        <ErrorMessage name='mobile' />
                        <br /><br />

                        <label>Password:</label><br />
                        <Field type='password' name='password' placeHolder='Enter Your Password' />
                        <ErrorMessage name='password' />
                        <br /><br />

                        <label>Confirm Password:</label><br />
                        <Field type='password' name='confirmpassword' placeHolder='Confirm your password' />
                        <ErrorMessage name='confirmpassword' />
                        <br /><br />

                        <label>City:</label>
                        <Field as='select' name='city'>
                            <option value="select">Select</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Surat">Surat</option>
                            <option value="Junagadh">Junagadh</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Veraval">Veraval</option>
                            <option value="Somnath">Somnath</option>
                        </Field>
                        <ErrorMessage name='city' />
                        <br /><br />


                        <label>State:</label>
                        <Field as='select' name='state'>
                            <option value="select">Select</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="MH">Maharatra</option>
                            <option value="MP">Madhdhyapradesh</option>
                            <option value="UP">Uattarpradesh</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hariyana">Hariyana</option>
                        </Field>
                        <ErrorMessage name='state' />
                        <br /><br />


                        <label>Country:</label>
                        <Field as='select' name='country'>
                            <option value="select">Select</option>
                            <option value="India">India</option>
                            <option value="ucren">ucren</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="UAE">UAE</option>
                            <option value="Rasiya">Rasiya</option>
                            <option value="Japan">Japan</option>
                        </Field>
                        <ErrorMessage name='country' />
                        <br /><br />

                        <input type="submit" value="Submit" />
                    </Form>
                </Formik>
            </div>
     
  )
}