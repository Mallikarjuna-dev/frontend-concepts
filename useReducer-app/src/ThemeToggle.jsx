import React, { useReducer } from 'react';

const initialState = {
    theme: 'light'
};

function themeReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
}

function ThemeToggle() {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const lightTheme = {
        backgroundColor: '#f9f9f9',
        color: '#222'
    };
    const darkTheme = {
        backgroundColor: '#222',
        color: '#f9f9f9'
    };

    const currentThemeStyles = state.theme === 'light' ? lightTheme : darkTheme;

    return (
        <div style={{ ...styles.container, ...currentThemeStyles }}>
            <h2>Theme Toggle using useReducer</h2>
            <p>Current Theme: <strong>{state.theme}</strong></p>
            <button
                onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
                style={styles.button}
            >
                Toggle Theme
            </button>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '90vh',
        padding: '50px',
        transition: 'all 0.3s ease',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    },
    button: {
        marginTop: '14px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default ThemeToggle;
