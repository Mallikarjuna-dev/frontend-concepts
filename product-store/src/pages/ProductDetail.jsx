import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);


    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ padding: "1rem" }}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} style={{ width: "300px" }} />
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>₹{product.price}</p>
        </div>
    );
};

export default ProductDetail;
