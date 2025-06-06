import React from "react";
import { useTheme } from "../ThemeContext";

export default function NestedBox() {
    const { theme } = useTheme();

    const styles = {
        backgroundColor: theme === "light" ? "#e0e0e0" : "#555555",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "15px",
        marginTop: "10px",
        borderRadius: "6px",
    };

    return (
        <div style={styles}>
            <h3>Nested Box Component</h3>
            <p>This box also adapts to the theme.</p>
        </div>
    );
}
