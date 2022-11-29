import { Field, Formik,Form } from 'formik'
import React from 'react'

export default function FormTask3() {
  return (
    <div>


        <Formik initialValues={
            {
               CarNumber : "",
               CarModal : "",
               CompnyName : "",
               Engine : "",
               Enginetype : "",
               Fualtype : "",

            }
        }

        onSubmit = {
            (m) => {
                console.log(m)
            }
        }
        >
            <Form>
                <label>CarNumber : </label>
                <Field id="CarNumber" name="CarNumber"></Field><br/><br/>
                 
                <label>CarModal </label>
                <Field as="Select" name="CarModal">
                    <option value="Alto800">Alto 800</option>
                    <option value="A7">A7</option>
                    <option value="Scorpio S11">Scorpio S11</option>
                    <option value="Funty">Funty</option>
                </Field><br/><br/>

                <label>CompnyName : </label>
                <Field as="Select" name="CompnyName">
                <option value="Suzuki">Suzuki</option>
                <option value="Audi">Audi</option>
                <option value="Mahindra">Mahindra</option>
                </Field><br/><br/>

                <label>Enginetype : BS6</label>
                <Field type="checkbox" name="Engine"/><br/><br/>

                <label>Modal : </label>
                <Field type="checkbox" name="Enginetype"/>SUV<br/><br/>

                <label>Fualtype : </label>
                <Field type="radio" name="Fualtype" value="CNG"/>CNG
                <Field type="radio" name="Fualtype" value="Petrol"/>Petrol
                <Field type="radio" name="Fualtype" value="Electric"/>Electric<br/><br/>

                <input type="submit" value="Save"/>
                
            </Form>

        </Formik>
    </div>
  )
}
