import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '16px', background: '#eee' }}>
            <Link to="/">Home</Link>
        </nav>
    );
};

export default Navbar;
