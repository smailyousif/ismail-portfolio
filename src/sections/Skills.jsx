import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  BarChart, 
  Database, 
  BrainCircuit, 
  GitMerge, 
  MessageSquare,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const categories = [
  { id: 'Data & Programming', icon: Code2 },
  { id: 'Data Visualisation & BI', icon: BarChart },
  { id: 'Data Engineering & DevOps', icon: Database },
  { id: 'Machine Learning', icon: BrainCircuit },
  { id: 'Version Control & Collab', icon: GitMerge },
  { id: 'Soft Skills', icon: MessageSquare }
];

const skillsData = {
  'Data & Programming': [
    { name: 'SQL (Advanced)', core: true },
    { name: 'Python', details: '(Pandas, NumPy, PyTorch)', core: true },
    { name: 'R', core: false }
  ],
  'Data Visualisation & BI': [
    { name: 'Tableau', core: false },
    { name: 'Power BI', core: false },
    { name: 'Looker', core: false },
    { name: 'Excel', details: '(Pivot Tables, VBA)', core: false }
  ],
  'Data Engineering & DevOps': [
    { name: 'dbt', core: false },
    { name: 'BigQuery', core: false },
    { name: 'Snowflake', core: false },
    { name: 'ETL Pipelines', core: false }
  ],
  'Machine Learning': [
    { name: 'Scikit-learn', core: false },
    { name: 'Model Building', core: false },
    { name: 'Feature Engineering', core: false },
    { name: 'EDA', details: '(Exploratory Data Analysis)', core: false }
  ],
  'Version Control & Collab': [
    { name: 'Git', core: false },
    { name: 'GitHub', core: false },
    { name: 'Bitbucket', core: false },
    { name: 'Jira', core: false },
    { name: 'Confluence', core: false }
  ],
  'Soft Skills': [
    { name: 'Problem Solving', core: false },
    { name: 'Data Storytelling', core: false },
    { name: 'Stakeholder Communication', core: false },
    { name: 'Cross-functional Collaboration', core: false },
    { name: 'Leadership', core: false },
    { name: 'Critical Thinking', core: false }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Data & Programming');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 bg-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-4">Skills</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto px-4">
            Technologies, tools, and methodologies I use to turn data into impact
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Navigation - Horizontal Scroll on Mobile, Wrapped on Desktop */}
        <div className="flex flex-nowrap lg:flex-wrap overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 justify-start lg:justify-center gap-2 sm:gap-3 mb-16 px-1 no-scrollbar w-full">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 z-10 whitespace-nowrap shrink-0 lg:shrink
                ${activeTab === tab.id ? 'text-white shadow-md' : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-black rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <tab.icon size={16} className={activeTab === tab.id ? 'text-white' : 'text-gray-400'} />
              <span>{tab.id}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display Area */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            >
              {skillsData[activeTab].map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants} 
                  className={`relative group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-center items-center text-center overflow-hidden
                    ${skill.core 
                      ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-1.5' 
                      : 'bg-white border-gray-100 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-md hover:border-gray-200 hover:-translate-y-1'
                    }`}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-transparent opacity-0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Core Badge/Icon */}
                  {skill.core ? (
                    <div className="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      <Sparkles size={24} className="stroke-[2px] text-blue-500 mx-auto" />
                    </div>
                  ) : (
                    <div className="mb-3 text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                  )}

                  {/* Skill Name */}
                  <h3 className={`font-extrabold tracking-tight mb-1
                    ${skill.core ? 'text-xl sm:text-2xl text-gray-900 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all' : 'text-lg sm:text-xl text-gray-800'}
                  `}>
                    {skill.name}
                  </h3>

                  {/* Skill Details/Context */}
                  {skill.details && (
                    <p className={`text-xs sm:text-sm font-medium mt-1 leading-snug
                      ${skill.core ? 'text-blue-800/80' : 'text-gray-500'}
                    `}>
                      {skill.details}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
