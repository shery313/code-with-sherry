import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', level: 90, category: 'frontend', icon: '🟧', color: 'from-orange-500 to-red-500' },
  { name: 'CSS', level: 85, category: 'frontend', icon: '🟦', color: 'from-blue-500 to-indigo-500' },
  { name: 'JavaScript', level: 80, category: 'frontend', icon: '🟨', color: 'from-yellow-500 to-amber-500' },
  { name: 'React', level: 75, category: 'frontend', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript', level: 70, category: 'frontend', icon: '📘', color: 'from-blue-600 to-blue-400' },
  { name: 'Tailwind CSS', level: 75, category: 'frontend', icon: '🎨', color: 'from-teal-500 to-cyan-500' },
  { name: 'Next.js', level: 65, category: 'frontend', icon: '▲', color: 'from-gray-800 to-gray-600' },
  { name: 'Python', level: 80, category: 'backend', icon: '🐍', color: 'from-green-500 to-emerald-500' },
  { name: 'Django', level: 70, category: 'backend', icon: '🦄', color: 'from-green-600 to-teal-500' },
  { name: 'Node.js', level: 65, category: 'backend', icon: '⬢', color: 'from-green-600 to-emerald-400' },
  { name: 'REST APIs', level: 75, category: 'backend', icon: '🔗', color: 'from-purple-500 to-indigo-500' },
  { name: 'GraphQL', level: 50, category: 'backend', icon: '🔼', color: 'from-pink-500 to-purple-500' },
  { name: 'Git & GitHub', level: 85, category: 'tools', icon: '🐙', color: 'from-gray-800 to-gray-600' },
  { name: 'Docker', level: 60, category: 'tools', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
  { name: 'PostgreSQL', level: 65, category: 'tools', icon: '🐘', color: 'from-blue-600 to-indigo-500' },
  { name: 'MySQL', level: 70, category: 'tools', icon: '🍃', color: 'from-orange-500 to-amber-500' },
  { name: 'Linux', level: 60, category: 'tools', icon: '🐧', color: 'from-gray-700 to-gray-900' },
  { name: 'Agile & Scrum', level: 75, category: 'tools', icon: '🔄', color: 'from-purple-500 to-pink-500' },
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.3
      }
    })
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Crafting responsive and interactive user interfaces",
      icon: "💻",
      skills: skillsData.filter(skill => skill.category === 'frontend')
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      icon: "⚙️",
      skills: skillsData.filter(skill => skill.category === 'backend')
    },
    {
      title: "Tools & DevOps",
      description: "Development workflow and infrastructure management",
      icon: "🛠️",
      skills: skillsData.filter(skill => skill.category === 'tools')
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 mb-6"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-300">Technical Expertise</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                Skills &
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
                Technologies
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive overview of my technical expertise across frontend, backend, and development tools
            </motion.p>
          </div>

          {/* Skills Categories */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.skills[0].color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}></div>
                
                {/* Main card */}
                <div className="relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl mr-4">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 bg-gradient-to-r ${skill.color} bg-opacity-20 rounded-lg`}>
                              <span className="text-lg">{skill.icon}</span>
                            </div>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            variants={progressVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          />
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/20 to-transparent rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          {/* Continuous Learning Section */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-5 blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                    Continuous Learning Journey
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Technology evolves rapidly, and I'm committed to staying at the forefront. I regularly update my skills through:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { icon: '📚', title: 'Online Courses', desc: 'Latest tech courses & certifications' },
                      { icon: '🧪', title: 'Side Projects', desc: 'Experimental projects & prototypes' },
                      { icon: '👨‍💻', title: 'Open Source', desc: 'Contributing to community projects' }
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-white/5"
                        whileHover={{ x: 5, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="font-semibold mb-1">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      Always
                    </div>
                    <div className="text-2xl font-bold mb-4">Learning</div>
                    <div className="text-gray-400 text-sm">New technologies every quarter</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



export default Skills;