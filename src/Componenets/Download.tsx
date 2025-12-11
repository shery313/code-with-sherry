import React from 'react';
import { FiDownload, FiFileText, FiBriefcase, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Download: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)"
    }
  };

  const resumeStats = [
    { icon: <FiBriefcase />, label: 'Years Experience', value: '3+' },
    { icon: <FiFileText />, label: 'Pages', value: '2' },
    { icon: <FiAward />, label: 'Certifications', value: '5+' },
  ];

  return (
    <section id="download" className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-300">Professional Profile</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
              Download
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
              Resume
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            Get a comprehensive overview of my skills, experience, and achievements in a professionally formatted document
          </motion.p>

          {/* Resume Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {resumeStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                // variants={cardHoverVariants}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg text-purple-400 mb-4 text-2xl">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Card */}
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-bold mb-3">Sheryar Azhar - Resume</h3>
                      <p className="text-gray-400 mb-4">
                        Full Stack Developer with expertise in modern web technologies, UI/UX design, and scalable application development.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          Professional experience summary
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          Technical skills breakdown
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          Project portfolio highlights
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <motion.a
                        href="/Cv.pdf"
                        download="Sheryar_Azhar_Resume.pdf"
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiDownload className="group-hover:-translate-y-1 transition-transform" />
                        <span>Download PDF</span>
                      </motion.a>
                      <p className="text-xs text-gray-500 mt-3 text-center">Updated: November 2023</p>
                    </div>
                  </div>
                  
                  {/* File details */}
                  <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Format', value: 'PDF', color: 'text-red-400' },
                      { label: 'Size', value: '1.2 MB', color: 'text-blue-400' },
                      { label: 'Pages', value: '2', color: 'text-green-400' },
                      { label: 'Version', value: 'v3.0', color: 'text-purple-400' },
                    ].map((detail) => (
                      <div key={detail.label} className="text-center">
                        <div className={`text-sm ${detail.color} mb-1`}>{detail.value}</div>
                        <div className="text-xs text-gray-500">{detail.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div 
            className="mt-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* What's Included */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                  What's Included
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Detailed work experience with achievements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Technical skills matrix with proficiency levels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Education and certifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Key project summaries and impacts
                  </li>
                </ul>
              </div>

              {/* Alternative Formats */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                  Need Another Format?
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  If you need my resume in a different format, please contact me directly.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:border-purple-500/50 hover:text-white transition-all text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Other Formats →
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-16 pt-12 border-t border-white/10"
            variants={itemVariants}
          >
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Need to discuss a project or have questions about my experience? Let's connect directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 text-white rounded-lg hover:border-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border-2 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;