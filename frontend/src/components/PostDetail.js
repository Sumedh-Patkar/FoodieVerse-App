import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { post_id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try {
                console.log("Sending request to the backend for single post details")
                console.log(post_id)
                const response = await axios.get(`http://localhost:8000/api/post/${post_id}/`);
                setPost(response.data);
            } catch(error) {
                console.error(error);
            }
        };

        fetchPost();
    }, [post_id]);

    return (
        <div className="container">
            <div className="column text-light">
                <div className="row">
                    <img src={require('../assets/images/food-bg.jpg')} className="card-img-top pb-3" alt="..."></img>
                </div>
                <div className="row">
                    <h1 className="text-light h1 my-5">{post.title}</h1>
                </div>
                <div className="row">
                <h5 className="h5 text-light">{post.subtitle}</h5>
                </div>
                <div className="row">
                    <p className="card-text h6 fw-bold">{post.author}<span className="fw-light"> | {new Date(post.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                </div>
                <hr className="hr hr-blurry" />
                <div className="row border-">
                    <p className="text-light" style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
                </div>
            </div>
        </div>
    )
};

export default PostDetail;