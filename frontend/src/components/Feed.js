import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/feed/');
                setPosts(response.data);
                console.log("Hello from Feed!")
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <Link to={`/post/${post.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default Feed;