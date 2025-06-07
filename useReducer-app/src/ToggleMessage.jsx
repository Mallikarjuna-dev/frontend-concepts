import React, { useReducer } from 'react'

const initialState = {
    isVisible: false,
}


function toggleReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_VISIBILITY":
            return { isVisible: !state.isVisible }
        default:
            return state;
    }
}
const ToggleMessage = () => {
    const [state, dispatch] = useReducer(toggleReducer, initialState);

    return (
        <div style={{ margin: "50px" }}>
            <h1>Toggle Message using useReducer</h1>
            <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>Toggle Message</button>
            {state.isVisible && <p>Hello, World!</p>}
        </div>
    )
}

export default ToggleMessage