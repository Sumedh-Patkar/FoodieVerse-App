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
        <div className="container">
            <h1 className="text-light h1 my-5">Feed</h1>
            <div className="row row-cols-2 g-4">
            {posts.map((post) => (
                <div className="col">
                    <div className="card p-3" key={post.id}>
                        <img src={require('../assets/images/food-bg.jpg')} className="card-img-top pb-3" alt="..."></img>
                        <h3 className="card-title ">{post.title}</h3>
                        <h5>{post.subtitle}</h5>
                        <p className="card-text h6 fw-light"><span className="fw-bold">Published:</span> {post.publish_date}</p>
                        <p className="card-text h6 fw-light"><span className="fw-bold">Author:</span> {post.author}</p>
                        <p className="card-text h6 text-secondary fw-light">{post.content}</p>
                        <Link to={`/post/${post.id}`}><button className="btn btn-success mt-4 mb-2 fw-normal">Read More</button></Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Feed;