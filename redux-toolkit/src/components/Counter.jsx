import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../features/counter/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>

    )
}

export default Counter