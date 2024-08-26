import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Expertise = ({ darkMode }) => {
  const skills = [
    { name: 'HTML', level: '95%', icon: <FaHtml5 className="text-3xl text-orange-500" /> },
    { name: 'CSS', level: '90%', icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
    { name: 'JavaScript', level: '90%', icon: <FaJsSquare className="text-3xl text-yellow-500" /> },
    { name: 'Tailwind CSS', level: '90%', icon: <SiTailwindcss className="text-3xl text-teal-400" /> },
    { name: 'React.js', level: '80%', icon: <FaReact className="text-3xl text-blue-300" /> },
  ];

  return (
    <section id="skills" className={`py-28 mb-5 ${darkMode ? 'bg-black text-white bg-opacity-50' : 'bg-white text-black'}`}>
      <div className="mx-auto">
        <h2 className="text-2xl font-bold mb-8">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} darkMode={darkMode} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skill = ({ name, level, icon, darkMode, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false);
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
      className={`p-6 rounded-lg shadow-inner transform transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${darkMode ? 'bg-zinc-900 shadow-zinc-700' : 'bg-zinc-200 shadow-zinc-700'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{name}</h3>
      </div>
      <div className={`w-full rounded-full h-4 mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
        <div
          className={`h-4 rounded-full transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'} ${darkMode ? 'bg-white shadow-black' : 'bg-black shadow-gray-500'}`}
          style={{ width: isVisible ? level : '0%' }}
        ></div>
      </div>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-700'}>{level}</p>
    </div>
  );
};

export default Expertise;
