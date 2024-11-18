import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Countdown from './components/Countdown/Countdown';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Dates from './pages/Dates/Dates';
import Speakers from './pages/Speakers/Speakers';
import Submission from './pages/Submission/Submission';
import Registration from './pages/Registartion/Resgistration';
import Team from './pages/Team/Team';
import Advisory from './pages/Advisory/Advisory';
import Contact from './pages/Contact/Contact';
import './App.css';
import HeroSection from './pages/HeroPage/HeroPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/about" element={<About />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
