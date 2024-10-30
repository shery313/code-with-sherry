import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white px-4 text-center "
    >
      <div className="relative w-full h-96 max-w-xl    pt-40"> {/* Responsive container */}
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.5 }} // Initial state for animation
          animate={{ opacity: 1, scale: 1 }} // Animation effect
          transition={{ duration: 0.8 }} // Animation duration
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" fill="#38b2ac"/>
            <image className="shadow-lg" x="10" y="0" width="500" height="500" href="/shery.png" />
          </g>
        </motion.svg>
      </div>

      <div className="max-w-2xl mx-auto mt-8 p-5 pb-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animation effect
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        >
          Hi, I'm Sheryar
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300"
          initial={{ opacity: 0, y: -50 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animation effect
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
        >
          I'm a Web Application Developer passionate about creating modern, responsive, and functional web applications.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition duration-300"
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on tap
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#download"
            className="px-6 py-3 bg-gray-800 text-gray-200 rounded-full hover:bg-gray-700 transition duration-300"
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on tap
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
