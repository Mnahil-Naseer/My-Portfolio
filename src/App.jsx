import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Lottie from 'react-lottie';
import animationData from './components/lottie4.json';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
    <Router>
      <div className={darkMode ? 'dark-mode' : 'bg-white'}>
        <div className="lottie-background">
          <Lottie options={defaultOptions} />
        </div>
        <div className="content">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<About darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/about" element={<AboutMe darkMode={darkMode} />} />
          </Routes>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </Router>
  );
}

export default App;
