import React, { useReducer } from 'react'

const initialState = {
    email: "",
    password: "",
    submitted: false
};

function formReducer(state, action) {
    switch (action.type) {
        case "email":
            return { ...state, email: action.payload };
        case "password":
            return { ...state, password: action.payload };
        case "submit":
            return { ...state, submitted: true };
        case "reset":
            return initialState;
        default:
            throw new Error('invalid action type');
    }
}

const FormData = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.email && state.password) {
            dispatch({ type: 'submit' });
        }
    };

    return (
        <div style={styles.container}>
            <form onClick={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Submit</button>
                <button type="button" onClick={() => dispatch({ type: "reset" })} style={{ ...styles.button }}>
                    Reset
                </button>
            </form>
            <div style={styles.output}>
                {!state.submitted ? (
                    <div>No details found</div>
                ) : (
                    <div>
                        <div>User Email: {state.email}</div>
                        <div>User Password: {state.password}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    input: {
        padding: '0.3rem',
        fontSize: '13px'
    },
    button: {
        padding: '0.3rem',
        fontSize: '13px',
        cursor: 'pointer'
    },
    output: {
        marginTop: '2rem',
        fontSize: '18px'
    }
};

export default FormData