import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaNodeJs, FaBootstrap, FaPython, FaWordpress, FaGitAlt, FaGithub, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiRedux, SiExpress, SiMysql, SiMongodb, SiFirebase, SiNetlify, SiVercel, SiHostinger, SiGodaddy, SiCanva, SiWebpack } from 'react-icons/si';

const Expertise = ({ darkMode }) => {
  const skills = [
    { name: 'HTML',  icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS',  icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'JavaScript',  icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
    { name: 'React.js',  icon: <FaReact className="text-4xl text-blue-300" /> },
    { name: 'Angular.js',  icon: <FaAngular className="text-4xl text-red-600" /> },
    { name: 'Next.js',  icon: <SiNextdotjs className="text-4xl text-black" /> },
    { name: 'Redux',  icon: <SiRedux className="text-4xl text-purple-600" /> },
    { name: 'Node.js',  icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: 'Express.js',  icon: <SiExpress className="text-4xl text-black" /> },
    { name: 'Bootstrap',  icon: <FaBootstrap className="text-4xl text-purple-500" /> },
    { name: 'Python',  icon: <FaPython className="text-4xl text-yellow-500" /> },
    { name: 'WordPress',  icon: <FaWordpress className="text-4xl text-blue-700" /> },
    { name: 'MySQL',  icon: <SiMysql className="text-4xl text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" /> },
    { name: 'Git',  icon: <FaGitAlt className="text-4xl text-orange-600" /> },
    { name: 'GitHub',  icon: <FaGithub className="text-4xl text-black" /> },
    { name: 'Firebase',  icon: <SiFirebase className="text-4xl text-yellow-500" /> },
    { name: 'Netlify',  icon: <SiNetlify className="text-4xl text-blue-500" /> },
    { name: 'Vercel', icon: <SiVercel className="text-4xl text-black" /> },
    { name: 'Hostinger',  icon: <SiHostinger className="text-4xl text-purple-600" /> },
    { name: 'GoDaddy',  icon: <SiGodaddy className="text-4xl text-green-600" /> },
    { name: 'Canva',  icon: <SiCanva className="text-4xl text-blue-500" /> },
    { name: 'Webpack',  icon: <SiWebpack className="text-4xl text-blue-600" /> },
    { name: 'Databases',  icon: <FaDatabase className="text-4xl text-blue-600" /> },
    { name: 'Figma',  icon: <FaFigma className="text-4xl  text-red-900" /> },
  ];

  return (
    <section id="skills" className={`py-28 ${darkMode ? 'bg-black text-white ' : ''}`}>
      <div className="mx-6 md:mx-24 mb-20 text-center">
        <h2 className="text-3xl font-extrabold items-center mb-10">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} darkMode={darkMode} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skill = ({ name, icon, darkMode, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={skillRef}
      className={`p-6 w-20 h-20 rounded-full items-center shadow-inner justify-center transform transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${darkMode ? 'bg-zinc-700 shadow-zinc-100' : 'bg-zinc-200 shadow-zinc-400'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className={`w-16 h-16 flex justify-center rounded-full ${darkMode ? '' : ' text-black'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mt-1">{name}</h3>
      </div>
    </div>
  );
};

export default Expertise;