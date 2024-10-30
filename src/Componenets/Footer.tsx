import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div>
          <h2 className="text-lg font-bold">Sheryar</h2>
          <p className="text-sm">Web Application Developer</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sheryar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
