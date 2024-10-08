import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar component */}
        <Navbar />
        {/* Define routes for the pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
