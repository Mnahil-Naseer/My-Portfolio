import React from 'react';
import me3 from '../assets/img/me2.jpg';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`flex items-center justify-between p-2 fixed w-full z-30 shadow-xl ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="flex items-center">
        <img src={me3} alt="Mnahil Naseer Logo" className="w-10 h-10 rounded-full object-cover" />
        <p className="text-lg font-bold ml-2">MNfolio</p>
      </div>
      <div className="flex space-x-4 text-sm font-bold">
        {['HOME', 'ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.replace(' ', '').toLowerCase()}`} className=" animate-slideDown hover:underline underline-offset-8 transition-transform duration-300">
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
      
    </nav>
  );
}

export default NavBar;
