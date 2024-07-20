import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [formData, setFormData] = useState({ title: '', content: '' });
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8000/api/post/create/', formData, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-light h1 my-5">Create a post</h1>
            <p className="text-secondary">Crafting Delicious Stories: Your Recipe Starts Here!</p>
            <form className="form-floating my-3" onSubmit={handleSubmit}>
                <div className="form-floating my-3">
                    <input type="text" id="floatingTitle" className="form-control" name="title" onChange={handleChange} placeholder='Title' />
                    <label for="floatingTitle">Title</label>
                </div>
                <div className="form-group my-3">
                    <label for="floatingContent">Your Recipe</label>
                    <textarea name="content" id="floatingContent" className="form-control" onChange={handleChange} placeholder='Content' rows="15"></textarea>
                </div>
                <button className="btn btn-lg btn-success my-3" type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;