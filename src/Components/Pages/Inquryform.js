import React from 'react'
import { Formik, Field, Form } from 'formik';


export default function Inquryform() {
  return (
    <div>
        <h2 className='container-fluid'>Student Details</h2>

        <Formik initialValues = {
{
    Student : "",
    Parents  : "",
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
            <div className='container-fluid'>

            <label>Student/Trainer Name : </label><br/>     
            <input type="text" name='Student' className='w-50'/><br/><br/> 
            
            <label>Parents Name : </label><br/>
            <input type="text" className='w-50'/><br/><br/>

            <label>Birth Data : </label><br/>
            <input type="date" className='w-50'/><br/><br/>


            <label>Gender : </label><br/>
             
             <select className='w-50'>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
             </select><br/><br/>

            <label>Marital Status : </label><br/>

            
            <select className='w-50'>
                <option>Select Marital Status ...</option>
                <option>Merrid</option>
                <option>UnMerrid</option>
             </select><br/><br/>
            


            <label>Medium : </label><br/>
           
           
            <select className='w-50'>
                <option>Select Medium...</option>
                <option>Gujarati</option>
                <option>English</option>
                <option>Hindi</option>
             </select><br/><br/>
            
             <label>Education : </label><br/>
           
           
           <select className='w-50'>
               <option>Select Education ...</option>
               <option>10th</option>
               <option>12th</option>
               <option>Collage</option>
            </select><br/><br/>

            <label>Collage/School/Company : </label><br/>
            <input type="text" className='w-50'/><br/><br/><br/>


            <div>
                <h2>Student Contact Details</h2>
                
                <div className='container-fluid'>

                <label>Contry<sup className='text-danger'>*</sup> : </label><br/>      
                
                <select className='w-50'>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Africa</option>
                </select><br/><br/>

                <label>State<sup className='text-danger'>*</sup> : </label><br/>

                <select className='w-50'>
                    <option>Gujarat</option>
                    <option>Maharastra</option>
                    <option>Panjab</option>
                    <option>Rajasthan   </option>
                </select><br/><br/>

                <label>Area<sup className='text-danger'>*</sup> : </label><br/>  

                <select className='w-50'>
                    <option>Select Area</option>
                    <option>Fatehgung</option>
                    <option>Nizampura</option>
                    <option>Sama-Savali</option>
                </select><br/><br/>


                <label>Native Place : </label><br/>  
                <input type="text" className='w-50'/><br/><br/> 


                <label>Permanent Address : </label><br/>
                <textarea className="row-4 col=50 w-50"/><br/><br/>


                <label>Zip Code : </label><br/>
                <input type="text" className='w-50'/><br/><br/> 
                
                <label>Mobile No<sup className='text-danger'>*</sup> : </label><br/>
                <input type="text"/>

                <input type="checkbox"  />
                <label>SMS OTP-OUT </label><br/><br/>

                <label>Email : </label><br/>
                <input type="text"/>

                <input type="checkbox"  />
                <label>Unsubscribe Email </label><br/><br/>
                
                <label>WhatsApp Number : </label><br/>            
                <input type="text" className='w-50'/><br/><br/><br/>


                </div>
            </div>
            <input type="submit" />

            </div>
        </Form>
        </Formik>
    </div>
  )
}
