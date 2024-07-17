import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [formData, setFormData] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8000/api/post/create/', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} placeholder='Title' />
            <textarea name="content" onChange={handleChange} placeholder='Content'></textarea>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;