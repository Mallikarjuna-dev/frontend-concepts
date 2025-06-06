import React from "react";
import Bottom from "./Bottom";

const Top = ({ userName }) => {
    return (
        <div style={{ border: "1px solid blue", padding: "10px" }}>
            <h2>Top Component</h2>
            <Bottom userName={userName} />
        </div>
    );
};

export default Top;
