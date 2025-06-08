import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");

    async function fetchPost() {
        const response = await fetch("https://dummyjson.com/posts");
        const result = await response.json();
        setPosts(result.posts);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input style={{ margin: "10px" }}
                type='text'
                value={query}
                placeholder='Search post by title...'
                onChange={(e) => setQuery(e.target.value)} />
            {filtered.map(post => (
                <div key={post.id} style={{ border: "1px solid black", margin: "auto", width: "600px" }}>
                    <h3>Title: <span>{post.title}</span></h3>
                    <Link to={`/posts/${post.id}`}>Read More..</Link>
                </div>
            ))}
        </div>
    )
}

export default Posts