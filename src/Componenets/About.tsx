import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Django", level: 75 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 70 },
    { name: "Git", level: 80 },
    { name: "REST APIs", level: 75 },
    { name: "SQL", level: 70 }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Profile Image */}
            <motion.div 
              className="mb-8 lg:mb-0 lg:w-1/3 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-teal-500 rounded-xl opacity-20 blur-lg"></div>
                <img
                  src="/s.jpg"
                  alt="Sheryar Azhar"
                  className="relative rounded-xl shadow-2xl w-64 h-64 object-cover border-4 border-white z-10"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div 
              className="lg:w-2/3 text-lg text-gray-700"
              variants={containerVariants}
            >
              <motion.p className="mb-6 leading-relaxed" variants={itemVariants}>
                Hello! I'm <span className="font-semibold text-teal-600">Sheryar Azhar</span>, a passionate full-stack developer with expertise in crafting efficient and user-friendly applications. With a background in Information Technology, I specialize in both front-end and back-end development, using modern technologies to build seamless digital experiences.
              </motion.p>
              
              <motion.p className="mb-6 leading-relaxed" variants={itemVariants}>
                I'm proficient in frameworks like <span className="font-semibold">Django</span> and <span className="font-semibold">React</span>, and I strive to stay updated with the latest industry trends. My goal is to develop solutions that are not only functional but also aesthetically pleasing and responsive across all devices.
              </motion.p>
              
              <motion.p className="leading-relaxed" variants={itemVariants}>
                When I'm not coding, I enjoy playing cricket, which keeps me motivated and creative. I believe in continuous learning and pushing boundaries to create impactful digital solutions. <span className="font-medium text-teal-600">Let's build something amazing together!</span>
              </motion.p>

              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(13, 148, 136, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(13, 148, 136, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              My Skills
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="mb-4"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="bg-teal-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;