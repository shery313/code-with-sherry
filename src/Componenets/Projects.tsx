import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
  techIcons?: JSX.Element[];
}


const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Catholic Hospital Wamba',
      description: 'A comprehensive hospital management system with patient records, appointment scheduling, and inventory management.',
      image: '/marala.jpg',
      demoLink: 'https://catholic-hospital-wamba.netlify.app/',
      codeLink: 'https://github.com/shery313/hospital-frontend',
      technologies: ['React', 'Django', 'PostgreSQL'],
      techIcons: [<FaReact key="react" />, <SiDjango key="django" />, <SiPostgresql key="postgres" />]
    },
    {
      title: 'Vivify Store',
      description: 'A mobile-friendly e-commerce platform with dynamic filtering, cart system, and secure checkout process.',
      image: 'https://vivifystore2.netlify.app/vivify.png',
      demoLink: 'https://vivifystore2.netlify.app/',
      codeLink: 'https://github.com/shery313/e-commerce-frontend',
      technologies: ['React', 'Node.js', 'MongoDB'],
      techIcons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />]
    },
    {
      title: 'Sera Innovation',
      description: 'A digital solutions company website showcasing services with interactive elements and contact forms.',
      image: 'https://sera-innovations.netlify.app/seeera.png',
      demoLink: 'https://sera-innovations.netlify.app/',
      codeLink: 'https://github.com/shery313/serafrontend',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />]
    },
    {
      title: 'Sera Innovation',
      description: 'A digital solutions company website showcasing services with interactive elements and contact forms.',
      image: 'https://serainnovations.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSera%20Innovations%20Logo.2683ecf1.png&w=256&q=75',
      demoLink: 'https://serainnovations.com/',
      codeLink: 'https://github.com/shery313/serafrontend',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />]
    },
    {
      title: 'Drive with style',
      description: 'Drive with Style is a digital service for providing ease and comfort ride. ',
      image: 'https://drive-with-style.netlify.app/logo.png',
      demoLink: 'https://drive-with-style.netlify.app/',
      codeLink: 'https://github.com/shery313/drive-with-style',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />]
    },
  ];

  const filters = ['All', 'React', 'Django', 'Node.js', 'TypeScript'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => tech.includes(activeFilter))
      );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  // const hoverVariants = {
  //   hover: {
  //     y: -10,
  //     boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)"
  //   }
  // };

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-teal-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Featured <span className="text-teal-400">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects showcasing my skills and expertise
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
              // variants={hoverVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 z-10"></div>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredProject === index ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Technology badges */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  {project.techIcons?.map((Icon, i) => (
                    <motion.div 
                      key={i} 
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg text-teal-400 text-xl"
                      title={project.technologies[i]}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === index ? 0 : 10,
                        opacity: hoveredProject === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors"
                  initial={{ color: "#fff" }}
                  animate={{ 
                    color: hoveredProject === index ? "#2dd4bf" : "#fff"
                  }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                {/* Project links */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-teal-600/10 border border-teal-400 text-teal-400 font-medium rounded-lg hover:bg-teal-500 hover:text-white transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gray-700/50 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-600 hover:text-white transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiGithub />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-400 mb-6">No projects match the selected filter</p>
            <motion.button
              onClick={() => setActiveFilter('All')}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/shery313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400/10 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
              <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;