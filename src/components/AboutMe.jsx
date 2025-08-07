import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaDownload } from 'react-icons/fa';
import cv from '../assets/img/Mnahil Naseer.pdf.pdf'; // Make sure to add your CV file path here
import Expertise from './Expertise';
import { Link } from 'react-router-dom';

const AboutMe = ({ darkMode }) => {
    return (
        <div className={`about-me p-8 ${darkMode ? 'bg-black bg-opacity-50 text-gray-100' : ' text-gray-800'}`}>
            <HeroSection darkMode={darkMode} />
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
                I’m a Computer Science student at SZABIST University with a passion for exploring technology and building meaningful digital solutions. As a Fullstack Developer, I’ve worked with tools and technologies like React.js, Tailwind CSS, Next.js, Node.js, MongoDB, MySQL, RESTful APIs, and FastAPI. Freelancing on real-world projects has been a big part of my journey, and securing my first direct client through LinkedIn was a proud milestone that pushed me to keep learning and improving.
            </p>
            <p className="mb-4">
                I’m also volunteering as an organizer with GDGOCSI, where I help plan events that bring people together and spark innovation. It’s been an amazing way to grow—not just as a developer, but as part of a community that shares my passion for technology.
            </p>
            <p className="mb-8">
                I’m always eager to learn, create, and collaborate. My goal is to build websites that aren’t just functional but truly impactful, and I love working with people who are driven to learn and make a difference.
            </p>
            <div className='space-x-24 md:space-x-40 flex flex-row m-4'>
                <button className={`mt-4 px-4 py-2 md:px-6 md:py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-gradient-to-r from-gray-900 to-gray-500 ' : 'bg-black text-white hover:bg-gradient-to-br from-gray-800  to-slate-400 '} shadow-slate-700 rounded-lg`}>
                    <a href="#projects">PROJECTS</a>
                </button>
                <a href={cv} download="Mnahil_Naseer_CV.pdf">
                    <button className={`mt-4 px-4 py-2 md:px-6 md:py-3 shadow-inner ${darkMode ? 'bg-black text-white hover:bg-gradient-to-r from-gray-900 to-gray-500 ' : 'bg-black text-white hover:bg-gradient-to-br from-gray-800  to-slate-400 '} shadow-slate-700 rounded-lg`}>
                        Download CV
                    </button>
                </a>
            </div>
            <Expertise />
        </div>
    );
};

const HeroSection = ({ darkMode }) => {
    return (
        <section className={`relative flex flex-col items-center text-center p-32 rounded-lg mb-16 mt-10 overflow-hidden ${darkMode ? ' text-gray-100' : ' text-gray-900'}`}>
            

            {/* Content Section */}
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-6xl font-extrabold mb-6 leading-tight">
                    Hi, I'm <span className="text-purple-500">Mnahil Naseer</span>
                </h1>
                <p className="text-2xl font-semibold opacity-90">
                    Fullstack Developer & Computer Science Enthusiast
                </p>
                <p className="text-lg mt-4 opacity-80 leading-relaxed">
                    Passionate about crafting innovative digital solutions and collaborating with tech-driven minds to build something impactful.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <Link to="/projects" className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-purple-600 text-white hover:bg-purple-500'}`}>
                        <FaProjectDiagram className="text-lg" /> View My Work
                    </Link>
                    <a href={cv} download="Resume.pdf.pdf" className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                        <FaDownload className="text-lg" /> Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};



export default AboutMe;