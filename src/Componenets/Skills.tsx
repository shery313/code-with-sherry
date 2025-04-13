import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', level: 90, category: 'frontend', icon: '🟧' },
  { name: 'CSS', level: 85, category: 'frontend', icon: '🟦' },
  { name: 'JavaScript', level: 80, category: 'frontend', icon: '🟨' },
  { name: 'React', level: 75, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 70, category: 'frontend', icon: '📘' },
  { name: 'Tailwind CSS', level: 75, category: 'frontend', icon: '🎨' },
  { name: 'Python', level: 80, category: 'backend', icon: '🐍' },
  { name: 'Django', level: 70, category: 'backend', icon: '🦄' },
  { name: 'Node.js', level: 65, category: 'backend', icon: '⬢' },
  { name: 'REST APIs', level: 75, category: 'backend', icon: '🔗' },
  { name: 'GraphQL', level: 50, category: 'backend', icon: '🔼' },
  { name: 'Git & GitHub', level: 85, category: 'tools', icon: '🐙' },
  { name: 'Docker', level: 60, category: 'tools', icon: '🐳' },
  { name: 'PostgreSQL', level: 65, category: 'tools', icon: '🐘' },
  { name: 'MySQL', level: 70, category: 'tools', icon: '🍃' },
  { name: 'Linux', level: 60, category: 'tools', icon: '🐧' },
  { name: 'Agile & Scrum', level: 75, category: 'tools', icon: '🔄' },
];

const Skills: React.FC = () => {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: skillsData.filter(skill => skill.category === 'frontend')
    },
    {
      title: "Backend Development",
      description: "Server-side logic, databases, and API development",
      skills: skillsData.filter(skill => skill.category === 'backend')
    },
    {
      title: "Tools & Other Skills",
      description: "Development tools, methodologies, and additional expertise",
      skills: skillsData.filter(skill => skill.category === 'tools')
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>
          <motion.p 
            className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Here's a comprehensive overview of my technical skills and expertise
          </motion.p>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal-900/30 rounded-lg mr-4">
                    <span className="text-2xl">{category.skills[0].icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {category.skills.map((skill) => (
                    <motion.li 
                      key={skill.name}
                      variants={itemVariants}
                      custom={skill.level}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-teal-500 to-teal-300 h-full rounded-full"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="mt-16 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">Continuous Learning</h3>
            <p className="text-gray-300 mb-4">
              Technology evolves rapidly, and I'm committed to staying at the forefront. I regularly:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.li 
                className="flex items-center p-3 bg-gray-700/50 rounded-lg"
                whileHover={{ x: 5 }}
              >
                <span className="mr-3">📚</span> Take online courses
              </motion.li>
              <motion.li 
                className="flex items-center p-3 bg-gray-700/50 rounded-lg"
                whileHover={{ x: 5 }}
              >
                <span className="mr-3">🧪</span> Build side projects
              </motion.li>
              <motion.li 
                className="flex items-center p-3 bg-gray-700/50 rounded-lg"
                whileHover={{ x: 5 }}
              >
                <span className="mr-3">👨‍💻</span> Contribute to open source
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;