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
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
};

export default PostDetail;