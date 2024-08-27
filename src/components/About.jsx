import React, { useState, useEffect, useRef } from 'react';
import m1 from '../assets/img/me5.jpeg';
import me3 from '../assets/img/me2.jpg';
import cv from '../assets/img/Resume.jpg'; // Make sure to add your CV file path here

const About = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const text = "Front-End Developer";
  const [homeInView, setHomeInView] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (text.length + 1));
    }, 500);
    return () => clearTimeout(timeout);
  }, [index, text.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHomeInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboutInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section
        id="home"
        ref={homeRef}
        className={`relative flex flex-col md:flex-row items-center h-screen ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'} shadow-slate-600 transition-opacity duration-1000 ${homeInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`relative ml-2 mt-24 md:mt-34 md:ml-24 flex flex-col justify-center items-center md:items-start md:w-1/2 text-center md:text-left p-8 ${homeInView ? 'animate-slideinLeft' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi,<br /> I'm Mnahil<br />
          </h1>
          <span className={`text-2xl md:text-5xl font-semibold mb-4 block ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
            {text.substring(0, index)}
          </span>
          <button className={`mt-10 px-9 py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-gradient-to-r from-gray-900 to-gray-500 ' : 'bg-black text-white hover:bg-gradient-to-r from-gray-800 to-gray-400'} shadow-slate-700 rounded-lg`}>
            <a href="#contact">Contact</a>
          </button>
        </div>
        <img
          src={me3}
          alt="Mnahil Naseer"
          ref={imageRef}
          className={`w-72 h-72 md:w-[30%] md:h-[70%] rounded-full shadow-lg shadow-gray-700 mt-10 md:mt-0 object-cover transition-opacity duration-1000 ${homeInView ? 'animate-slideinRight opacity-100' : 'opacity-0'}`}
        />
      </section>

      <section
        id="aboutme"
        ref={aboutRef}
        className={`p-8 md:p-20 ${darkMode ? 'bg-black text-white bg-opacity-50' : 'bg-white text-black'} transition-opacity duration-1000 ${aboutInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 flex justify-center mb-8 md:mb-0 transition-opacity duration-1000 ${aboutInView ? 'animate-slideinLeft opacity-100' : 'opacity-0'}`}>
            <img src={m1} alt="Mnahil Naseer" className="w-44 h-56 md:w-96 md:h-96 object-cover rounded-lg shadow-lg shadow-gray-700" />
          </div>
          <div className={`w-full md:w-1/2 text-justify md:text-left transition-opacity duration-1000 ${aboutInView ? 'animate-slideinRight opacity-100' : 'opacity-0'}`}>
            <p className="text-lg mb-4">
              I'm Mnahil Naseer, a dedicated Computer Science student with a passion for web development. As an aspiring Full Stack Developer, I thrive on coding and enjoy the thrill of overcoming new challenges. My adaptability and eagerness to learn enable me to tackle diverse projects effectively.
            </p>
            <p className="text-lg mb-4">
              With hands-on experience in various programming languages and frameworks, I am committed to growing my skills and contributing to innovative web solutions. I look forward to a future where I can leverage my expertise to develop impactful and dynamic web applications.
            </p>
            <div className='space-x-24 md:space-x-40 flex flex-row'>
            <button className={`mt-4 px-4 py-2 md:px-6 md:py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-gradient-to-r from-gray-900 to-gray-500 ' : 'bg-black text-white hover:bg-gradient-to-br from-gray-800  to-slate-400 '} shadow-slate-700 rounded-lg`}>
              <a href="#projects">MY PROJECTS</a>
            </button>
            <a href={cv} download="Mnahil_Naseer_CV.pdf">
              <button className={`mt-4 px-4 py-2 md:px-6 md:py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-gradient-to-r from-gray-900 to-gray-500 ' : 'bg-black text-white hover:bg-gradient-to-br from-gray-800  to-slate-400 '} shadow-slate-700 rounded-lg`}>
                Download CV
              </button>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
