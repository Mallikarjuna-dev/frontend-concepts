import React from "react";

const BottomMainRight = ({ userName }) => {
    return (
        <div style={{ border: "1px solid red", padding: "10px" }}>
            <h6>BottomMainRight Component</h6>
            <p>👋 Hello, {userName || "Guest"}!</p>
        </div>
    );
};

export default BottomMainRight;
