import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import About from './components/About';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
