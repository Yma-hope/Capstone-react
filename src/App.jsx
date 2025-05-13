import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Photographers from'./Pages/Photographers'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Reviews from './Pages/Reviews'
//import { store } from './Store'
//import { Provider } from 'react-redux'

function App() {

  return (
    <Router>
      <nav className='navbar'>
        <NavLink className="nav-link" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/photographers">Photographers</NavLink>
        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
        <NavLink className="nav-link" to="/login">Log In</NavLink>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/photographers' element={<Photographers />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
