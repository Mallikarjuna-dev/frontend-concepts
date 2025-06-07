import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
    const { state: themeState, dispatch: themeDispatch } = useTheme();
    const { state: authState, dispatch: authDispatch } = useAuth();

    return (
        <nav className={`p-4 flex justify-between ${themeState.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h1>React Auth + Search</h1>
            <div className="space-x-4">
                <button onClick={() => themeDispatch({ type: 'TOGGLE_THEME' })}>Toggle Theme</button>
                {authState.isAuthenticated ? (
                    <button onClick={() => authDispatch({ type: 'LOGOUT' })}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;