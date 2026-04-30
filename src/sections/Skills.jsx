import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, LineChart, MessageSquare, Lightbulb } from 'lucide-react';

const allSkills = [
  { name: 'SQL', devIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', detail: 'Advanced Querying' },
  { name: 'Python', devIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', detail: 'Data Science & ML' },
  { name: 'R', devIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg', detail: 'Data Analysis' },
  { name: 'Tableau', devIcon: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png', detail: 'Data Visualisation' },
  { name: 'Power BI', devIcon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', detail: 'Business Intelligence' },
  { name: 'Excel', devIcon: 'https://img.icons8.com/color/512/microsoft-excel-2019.png', detail: 'Pivot Tables, VBA' },
  { name: 'BigQuery', devIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', detail: 'Data Warehouse' },
  { name: 'Snowflake', devIcon: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg', detail: 'Data Cloud Platform' },
  { name: 'Scikit-learn', devIcon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', detail: 'Machine Learning' },
  { name: 'Git', devIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', detail: 'Version Control' },
  { name: 'Model Building', icon: BrainCircuit, detail: 'Machine Learning' },
  { name: 'EDA', icon: LineChart, detail: 'Data Analysis' },
  { name: 'Problem Solving', icon: Lightbulb, detail: 'Structured Thinking' },
  { name: 'Storytelling', icon: MessageSquare, detail: 'Data Communication' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white overflow-hidden flex flex-col justify-center border-t border-gray-50">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-4">Skills & Tools</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Technologies, tools, and methodologies I use to turn data into impact
          </p>
          <div className="h-1.5 w-24 bg-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative group w-full overflow-hidden flex pb-8 pt-4">
          <div className="flex animate-marquee w-max">
            {[...allSkills, ...allSkills].map((skill, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center w-48 sm:w-56 h-40 mx-3 sm:mx-4 bg-white border border-gray-100 rounded-3xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:border-blue-100 transition-all duration-300 shrink-0 hover:-translate-y-1"
              >
                {skill.devIcon ? (
                  <img src={skill.devIcon} alt={skill.name} className="w-12 h-12 mb-4 object-contain" />
                ) : skill.icon ? (
                  <div className="w-12 h-12 rounded-2xl bg-gray-50/80 mb-4 flex items-center justify-center text-blue-500 border border-gray-100 shadow-sm">
                    <skill.icon size={24} strokeWidth={2.5} />
                  </div>
                ) : null}

                <h3 className="text-lg font-bold text-gray-900 mb-1">{skill.name}</h3>
                <span className="text-sm text-gray-500 font-medium">{skill.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Skills;
