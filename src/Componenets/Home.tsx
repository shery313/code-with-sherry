import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/10 via-transparent to-indigo-900/10 rounded-full"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          className="max-w-6xl w-full"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-purple-200">Frontend Developer & Designer</span>
                </motion.div>

                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">
                    Hi, I'm
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500 mt-2">
                    Sheryar
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  I craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">digital experiences</span> that blend elegant design with cutting-edge technology. Every pixel tells a story.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-medium text-white overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Projects
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="group px-8 py-4 border-2 border-purple-500/30 hover:border-purple-400/50 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Let's Connect
                  </span>
                </motion.a>
              </motion.div>

              {/* Tech stack indicators */}
              <motion.div 
                className="pt-8 border-t border-white/10"
                variants={itemVariants}
              >
                <p className="text-sm text-gray-400 mb-4">Technologies I work with:</p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                        borderColor: 'rgba(139, 92, 246, 0.5)',
                        scale: 1.05
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Profile image/hero element */}
            <motion.div 
              className="relative"
              variants={floatingVariants}
              animate="float"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-30"></div>
                
                {/* Main profile container */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-500/30 to-transparent rounded-full translate-x-16 translate-y-16"></div>
                  
                  {/* Profile image */}
                  <div className="relative aspect-square rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 z-10"></div>
                    <img 
                      src="/shery.png" 
                      alt="Sheryar" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=Sheryar&background=8B5CF6&color=fff&bold=true&size=512`;
                      }}
                    />
                    
                    {/* Animated highlight */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm font-semibold">🚀 Available</span>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    3+ Years Experience
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll down</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;