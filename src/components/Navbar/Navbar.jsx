import React, { useState } from 'react';
import './Navbar.css';
import ditLogo from '../../assets/images/DIT.png';
import nitLogo from '../../assets/images/nit.png';
import mrsiLogo from '../../assets/images/newLogo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
      <button 
        className="menu-toggle" 
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="menu-icon" />
        ) : (
          <Menu className="menu-icon" />
        )}
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => { onTabClick('Home'); setIsOpen(false); }}>Home</Link>
        <Link to="/about" onClick={() => { onTabClick('About'); setIsOpen(false); }}>About</Link>
        <Link to="/dates" onClick={() => { onTabClick('Important Dates'); setIsOpen(false); }}>Important Dates</Link>
        <Link to="/registration" onClick={() => { onTabClick('Registrations'); setIsOpen(false); }}>Registrations</Link>
        <Link to="/submission" onClick={() => { onTabClick('Submission'); setIsOpen(false); }}>Paper Submission</Link>
        <Link to="/team" onClick={() => { onTabClick('Team'); setIsOpen(false); }}>Organizing Committee</Link>
        <Link to="/advisory" onClick={() => { onTabClick('Advisory'); setIsOpen(false); }}>National Advisory</Link>
        <Link to="/speakers" onClick={() => { onTabClick('Speakers'); setIsOpen(false); }}>Speakers</Link>
        <Link to="/contact" onClick={() => { onTabClick('Contact'); setIsOpen(false); }}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
