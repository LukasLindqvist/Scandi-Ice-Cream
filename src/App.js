import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import './Components/css/Navbar.css'
import './Components/css/Footer.css'

function App() {

  return (
    <>
    <Router>
        <Navbar/>
        <ScrollToTop/>
            <Routes>
                <Route path="/Scandi-Ice-Cream" element={<LandingPage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App