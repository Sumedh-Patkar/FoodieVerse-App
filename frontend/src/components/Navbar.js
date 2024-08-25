import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({apiServer}) => {
    const token = localStorage.getItem('token');
    
    return (
        <nav className="container navbar navbar-expand-lg">
            <a className="navbar-brand text-light" href="#">
                <img src={require('../assets/images/hamburger.png')} alt="Logo" width="30" height="24" className="d-inline-block mx-2 align-text-top"></img>
                FoodieVerse
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-tabs mr-auto">
                    <li className="nav-item"><Link to="/signup"><span className="nav-link text-light">Sign Up</span></Link></li>
                    <li className="nav-item"><Link to="/login"><span className="nav-link text-light">Login</span></Link></li>
                    <li className="nav-item"><Link to="/feed"><span className="nav-link text-light">Feed</span></Link></li>
                    <li className="nav-item"><Link to="/post/create"><span className="nav-link text-light">Create Post</span></Link></li>
                </ul>
            </div>

            {/* Conditionally render Logout component only if token exists */}
            {token && (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Logout apiServer={apiServer} /> {/* Render the Logout component */}
                    </li>
                </ul>
            )}

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;