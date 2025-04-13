import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Animation variants for consistent transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const blobVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 text-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-400"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative w-full max-w-2xl my-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative w-full aspect-square max-w-md mx-auto"
          variants={blobVariants}
          whileHover="hover"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            </mask>
            <g mask="url(#mask0)">
              <path 
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" 
                className="fill-teal-500"
              />
              <image 
                x="10" 
                y="0" 
                width="500" 
                height="500" 
                href="/shery.png" 
                className="shadow-lg"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </motion.div>

        <motion.div className="max-w-2xl mx-auto mt-8 p-5" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
            Hi, I'm Sheryar
          </h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I specialize in building <span className="text-teal-300 font-medium">modern web applications</span> with responsive design, intuitive interfaces, and robust functionality.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(13, 148, 136, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-teal-500 text-teal-400 hover:bg-teal-900/30 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(13, 148, 136, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Connect</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;