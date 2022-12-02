import { React, useState } from 'react';
import axios from 'axios'

const Apipost = () => {

    const [data, setdata] = useState({
        title: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const myHandler = (m) => {
        setdata({ ...data, [m.target.name]: m.target.value })
    }

    const mySubmit = (m) => {
        m.preventDefault()

        axios.post("http://192.168.1.15:4000/accounts/register", data)
            .then(n => {

                console.log(n.data);
            })
    }
    return (
        <div>
            <form onSubmit={mySubmit}>
                <label>Title:</label>
                <input type="text" name="title" onChange={myHandler} /><br />
                <label>First name:</label>
                <input type="text" name="firstname" onChange={myHandler} /><br />
                <label>Last name:</label>
                <input type="text" name="lastname" onChange={myHandler} /><br />
                <label>Email:</label>
                <input type="email" name="email" onChange={myHandler} /><br />
                <label>Password:</label>
                <input type="password" name="password" onChange={myHandler} /><br />
                <label>Confirm Password:</label>
                <input type="password" name="confirmpassword" onChange={myHandler} /><br />

                <input type="submit" value="save" />
            </form>
        </div>
    );
}

export default Apipost;