import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Django', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'REST APIs', level: 75 },
  { name: 'GraphQL', level: 50 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Docker', level: 60 },
  { name: 'PostgreSQL', level: 65 },
  { name: 'MySQL', level: 70 },
  { name: 'Linux', level: 60 },
  { name: 'Agile & Scrum', level: 75 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend Skills */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <ul className="space-y-4">
              {skillsData.slice(0, 6).map((skill) => (
                <SkillProgress key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <ul className="space-y-4">
              {skillsData.slice(6, 11).map((skill) => (
                <SkillProgress key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>

          {/* Tools and Other Skills */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Tools & Other Skills</h3>
            <ul className="space-y-4">
              {skillsData.slice(11).map((skill) => (
                <SkillProgress key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Progress Component
const SkillProgress: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
        <motion.div
          className="bg-teal-500 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Skills;
