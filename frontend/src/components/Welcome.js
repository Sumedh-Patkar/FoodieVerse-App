import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './Feed';
import { useNavigate } from 'react-router-dom';

const Welcome = ({apiServer}) => {
    const navigate = useNavigate(); 

    return (
        <div class="container text-light">
            <h1 class="display-1 fw-bold py-2">FoodieVerse Home</h1>
            <h3 class="fw-normal py-3">Welcome to the Best Food Blog in the world!</h3>
            <button className='btn btn-primary btn-lg mt-3 pt-3 pb-2 px-4' onClick={() => { navigate('/feed', {replace: true}); window.location.reload(); }}><h4 class="fw-light">View Feed</h4></button>
        </div>
    )
}

export default Welcome;
