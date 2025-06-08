import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar;