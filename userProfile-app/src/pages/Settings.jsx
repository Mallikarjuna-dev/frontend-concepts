import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const Settings = () => {
    const { user, updateUser } = useContext(UserContext);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ name, email });
        alert('User updated!');
    };

    return (
        <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <button type="submit" style={{ marginTop: '1rem' }}>Update</button>
            </form>
        </div>
    );
};

export default Settings;
