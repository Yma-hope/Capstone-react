import './App.css'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Gallery = lazy(() => import('./Pages/Gallery'));
const Photographers = lazy(() => import('./Pages/Photographers'));
const Contacts = lazy(() => import('./Pages/Contacts'));
const Reviews = lazy(() => import('./Pages/Reviews'));
const Login = lazy(() => import('./Pages/Login'));
const Signup = lazy(() => import('./Pages/Sign up'));

//import Home from './Pages/Home'
//import About from './Pages/About'
//import Gallery from './Pages/Gallery'
//import Photographers from'./Pages/Photographers'
//import Contacts from './Pages/Contacts'
//import Reviews from './Pages/Reviews'
//import Login from './Pages/Login'
//import Signup from './Pages/Sign up'
//import Navbar from './Components/Navbar'
//import Footer from './Components/Footer'
//import ProtectedRoute from './Components/ProtectedRoute'


function App() {

  return (
    <>
        <Navbar />
        <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Protected routes */}
          <Route
            path='/about'
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path='/photographers'
            element={
              <ProtectedRoute>
                <Photographers />
              </ProtectedRoute>
            }
          />
          <Route
            path='/gallery'
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          <Route
            path='/reviews'
            element={
              <ProtectedRoute>
                <Reviews />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Suspense>
        <Footer />
        </>
  );
}

export default App;