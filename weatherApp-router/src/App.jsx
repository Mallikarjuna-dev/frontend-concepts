import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import WeatherDetails from './WeatherDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather/:city' element={<WeatherDetails />} />
      </Routes>
    </>
  )
}

export default App;
