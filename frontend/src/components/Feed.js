import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    // Function to truncate paragraph content to 200 characters
    const truncateContent = (content, maxLength) => {
        if (content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + '...';
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://18.117.250.24/api/feed/');
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
            {posts.map((post, index) => (
                <div className="col">
                    <div className="card p-3" key={post.id}>
                        <img src={require('../assets/images/food-bg' + (index+1) + '.jpg')} className="card-img-top pb-3" alt="..."></img>
                        <h4 className="card-title ">{post.title}</h4>
                        <h5 className="text-secondary fw-light">{post.subtitle}</h5>
                        <hr className="hr hr-blurry" />
                        <p className="card-text h6 fw-bold">{post.author}<span className="fw-light"> | {new Date(post.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                        <p className="card-text h6 text-secondary fw-light">{truncateContent(post.content, 200)}</p>
                        <Link to={`/post/${post.id}`}><button className="btn btn-success mt-4 mb-2 fw-normal">Read More</button></Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Feed;