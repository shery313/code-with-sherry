import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    title: 'Catholic Hospital Wamba',
    description: 'A web application built with React and Django that does amazing things.',
    image: '/marala.jpg',
    demoLink: 'https://catholic-hospital-wamba.netlify.app/',
    codeLink: 'https://github.com/shery313/hospital-frontend',
  },
  {
    title: 'Vivify Store',
    description: 'A mobile-friendly e-commerce platform with dynamic filtering and a cart system.',
    image: 'https://vivifystore2.netlify.app/vivify.png',
    demoLink: 'https://vivifystore2.netlify.app/',
    codeLink: 'https://github.com/shery313/e-commerce-frontend',
  },
  {
    title: 'Sera Inovation',
    description: 'A mobile-friendly Software company website provinding digital services.',
    image: 'https://serainnovations.pro/seeera.png',
    demoLink: 'https://serainnovations.pro/',
    codeLink: 'https://github.com/shery313/serafrontend',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-400 transition-colors"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
