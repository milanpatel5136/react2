import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
export default function Api2() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          phone: "",
          website: "",
        }}
        onSubmit={(e) => {
          axios
            .post("https://jsonplaceholder.typicode.com/users", e)
            .then((e) => {
              toast("Done");
              console.log(e);
            })
        }}
      >
        <Form>
          <label>name</label>
          <Field type="text" name="name" id="name" /> <br /><br />
          <label>username</label>
          <Field type="text" name="username" id="username" /> <br /><br />
          <label>email</label>
          <Field type="text" name="email" id="email" /> <br /><br />
          <label>street</label>
          <Field type="text" name="street" id="street" /> <br /><br />
          <label>suite</label>
          <Field type="text" name="suite" id="suite" /> <br /><br />
          <label>city</label>
          <Field type="text" name="city" id="city" /> <br /><br />
          <label>zipcode</label>
          <Field type="text" name="zipcode" id="zipcode" /> <br /><br />
          <label>website</label>
          <Field type="text" name="website" id="website" /> <br /><br />
          <Field type="submit" value="Save" />
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}
