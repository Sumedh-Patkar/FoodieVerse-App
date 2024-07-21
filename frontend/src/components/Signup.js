import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/** 
 *  SignUp component using function based components (for now)
*/
const SignUp = ({apiServer}) => {
    const [formData, setFormData] = useState({ username: '', password: ''});
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://' + apiServer +'/api/signup/', formData);
            console.log("Hello from SignUp!")
            console.log(response.data);
            navigate(`/login`, { replace: true }); // <-- redirect
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-light h1 my-5">Create an Account</h1>
            <h5 className="text-secondary h5">Join us today for <br></br> Kangawesome Food Recipes!</h5>
            <form className="form-floating my-3" onSubmit={handleSubmit}>
                <div className="form-floating my-3">
                    <input type="text" id="floatingUsername" className="form-control" name="username" onChange={handleChange} placeholder="Username"></input>
                    <label for="floatingUsername">Username</label>
                </div>
                <div className="form-floating my-3">
                    <input type="password" id="floatingPassword" className="form-control" name="password" onChange={handleChange} placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating my-3">
                    <input type="text" id="floatingFirstName" className="form-control" name="first_name" onChange={handleChange} placeholder="First Name"></input>
                    <label for="floatingFirstName">First Name</label>
                </div>
                <div className="form-floating my-3">
                    <input type="text" id="floatingLastName" className="form-control" name="last_name" onChange={handleChange} placeholder="Last Name"></input>
                    <label for="floatingLastName">Last Name</label>
                </div>
                <div className="form-floating my-3">
                    <input type="email" id="floatingInput" className="form-control" name="email" onChange={handleChange} placeholder="Email"></input>
                    <label for="floatingInput">Email address</label>
                </div>
                <button className="btn btn-lg btn-success my-3" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;