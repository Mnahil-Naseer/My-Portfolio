import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`py-56 text-center  ${darkMode ? 'bg-black text-white bg-opacity-50' : 'bg-white text-black'}`}>
            <section id="contact" className="mb-6">
                <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
                <p className={`mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>You can contact me via:</p>
                <ul className="flex justify-center space-x-8">
                    {[
                        { href: "http://www.linkedin.com/in/mnahil-naseer-847455282", icon: "fa-linkedin" },
                        { href: "https://www.instagram.com/mna._.hil?utm_source=qr&igsh=emlhN3Rwam5tNnQz", icon: "fa-instagram" },
                        { href: "tel:+92 336-7378148", icon: "fa-phone" },
                        { href: "mailto:mnahilnaseer@gmail.com", icon: "fa-envelope" },
                        { href: "https://github.com/Mnahil-Naseer", icon: "fa-github" },
                    ].map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className={`transition-colors duration-300 ${darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}`}>
                                <i className={`fa ${item.icon} text-4xl animate-bounce`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={`text-sm text-center bottom-0 w-[100%] fixed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 MNfolio. All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
