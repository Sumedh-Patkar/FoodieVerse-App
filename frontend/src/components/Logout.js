import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * Logout component
 */
const Logout = () => {
    const navigate = useNavigate(); 

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://18.117.250.24/api/logout/');
            // Clear the token from localStorage
            console.log(response)
            localStorage.removeItem('token');

            // Optionally, perform additional logout logic (e.g., redirect, clear user data)
            console.log("Logged out successfully!");

            navigate(`/feed`, { replace: true }); // <-- redirect
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <button type="button" className="btn btn-lg btn-danger my-3" 
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables."
                onClick={handleLogout}>
                    Logout
            </button>
        </div>
    );
};

export default Logout;