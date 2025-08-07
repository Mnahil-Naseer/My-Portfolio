import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
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
    title: "Crafty-Commerce",
    description: "An E-Commerce website, created using React.js and TailwindCSS.",
    link: "https://crafty-commerce-eight.vercel.app/",
    tags: ["React", "TailwindCSS", "Website"],
  },
  {
    img: zencodez,
    title: "ZenCodeZ",
    description: "An IT Company website, created using React.js and TailwindCSS.",
    link: "https://zencodez.vercel.app/",
    tags: ["React", "TailwindCSS", "Website"],
  },
  {
    img: Emart,
    title: "E-Mart",
    description: "An E-Commerce website, created using React.js and TailwindCSS.",
    link: "https://emart112233.vercel.app/",
    tags: ["React", "TailwindCSS", "Website"],
  },
  {
    img: portfolio,
    title: "Portfolio",
    description: "My Portfolio, showcasing my skills and expertise.",
    link: "https://mnahil-portfolio.vercel.app/",
    tags: ["React", "TailwindCSS", "Website"],
  },
  {
    img: counseling,
    title: "Counseling Services",
    description: "A counseling services website, made using HTML, CSS, and JavaScript.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript","Website"],
  },
  {
    img: photography,
    title: "Photography",
    description: "A photography project, created with HTML, CSS, and JavaScript.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript","Website",]
  },
  {
    img: foodfusion,
    title: "Food Fusion",
    description: "A recipe project, made with HTML, CSS, and JavaScript.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript","Website"],
  },
  {
    img: wordcounter,
    title: "Word Counter",
    description: "A word counting tool, developed with HTML, CSS, and JavaScript.",
    link: "https://mnahil-naseer.github.io/word-_counter/",
    tags: ["HTML", "CSS", "JavaScript", "Tool"],
  },
  {
    img: tictactoe,
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game, built with HTML, CSS, and JavaScript.",
    link: "https://mnahil-naseer.github.io/Tic-Tac-Toe/",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
  },
  {
    img: currencycalculator,
    title: "Currency Calculator",
    description: "A currency conversion tool, created using HTML, CSS, and JavaScript.",
    link: "https://mnahil-naseer.github.io/Currency-Calculator/",
    tags: ["HTML", "CSS", "JavaScript","API","Tool"],
  },
  {
    img: rocpaperscissor,
    title: "Rock-Paper-Scissors",
    description: "A Rock-Paper-Scissors game, built with HTML, Tailwind CSS, and JS.",
    link: "https://mnahil-naseer.github.io/Rock-Paper-Scissor-/",
    tags: ["HTML", "TailwindCSS", "JavaScript", "Game"],
  },
  {
    img: ToDo,
    title: "To-Do List",
    description: "A To-Do List application, made with React.js and TailwindCSS.",
    link: "https://to-do-list-hj1k.vercel.app/",
    tags: ["React", "TailwindCSS","Tool"],
  },
]

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState("All")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDarkMode)
  }, [])

  const filterProjects = (tag) => {
    setActiveFilter(tag)
    if (tag === "All") {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter((project) => project.tags.includes(tag))
      setFilteredProjects(filtered)
    }
  }

  const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))]

  return (
    <section
      id="projects"
      className={`py-16 px-6 md:px-28 transition-all ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-5 uppercase tracking-wider"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-9 max-w-3xl mx-auto opacity-80"
        >
          Showcasing my skills in web development.
        </motion.p>

        {/* Custom Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "All"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("React")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "React"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            React.JS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("JavaScript")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "JavaScript"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            JavaScript
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("API")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "HTML"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            API
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("Tool")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "HTML"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Tool
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("Game")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "HTML"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Games
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filterProjects("Website")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === "HTML"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Website
          </motion.button>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative p-7 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 backdrop-blur-xl bg-opacity-20 ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    className="transition duration-300 hover:opacity-75 w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                    <a
                      href="https://github.com/Mnahil-Naseer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-white hover:text-gray-300 mx-3"
                      aria-label="View project on GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-white hover:text-gray-300 mx-3"
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-2 tracking-wide">{project.title}</h3>
                <p className="text-sm opacity-80">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

