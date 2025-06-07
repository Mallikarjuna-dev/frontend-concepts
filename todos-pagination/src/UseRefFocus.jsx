import React, { useRef, useState } from 'react';
import './useref.css';

const UseRefFocus = () => {
    const inputRef = useRef(null);
    const [message, setMessage] = useState('');

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = '#e0f7fa';
            setMessage('Focused!');
        }
    };

    return (
        <div className="container">
            <h2>Focus Input with useRef</h2>
            <input type="text" ref={inputRef} placeholder="Click the button to focus" />
            <button onClick={handleFocus}>Focus Input</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default UseRefFocus;
