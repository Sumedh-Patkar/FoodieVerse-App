import React, { useState } from 'react';
import axios from 'axios';

/**
 * Login component using function based components (for now)
 */
const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', formData);
            localStorage.setItem('token', response.data.token);

            console.log("Hello from Login!")
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder='Username' />
            <input type="password" name="password" onChange={handleChange} placeholder='Password' />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;