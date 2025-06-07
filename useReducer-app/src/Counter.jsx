import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

function countReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);
    return (
        <div style={{ margin: "50px" }}>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    )
}

export default Counter;