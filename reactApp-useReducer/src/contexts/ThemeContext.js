import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const initialState = {
    theme: 'light',
};

function themeReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            throw new Error('Invalid theme action type');
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
