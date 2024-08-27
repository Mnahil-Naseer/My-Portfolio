import React, { useState } from 'react';

const Footer = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:mnahilnaseer@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.description}`;
        setFormData({
            name: '',
            email: '',
            description: ''
        });
    };

    return (
        <footer className={`py-9 px-4 md:py-6 md:px-8 text-center ${darkMode ? 'bg-black text-white bg-opacity-50' : 'bg-white text-black'}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">GET IN TOUCH</h2>
            <p className={`mb-8 md:mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>You can contact me via:</p>
            <section id="contact" className="flex flex-col items-center justify-center space-y-8 mb-16 ">
                <div className="flex flex-col items-center  w-full  mb-8 md:mb-0">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center  space-y-4 w-full max-w-lg mx-4"
                    >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className={`p-3 px-14 border rounded-md ${darkMode ? 'bg-gray-700 bg-opacity-50 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-300`}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className={`p-3 px-14 border rounded-md ${darkMode ? 'bg-gray-700 bg-opacity-50 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-300`}
                        />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            required
                            className={`p-3 px-[66px] border rounded-md ${darkMode ? 'bg-gray-700 bg-opacity-50 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-300`}
                        ></textarea>
                        <button
                            type="submit"
                            className={`px-32 py-3 rounded-md ${darkMode ? 'bg-black text-white hover:bg-gradient-to-r from-gray-900 to-gray-500' : 'bg-black text-white hover:bg-gradient-to-r from-gray-800 to-gray-400'} transition-colors duration-300`}
                        >
                            Send
                        </button>
                    </form>
                </div>    
                <div className="flex flex-row  space-x-4 items-center">
                    {[
                        { href: "http://www.linkedin.com/in/mnahil-naseer-847455282", icon: "fa-linkedin" },
                        { href: "https://www.instagram.com/mna._.hil?utm_source=qr&igsh=emlhN3Rwam5tNnQz", icon: "fa-instagram" },
                        { href: "tel:+92 336-7378148", icon: "fa-facebook" },
                        { href: "tel:+92 336-7378148", icon: "fa-phone" },
                        { href: "mailto:mnahilnaseer@gmail.com", icon: "fa-envelope" },
                        { href: "https://github.com/Mnahil-Naseer", icon: "fa-github" },
                    ].map((item, index) => (
                        <a key={index} href={item.href} className={`transition-colors duration-300 ${darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}`}>
                            <i className={`fa ${item.icon} text-xl`}></i>
                        </a>
                    ))}
                </div>            
            </section>
            <div className={`text-sm -bottom-0 fixed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 MNfolio. All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
