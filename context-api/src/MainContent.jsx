import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const MainContent = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <main style={{ padding: "20px" }}>
            {isLoggedIn ? (
                <h2>You are logged in. Enjoy your session!</h2>
            ) : (
                <h2>Please log in to continue.</h2>
            )}
        </main>
    );
};

export default MainContent;
