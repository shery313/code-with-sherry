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
  featured?: boolean;
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
      techIcons: [<FaReact key="react" />, <SiDjango key="django" />, <SiPostgresql key="postgres" />],
      featured: true
    },
    {
      title: 'Vivify Store',
      description: 'A mobile-friendly e-commerce platform with dynamic filtering, cart system, and secure checkout process.',
      image: 'https://vivifystore2.netlify.app/vivify.png',
      demoLink: 'https://vivifystore2.netlify.app/',
      codeLink: 'https://github.com/shery313/e-commerce-frontend',
      technologies: ['React', 'Node.js', 'MongoDB'],
      techIcons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />],
      featured: true
    },
    {
      title: 'Sera Innovations',
      description: 'A digital solutions company website showcasing services with interactive elements and contact forms.',
      image: 'https://serainnovations.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSera%20Innovations%20Logo.2683ecf1.png&w=256&q=75',
      demoLink: 'https://serainnovations.com/',
      codeLink: 'https://github.com/shery313/serafrontend',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />]
    },
    {
      title: 'Drive with Style',
      description: 'Digital service platform for providing ease and comfort in transportation with modern UI/UX.',
      image: 'https://drive-with-style.netlify.app/logo.png',
      demoLink: 'https://drive-with-style.netlify.app/',
      codeLink: 'https://github.com/shery313/drive-with-style',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />]
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and interactive elements.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      codeLink: '#',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <FaReact key="motion" />]
    }
  ];

  const filters = ['All', 'React', 'Django', 'Node.js', 'TypeScript', 'Featured'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : activeFilter === 'Featured'
    ? projects.filter(project => project.featured)
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

  const cardHoverVariants = {
    hover: {
      y: -15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 0%, rgba(139, 92, 246, 0.03) 100%)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-300">Portfolio Showcase</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
              Featured
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A collection of my recent work showcasing modern web development with clean design and robust functionality
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div 
                  className="absolute inset-0 rounded-lg border border-purple-400/30"
                  layoutId="filterHighlight"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
              
              {/* Main project card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-10"></div>
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
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        Featured
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content area */}
                <div className="p-6">
                  <div className="mb-4">
                    <motion.h3 
                      className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/20 hover:text-white transition-all group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="group-hover/link:rotate-12 transition-transform" />
                      <span>Live Demo</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/50 border border-white/10 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="group-hover/link:scale-110 transition-transform" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
                
                {/* Tech icons floating on hover */}
                <motion.div 
                  className="absolute bottom-4 left-4 flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredProject === index ? 1 : 0,
                    y: hoveredProject === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.techIcons?.map((Icon, i) => (
                    <motion.div 
                      key={i} 
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg text-purple-400 text-lg border border-white/10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message or view more button */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 rounded-2xl p-12 backdrop-blur-sm max-w-md mx-auto">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">No Projects Found</h3>
              <p className="text-gray-400 mb-6">No projects match the selected filter. Try another filter or view all projects.</p>
              <motion.button
                onClick={() => setActiveFilter('All')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/shery313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 text-white rounded-xl hover:border-purple-500/50 transition-all group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="text-xl" />
              <span className="font-medium">View More on GitHub</span>
              <FiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            { label: 'Projects Completed', value: '20+', icon: '🚀' },
            { label: 'Happy Clients', value: '10+', icon: '😊' },
            { label: 'Code Commits', value: '500+', icon: '💾' },
            { label: 'Technologies Used', value: '15+', icon: '🛠️' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;