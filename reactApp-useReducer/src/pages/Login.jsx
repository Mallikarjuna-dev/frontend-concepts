import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'LOGIN', payload: { email } });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;