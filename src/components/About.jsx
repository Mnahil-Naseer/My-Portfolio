import React, { useEffect, useState } from 'react';
import m1 from '../assets/img/me10.jpg';
import me3 from '../assets/img/me2.jpg';

const About = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const text = "Front-End Developer";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (text.length + 1));
    }, 500);
    return () => clearTimeout(timeout);
  }, [index, text.length]);

  return (
    <div>
      <section
        id="home"
        className={`relative flex flex-col md:flex-row items-center h-screen ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'} shadow-slate-600`}
      >
        <div className="relative ml-2 mt-12 md:ml-24 animate-slideinLeft flex flex-col justify-center items-center md:items-start md:w-1/2 text-center md:text-left p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi,<br /> I'm Mnahil<br />
          </h1>
          <span className={`text-2xl md:text-5xl font-semibold mb-4 block ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
            {text.substring(0, index)}
          </span>
          <button className={`mt-8 px-9 py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} shadow-slate-700 rounded-lg`}>
            <a href="#contact">Contact</a>
          </button>
        </div>
        <img
          src={me3}
          alt="Mnahil Naseer"
          className="animate-slideinRight w-72 h-72 md:w-[30%] md:h-[70%] rounded-full shadow-xl mt-10 md:mt-0 object-cover"
        />
      </section>

      <section
        id="aboutme"
        className={`mt-3 p-8 md:p-24 ${darkMode ? 'bg-black text-white bg-opacity-50' : 'bg-white text-black'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 animate-slideinLeft flex justify-center mb-8 md:mb-0">
            <img src={m1} alt="Mnahil Naseer" className="w-44 h-36 md:w-96 md:h-96 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 animate-slideinRight text-center md:text-left">
            
            <p className="text-lg mb-4">
              I'm Mnahil Naseer, a dedicated Computer Science student with a passion for web development. As an aspiring Full Stack Developer, I thrive on coding and enjoy the thrill of overcoming new challenges. My adaptability and eagerness to learn enable me to tackle diverse projects effectively.
            </p>
            <p className="text-lg mb-4">
              With hands-on experience in various programming languages and frameworks, I am committed to growing my skills and contributing to innovative web solutions. I look forward to a future where I can leverage my expertise to develop impactful and dynamic web applications.
            </p>
            <button className={`mt-4 px-6 py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-gradient-to-br from-slate-950 via-slate-600 to-slate-50 hover:text-black hover:font-bold' : 'bg-white text-black hover:bg-gradient-to-br from-slate-50 via-slate-600 to-slate-950 hover:text-white hover:font-bold'} shadow-slate-700 rounded-lg`}>
              <a href="#projects">MY PROJECTS</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
