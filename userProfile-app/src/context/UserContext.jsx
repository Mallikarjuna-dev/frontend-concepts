import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Mallikarjuna',
        email: 'mallik@example.com',
    });

    const updateUser = (updatedUser) => {
        setUser((prev) => ({ ...prev, ...updatedUser }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
