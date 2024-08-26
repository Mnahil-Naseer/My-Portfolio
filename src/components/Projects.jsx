import React, { useState, useEffect } from 'react';
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
    img: counseling,
    title: 'Counseling Services',
    description: 'A project related to psychology, made using HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    img: photography,
    title: 'Photography',
    description: 'A project showcasing photography, created with HTML, CSS, and JavaScript.',
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
    description: 'A Rock-Paper-Scissors game, developed with HTML, Tailwind CSS, and JavaScript.',
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
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 50000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section id="projects" className={`py-16 px-6 md:px-28 mb-5 ${darkMode ? 'bg-black bg-opacity-50 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5">My Projects</h2>
        <p className="text-lg mb-9 max-w-3xl mx-auto">
          Discover my projects, showcasing my skills in web development.
        </p>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className={`p-9 rounded animate-slideDown transform transition-transform duration-500 ease-in-out ${darkMode ? 'bg-gray-800 shadow-inner shadow-gray-900 hover:bg-gradient-to-t from-gray-900 via-gray-600 to-white text-white' : 'bg-gray-200 shadow-inner shadow-gray-400 hover:bg-gradient-to-b from-gray-700 via-gray-500 to-white text-black'} slide-down`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-44 w-full object-fill rounded mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-800 hover:text-blue-400">View Project</a>
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
