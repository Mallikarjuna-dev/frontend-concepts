import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    async function fetchPost() {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const result = await response.json();
        setPost(result);
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    if (!post) {
        return (
            <div className="p-4">Loading...</div>
        )
    }

    return (
        <div style={{ width: "600px", marginTop: "20px", margin: "auto" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
                {post.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default PostDetail;