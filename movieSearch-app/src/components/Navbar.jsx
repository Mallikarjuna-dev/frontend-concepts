import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ padding: "15px", background: "#eee" }}>
        <Link to="/">Home</Link>
    </nav>
);

export default Navbar;
