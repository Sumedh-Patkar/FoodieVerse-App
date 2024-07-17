import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav>
            <ul>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/feed">Feed</Link></li>
                <li><Link to="/post/create">Create Post</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;