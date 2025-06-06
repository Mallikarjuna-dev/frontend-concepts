import React from "react";
import NestedBox from "./NestedBox";
import { useTheme } from "../ThemeContext";

export default function Box() {
    const { theme } = useTheme();

    const styles = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "8px",
    };

    return (
        <div style={styles}>
            <h2>Box Component</h2>
            <NestedBox />
        </div>
    );
}
