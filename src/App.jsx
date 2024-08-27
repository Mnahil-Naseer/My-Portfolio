import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import Expertise from './components/Expertise';
import Lottie from 'react-lottie';
import animationData from './components/lottie4.json';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(storedMode === 'enabled');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode ? 'enabled' : 'disabled');
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={darkMode ? '' : 'bg-white'}>
      <div className="lottie-background">
        <Lottie options={defaultOptions} />
      </div>
      <div className="content">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Expertise darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
