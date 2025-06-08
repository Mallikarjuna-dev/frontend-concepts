import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("");

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const categories = [...new Set(products.map(p => p.category))];

    let filteredProducts = [...products];

    if (category !== "all") {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    if (sort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div style={{ padding: "14px" }}>
            <h2>Product List</h2>
            <div>
                <label>Filter by category: </label>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    {categories.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                <label style={{ marginLeft: '14px' }}>Sort by price: </label>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="">None</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                {filteredProducts.map(product => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
                        <h3>{product.title}</h3>
                        <p>₹{product.price}</p>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
