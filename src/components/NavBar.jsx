import React, { useState } from 'react';
import me3 from '../assets/img/me2.jpg';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex items-center justify-between animate-slideinLeft p-2 fixed w-full z-30 shadow-xl ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="flex items-center">
        <img src={me3} alt="Mnahil Naseer Logo" className="w-10 h-10 rounded-full object-cover" />
        <p className="text-lg font-bold ml-2">MNfolio</p>
      </div>
      <div className="hidden md:flex animate-slideDown md:items-center md:space-x-4 text-sm font-bold">
        {['HOME', 'ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.replace(' ', '').toLowerCase()}`} className=" hover:underline underline-offset-8 transition-transform duration-300">
            {item}
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-2xl -mt-1 focus:outline-none"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <button 
        onClick={handleMenuToggle} 
        className="md:hidden text-2xl focus:outline-none"
      >
        {isOpen ? '✖️' : '☰'}
      </button>
      {isOpen && (
        <div className={`md:hidden absolute top-14 right-2 w-40 rounded-lg ${darkMode ? 'bg-black shadow-inner shadow-gray-700 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
          <div className="flex flex-col items-center space-y-4 p-4">
            {['HOME', 'ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
              <a key={item} href={`#${item.replace(' ', '').toLowerCase()}`} className="hover:underline underline-offset-8 transition-transform duration-300">
                {item}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="text-2xl focus:outline-none"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
