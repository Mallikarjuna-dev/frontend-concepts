import React from "react";
import Box from "./components/Box";
import { ThemeProvider, useTheme } from "./ThemeContext";

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
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
