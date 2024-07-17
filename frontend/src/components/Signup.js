import React, { useState } from 'react';
import axios from 'axios';

/** 
 *  SignUp component using function based components (for now)
*/
const SignUp = () => {
    const [formData, setFormData] = useState({ username: '', password: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/signup/', formData);
            console.log("Hello from SignUp!")
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <input type="text" name="first_name" onChange={handleChange} placeholder="First Name" />
            <input type="text" name="last_name" onChange={handleChange} placeholder="Last Name" />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp;