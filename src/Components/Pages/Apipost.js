import { React, useState } from 'react';
import axios from 'axios'

const Apipost = () => {

    const [data, setdata] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: "true"
    });

    const myHandler = (m) => {
        setdata({ ...data, [m.target.name]: m.target.value })
    }

    const mySubmit = (m) => {
        m.preventDefault()

        axios.post("http://localhost:4000/accounts/register", data)
            .then(n => {

                console.log(n.data);
            })
    }
    return (
        <div>
            <form onSubmit={mySubmit}>
                <label>Title: </label>
                <input type="text" name="title" onChange={myHandler} /><br /><br/>
                <label>First name: </label>
                <input type="text" name="firstName" onChange={myHandler} /><br /><br/>
                <label>Last name: </label>
                <input type="text" name="lastName" onChange={myHandler} /><br /><br/>
                <label>Email: </label>
                <input type="email" name="email" onChange={myHandler} /><br /><br/>
                <label>Password: </label>
                <input type="password" name="password" onChange={myHandler} /><br /><br/>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={myHandler} /><br /><br/>

                <input type="submit" value="save" />
            </form>
        </div>
    );
}

export default Apipost;