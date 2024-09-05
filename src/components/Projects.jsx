import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import the icons
import counseling from '../assets/img/counseling.png';
import wordcounter from '../assets/img/word counter.png';
import foodfusion from '../assets/img/food fusion.png';
import tictactoe from '../assets/img/tictactoe.png';
import currencycalculator from '../assets/img/currencycalculator.png';
import rocpaperscissor from '../assets/img/rocpaperscissor.png';
import photography from '../assets/img/photgraphy.png';
import ECommerce from '../assets/img/Crafty-Commerce.png';
import ToDo from '../assets/img/ToDoList.png';
import zencodez from '../assets/img/image.png';
import portfolio from '../assets/img/portfolio.jpg';
import Emart from '../assets/img/E-mart.jpg';

const projects = [
  {
    img: ECommerce,
    title: 'Crafty-Commerce',
    description: 'An E-Commerce website, created using React.js and TailwindCSS.',
    link: 'https://crafty-commerce-eight.vercel.app/',
  },
  {
    img: zencodez,
    title: 'ZenCodeZ',
    description: 'An IT Company website, created using React.js and TailwindCSS.',
    link: 'https://zencodez.vercel.app/',
  },
  {
    img: Emart,
    title: 'E-Mart',
    description: 'An E-Commerce website, created using React.js and TailwindCSS.',
    link: 'https://emart112233.vercel.app/',
  },
  {
    img: portfolio,
    title: 'Portfolio',
    description: 'My Portfolio, showcasing my skills and expertise.',
    link: 'https://mnahil-portfolio.vercel.app/',
  },
  {
    img: counseling,
    title: 'Counseling Services',
    description: 'A, made using HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    img: photography,
    title: 'Photography',
    description: 'A photography project, created with HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    img: foodfusion,
    title: 'Food Fusion',
    description: 'A recipe project, made with HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    img: wordcounter,
    title: 'Word Counter',
    description: 'A word counting tool, developed with HTML, CSS, and JavaScript.',
    link: 'https://mnahil-naseer.github.io/word-_counter/',
  },
  {
    img: tictactoe,
    title: 'Tic-Tac-Toe',
    description: 'A classic Tic-Tac-Toe game, built with HTML, CSS, and JavaScript.',
    link: 'https://mnahil-naseer.github.io/Tic-Tac-Toe/',
  },
  {
    img: currencycalculator,
    title: 'Currency Calculator',
    description: 'A currency conversion tool, created using HTML, CSS, and JavaScript.',
    link: 'https://mnahil-naseer.github.io/Currency-Calculator/',
  },
  {
    img: rocpaperscissor,
    title: 'Rock-Paper-Scissors',
    description: 'A Rock-Paper-Scissors game, built with HTML, Tailwind CSS, and JS.',
    link: 'https://mnahil-naseer.github.io/Rock-Paper-Scissor-/',
  },
  {
    img: ToDo,
    title: 'To-Do List',
    description: 'A To-Do List application, made with React.js and TailwindCSS.',
    link: 'https://to-do-list-hj1k.vercel.app/',
  },
];

const Projects = ({ darkMode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setProjectsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section id="projects" className={`py-16 px-6 md:px-28 ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5">My Projects</h2>
        <p className="text-lg mb-9 max-w-3xl mx-auto">
          Discover my projects, showcasing my skills in web development.
        </p>
        <div className="relative">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className={`relative p-7  rounded  ${darkMode ? 'bg-gray-800 shadow-inner shadow-gray-900 text-white hover:bg-gradient-to-t from-gray-900 to-gray-300' : 'bg-gray-200 shadow-inner shadow-gray-400 text-black hover:bg-gradient-to-b from-gray-800 to-gray-300'}`}
              >
                <div className="relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100  bg-black bg-opacity-50 rounded">
                    <a
                      href="https://github.com/Mnahil-Naseer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-white hover:text-gray-300 mx-2"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-white hover:text-gray-300 mx-2"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${index === currentPage ? (darkMode ? 'bg-gray-300' : 'bg-gray-600') : (darkMode ? 'bg-gray-600' : 'bg-gray-400')}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
