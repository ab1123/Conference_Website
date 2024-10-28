import React, { useState } from 'react';
import './Navbar.css';
import ditLogo from '../../assets/images/DIT.png';
import nitLogo from '../../assets/images/nit.png';
import mrsiLogo from '../../assets/images/newLogo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ onTabClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={ditLogo} alt="DIT Logo" className="logo" />
        <img src={nitLogo} alt="NIT Logo" className="logo" />
        <img src={mrsiLogo} alt="MRSI Logo" className="logo" />
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar} aria-label="Toggle navigation">
        <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => { onTabClick('Home'); setIsOpen(false); }}>Home</Link></li>
        <li><Link to="/about" onClick={() => { onTabClick('About'); setIsOpen(false); }}>About</Link></li>
        <li><Link to="/dates" onClick={() => { onTabClick('Important Dates'); setIsOpen(false); }}>Important Dates</Link></li>
        <li><Link to="/registration" onClick={() => { onTabClick('Registrations'); setIsOpen(false); }}>Registrations</Link></li>
        <li><Link to="/submission" onClick={() => { onTabClick('Submission'); setIsOpen(false); }}>Paper Submission</Link></li>
        <li><Link to="/team" onClick={() => { onTabClick('Team'); setIsOpen(false); }}>Organizing Committee</Link></li>
        <li><Link to="/advisory" onClick={() => { onTabClick('Advisory'); setIsOpen(false); }}>National Advisory</Link></li>
        <li><Link to="/speakers" onClick={() => { onTabClick('Speakers'); setIsOpen(false); }}>Speakers</Link></li>
        <li><Link to="/contact" onClick={() => { onTabClick('Contact'); setIsOpen(false); }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
