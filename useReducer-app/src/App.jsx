import './App.css'
import Counter from './Counter'
import ThemeToggle from './ThemeToggle'

function App() {

  return (
    <>
      {/* Task 1: theme toggler */}
      <ThemeToggle />

      <hr style={{ marginTop: "20px" }} />

      {/* Task 2: Counter app */}
      <Counter />

      <hr style={{ marginTop: "20px" }} />
    </>
  )
}

export default App
