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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-400' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
    { name: 'Django', icon: '🐍', color: 'from-green-600 to-emerald-400' },
    { name: 'Tailwind', icon: '🎨', color: 'from-cyan-500 to-teal-400' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-600' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-amber-400' },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 mb-6"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-300">Get to know me</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                About
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
                Sheryar Azhar
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Crafting digital experiences with passion and precision
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image - Left Column */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <div className="relative group">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/s.jpg"
                      alt="Sheryar Azhar"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=Sheryar+Azhar&background=8B5CF6&color=fff&bold=true&size=400`;
                      }}
                    />
                  </div>
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                  
                  {/* Floating info card */}
                  <motion.div 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 rounded-xl p-4 backdrop-blur-sm shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-400">Currently</p>
                          <p className="font-semibold">Available for work</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-400">Online</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* About Text & Skills - Right Column */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              variants={containerVariants}
            >
              {/* About Text */}
              <div className="space-y-6">
                <motion.p className="text-lg leading-relaxed text-gray-300" variants={itemVariants}>
                  Hello! I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sheryar Azhar</span>, a passionate full-stack developer with expertise in crafting efficient and user-friendly applications. With a background in Information Technology, I specialize in both front-end and back-end development, using modern technologies to build seamless digital experiences.
                </motion.p>
                
                <motion.p className="text-lg leading-relaxed text-gray-300" variants={itemVariants}>
                  I'm proficient in frameworks like <span className="font-semibold text-purple-300">Django</span> and <span className="font-semibold text-cyan-300">React</span>, and I strive to stay updated with the latest industry trends. My goal is to develop solutions that are not only functional but also aesthetically pleasing and responsive across all devices.
                </motion.p>
                
                <motion.p className="text-lg leading-relaxed text-gray-300" variants={itemVariants}>
                  When I'm not coding, I enjoy playing cricket, which keeps me motivated and creative. I believe in continuous learning and pushing boundaries to create impactful digital solutions. <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Let's build something amazing together!</span>
                </motion.p>
              </div>

              {/* Skills Section */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                  Technologies I Work With
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group relative"
                      custom={index}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`}></div>
                      <div className="relative bg-gray-800/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{skill.icon}</div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Connect</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="group px-8 py-4 border-2 border-white/20 hover:border-purple-500/50 text-white rounded-xl font-medium flex items-center gap-3 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Work</span>
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10"
            variants={containerVariants}
          >
            {[
              { label: 'Projects Completed', value: '20+' },
              { label: 'Years Experience', value: '3+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Happy Clients', value: '10+' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                custom={index}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;