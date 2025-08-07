import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import me3 from '../assets/img/me2.jpg';
import { FaDownload } from 'react-icons/fa';
import cv from '../assets/img/Mnahil Naseer.pdf.pdf';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex items-center justify-between p-4 fixed w-full z-30 shadow-xl ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={me3} alt="Mnahil Naseer Logo" className="w-10 h-10 rounded-full object-cover" />
        <p className="text-lg font-bold ml-2">MNfolio</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-bold">
        <Link to="/" className="hover:underline underline-offset-8 transition-transform duration-300">HOME</Link>
        <Link to="/about" className="hover:underline underline-offset-8 transition-transform duration-300">ABOUT ME</Link>
        <Link to="/projects" className="hover:underline underline-offset-8 transition-transform duration-300">PROJECTS</Link>
        <Link to="/contact" className="hover:underline underline-offset-8 transition-transform duration-300">CONTACT</Link>
        <a href={cv} download="Mnahil_Naseer_CV.pdf" className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                        <FaDownload className="text-lg" /> Download CV
                    </a>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="ml-4 text-2xl focus:outline-none">
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={handleMenuToggle} className="md:hidden text-2xl focus:outline-none">
        {isOpen ? '✖️' : '☰'}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-14 right-4 w-44 rounded-lg ${darkMode ? 'bg-black shadow-inner shadow-gray-700 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link to="/" onClick={handleMenuToggle} className="hover:underline underline-offset-8 transition-transform duration-300">HOME</Link>
            <Link to="/about" onClick={handleMenuToggle} className="hover:underline underline-offset-8 transition-transform duration-300">ABOUT ME</Link>
            <Link to="/projects" onClick={handleMenuToggle} className="hover:underline underline-offset-8 transition-transform duration-300">PROJECTS</Link>
            <Link to="/contact" onClick={handleMenuToggle} className="hover:underline underline-offset-8 transition-transform duration-300">CONTACT</Link>
          <a href={cv} download="Mnahil_Naseer_CV.pdf" className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                        <FaDownload className="text-lg" /> Download CV
                    </a>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="text-2xl focus:outline-none">
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
