import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Power BI', icon: '🎨' },
    { name: 'Python', icon: '💎' },
    { name: 'NumPy', icon: '📸' },
    { name: 'Pandas', icon: '✒️' },
    { name: 'Advanced Excel', icon: '🌐' },
    { name: 'MySQL', icon: '🎨' },
    { name: 'Git & GitHub', icon: '🐙' }
  ];

  return (
    <section id="Skills" className="space-y-6">
       <div className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-800/40 px-4 py-1.5 rounded-full text-purple-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"></span>
          Skills
        </div>
      
      <div className="flex flex-wrap gap-3">
        {technicalSkills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-[#0b0c16]/80 border border-gray-900 hover:border-gray-800 px-4 py-2.5 rounded-xl flex items-center gap-2.5 text-xs font-semibold text-gray-300 transition-colors"
          >
            <span>{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;