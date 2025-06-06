import React from "react";
import BottomMainRight from "./BottomMainRight";

const Bottom = ({ userName }) => {
    return (
        <div style={{ border: "1px solid orange", padding: "10px" }}>
            <h4>Bottom Component</h4>
            <BottomMainRight userName={userName} />
        </div>
    );
};

export default Bottom;
