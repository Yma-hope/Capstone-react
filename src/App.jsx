import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Photographers from'./Pages/Photographers'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Reviews from './Pages/Reviews'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

//import { store } from './Store'
//import { Provider } from 'react-redux'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/photographers' element={<Photographers />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
