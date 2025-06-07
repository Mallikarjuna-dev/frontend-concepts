# Task 1: 🌗 Theme Toggle App using useReducer

## 🚀 Description

This project demonstrates a theme toggle feature built with React's `useReducer` hook. It showcases how to manage complex state transitions (like toggling themes) in a predictable, centralized way.

## 🔧 Features

- Centralized state logic using `useReducer`
- Toggles between Light and Dark themes
- UI updates dynamically based on the current theme
- Clean and minimal code structure

# Task 2: Simple Counter App using useReducer

## 🚀 Description

This project demonstrates a basic implementation of the `useReducer` hook in React. It features a simple counter with "Increment" and "Decrement" buttons.

## 🔧 Features

- State managed by `useReducer`
- Two actions: INCREMENT and DECREMENT
- Dynamic UI updates based on reducer logic

# Task 3: 👁️ Toggle Message Visibility using useReducer

## 🔍 Overview

This React app demonstrates how to use the `useReducer` hook to manage simple boolean state — specifically toggling the visibility of a message.

## 🎯 Features

- Toggles message visibility on button click
- State managed through `useReducer`
- Clean, readable code with inline styles

## 🧠 Concepts Covered

- React `useReducer` hook
- Action dispatching (`TOGGLE_VISIBILITY`)
- Conditional rendering

# Task 4: 🧾 useReducer Form Handling

## 📋 Overview

This React app demonstrates form state management using the `useReducer` hook. The form captures **email** and **password**, shows submitted details, and supports reset functionality.

## ✅ Features

- State managed via `useReducer`
- Action types: `email`, `password`, `submit`, `reset`
- Validates presence of inputs before displaying result
- Resets to initial state using `reset` action
- Throws error for invalid action type

## 🧪 Example Behavior

1. On load → "No details found" is displayed.
2. Enter email/password → submit → shows the user data.

# Task 5: 🎓 College Form - useReducer

## 📌 Description

A React form that uses `useReducer` to manage deeply nested form data related to colleges, including:

- Name and Establishment Year
- Address with nested structure
- List of courses offered

## ✅ Features

- Dynamic form state using `useReducer`
- Nested and deeply nested field updates
- Add multiple courses
- Reset form to initial state
- Error handling for invalid actions

## 🧪 How to Run Locally

1. Clone the repository:

```
git clone https://github.com/your-username/theme-toggle-useReducer.git

cd theme-toggle-useReducer
```

2. Install dependencies:

```
npm install
```

3. Start the app:

```
npm run dev
```

## 📚 Learnings

- Learned how to replace multiple `useState` calls with a single `useReducer`
- Gained insight into how to structure reducer functions for scalable state management
- Experienced real-world usage of action dispatching and dynamic UI styling
- `useReducer` is useful even for simple state like booleans

## 👤 Author

Mallikarjuna Annigeri
