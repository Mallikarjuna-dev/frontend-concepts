import React, { useState } from "react";
import Box from "./components/Box";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Top from "./Top";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  const appStyles = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyles}>
      <h1>Theme Context Example</h1>
      <button onClick={toggleTheme}>
        Toggle Theme (Current: {theme})
      </button>
      <Box />
    </div>
  );
}

export default function App() {
  const [userName, setUserName] = useState("");
  return (
    <>
      {/* Task 1: prop Drilling */}
      <div>
        <h1>Prop Drilling Demo</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Top userName={userName} />
      </div>

      {/* Theme toggler */}
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </>
  );
}
