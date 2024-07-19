import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className="container navbar navbar-expand-lg">
            <a className="navbar-brand text-light" href="#">
                <img src={require('../assets/images/sandwich.png')} alt="Logo" width="30" height="24" className="d-inline-block mx-2 align-text-top"></img>
                Roulettech Food Blog
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-tabs mr-auto">
                    <li className="nav-item"><Link to="/signup"><span className="nav-link text-light">Sign Up</span></Link></li>
                    <li className="nav-item"><Link to="/login"><span className="nav-link text-light">Login</span></Link></li>
                    <li className="nav-item"><Link to="/feed"><span className="nav-link text-light">Feed</span></Link></li>
                    <li className="nav-item"><Link to="/post/create"><span className="nav-link text-light">Create Post</span></Link></li>
                </ul>
            </div>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;