import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * Login component using function based components (for now)
 */
const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: ''});
    const navigate = useNavigate(); 

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

            navigate(`/feed`, { replace: true }); // <-- redirect
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-light h1 my-5">Log In to your account</h1>
            <h5 className="text-secondary h5">Jump in like a kangaroo with your username and password!</h5>
            <form className="form-floating my-3" onSubmit={handleSubmit}>
                <div className="form-floating my-3">
                    <input type="text" id="floatingUsername" className="form-control" name="username" onChange={handleChange} placeholder="Username"></input>
                    <label for="floatingUsername">Username</label>
                </div>
                <div className="form-floating my-3">
                    <input type="password" id="floatingPassword" className="form-control" name="password" onChange={handleChange} placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
                </div>
            <button className="btn btn-lg btn-success my-3" type="submit">Login</button>
        </form>
        </div>
    );
};

export default Login;