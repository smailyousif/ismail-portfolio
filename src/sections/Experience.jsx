import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Award,
  FolderOpen,
  Settings,
  Users,
  ExternalLink,
  TrendingUp,
  LineChart,
  MonitorPlay,
  HeartHandshake,
  Calendar
} from 'lucide-react';

// --- DATA SETUPS ---

const workExp = [
  {
    id: 1,
    role: "Data Analyst Intern",
    org: "Doctor Anywhere",
    duration: "Apr 2025 – Oct 2025",
    desc: "",
    bullets: [
      "Built and maintained production KPI dashboards in Tableau processing 100K+ healthcare records, providing real-time operational visibility for business and medical stakeholders across Southeast Asia.",
      "Engineered SQL and dbt data models in Google BigQuery to transform and integrate healthcare datasets, and resolved a critical revenue discrepancy by debugging the full data pipeline — restoring 100% financial reporting accuracy for the Finance team.",
      "Automated reporting workflows using SQL and dbt, reducing manual reporting effort by 30% across the Data Intelligence team.",
      "Followed a full Git/Bitbucket pull request workflow in a production environment, coordinating cross-team Data Engineering tickets via Jira and documenting processes in Confluence."
    ]
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    org: "Placement Dost",
    duration: "May 2024 – Jun 2024",
    desc: "",
    bullets: [
      "Conducted deep-dive SQL analysis on a large-scale Alibaba e-commerce dataset, performing data cleaning, transformation, and normalisation across complex relational tables.",
      "Built reusable SQL scripts using window functions, aggregations, rankings, and stored procedures to surface actionable business insights for stakeholders.",
      "Improved data processing efficiency by 30% through query optimisation and streamlining the monthly reporting cycle for the analytics team."
    ]
  }
];

const leadershipExp = [
  { 
    id: 1, 
    role: "Co-Founder & Media Coordinator", 
    org: "SparkHope Organisation", 
    duration: "2024 – Present", 
    icon: HeartHandshake, 
    bullets: [
      "Co-founded SparkHope, a humanitarian organisation recognised by the AIU Alumni Centre, dedicated to empowering underprivileged Sudanese youth through education, vocational training, and community support.",
      "Led strategic planning, branding, and digital communications — managing social media campaigns that supported over 100 families in Sudan across two consecutive Ramadan relief drives.",
      "Operates hybrid social business initiatives that reinvest revenue into scholarships and community learning programmes, reducing reliance on external donations."
    ]
  },
  { 
    id: 2, 
    role: "Secretary", 
    org: "AIU Football Club", 
    duration: "2023 – 2024", 
    icon: Users, 
    bullets: [
      "Managed official documentation, registrations, and logistics for inter-university football competitions, representing Albukhary International University in official tournaments.",
      "Served as the primary liaison between the club and university administration, coordinating training schedules and facility bookings to ensure smooth operations."
    ]
  },
  { 
    id: 3, 
    role: "Secretary", 
    org: "School of Computing & Informatics Committee", 
    duration: "2024 – 2025", 
    icon: Settings, 
    bullets: [
      "Acted as a key mediator between students and the School of Computing & Informatics, addressing academic difficulties and resource challenges to improve the student learning experience.",
      "Facilitated communication between the student body and faculty leadership, helping streamline the resolution of grievances and advocating for better resource allocation."
    ]
  },
  { 
    id: 4, 
    role: "Committee Member", 
    org: "Kedah Maker Fair", 
    duration: "2024", 
    icon: MonitorPlay, 
    bullets: [
      "Helped organise a regional IT exhibition showcasing technical projects from students under 16, supporting the execution of a state-level competition across logistics and coordination.",
      "Promoted creative student innovations such as Smart Door Systems, fostering a platform for young local talent to showcase their work in technology."
    ]
  },
  { 
    id: 5, 
    role: "Block Leader", 
    org: "AIU Residential Council", 
    duration: "2022 – 2023", 
    icon: Users, 
    bullets: [
      "Oversaw student welfare and maintained a positive living environment within the residential complex, serving as the primary contact for residents on facility and welfare concerns.",
      "Organised community-building activities to foster social cohesion and improve quality of life for students on campus."
    ]
  },
  { 
    id: 6, 
    role: "Secretary", 
    org: "Sudanese Student Community", 
    duration: "2022 – 2023", 
    icon: Users, 
    bullets: [
      "Acted as a vital liaison between Sudanese students and AIU Student Affairs, coordinating administrative matters including visa support and resolution of academic challenges.",
      "Spearheaded community outreach and cultural programmes to ensure strong representation and a supportive environment for Sudanese students within the university."
    ]
  }
];

const projects = [
  {
    id: 1,
    title: "FinTech Analytics & Risk Dashboard",
    duration: "09/2025 - 10/2025",
    desc: "Comprehensive dashboard for assessing financial risk and monitoring performance metrics.",
    metrics: ["40K+ records processed", "Improved accuracy by 25%", "Reduced NPLs by 10%"],
    tags: ["Data Analytics", "Risk Management", "Dashboard"],
  },
  {
    id: 2,
    title: "Student Academic Performance Prediction",
    duration: "06/2024 – 02/2025",
    desc: "An end-to-end machine learning pipeline determining academic risks.",
    metrics: ["Reduced process time from 2 days → 5 minutes", "ML-based risk classification"],
    tags: ["Machine Learning", "Python", "Predictive Modeling"],
  },
  {
    id: 3,
    title: "African Credit Scoring Challenge",
    duration: "11/2024 – 01/2025",
    desc: "Developed a predictive model built exclusively for nuanced credit scoring.",
    metrics: ["Top 16% global ranking", "F1 score: 0.7006"],
    tags: ["TensorFlow", "SMOTE", "Feature Eng"],
  },
  {
    id: 4,
    title: "House Price Prediction System",
    duration: "06/2024 – 07/2024",
    desc: "End-to-end Machine learning application serving streamlined real-time predictions.",
    metrics: ["Real-time prediction Engine", "Robust web interaction"],
    tags: ["Machine Learning", "Streamlit", "Python"],
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('Work Experience');

  const tabs = [
    { name: 'Work Experience', icon: Briefcase },
    { name: 'Projects', icon: FolderOpen },
    { name: 'Leadership', icon: Award }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 lg:py-32 bg-gray-50 overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-4">Experience</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            My professional journey, leadership, and impactful projects
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16 w-full max-w-3xl mx-auto bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-sm border border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-xl sm:rounded-full transition-all duration-300 z-10 
                ${activeTab === tab.name ? 'text-white shadow-md' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}
            >
              {activeTab === tab.name && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-black rounded-xl sm:rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <tab.icon size={18} className={activeTab === tab.name ? 'text-white' : 'text-gray-400'} />
              <span className="hidden sm:block">{tab.name}</span>
              <span className="sm:hidden text-xs">{tab.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">

            {/* WORK EXPERIENCE TAB */}
            {activeTab === 'Work Experience' && (
              <motion.div
                key="work"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="max-w-5xl mx-auto relative px-4"
              >
                {/* Center Line Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block opacity-30"></div>
                
                <div className="space-y-12 relative">
                  {workExp.map((exp, idx) => (
                    <motion.div key={exp.id} variants={itemVariants} className={`relative flex flex-col md:flex-row justify-between items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                      
                      {/* Timeline Node Desktop */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-blue-500 group-hover:scale-125 transition-transform duration-300 hidden md:block z-10"></div>
                      
                      {/* Empty side for Desktop alternating layout */}
                      <div className="hidden md:block w-5/12"></div>
                      
                      {/* Content Container */}
                      <div className="w-full md:w-5/12 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-blue-100 transition-all duration-300 relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">{exp.role}</h3>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                          <h4 className="text-lg font-bold text-blue-600">{exp.org}</h4>
                          <div className="flex items-center text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full w-fit">
                            <Calendar size={14} className="mr-2" />
                            {exp.duration}
                          </div>
                        </div>

                        {exp.desc && <p className="text-gray-600 mb-5 leading-relaxed">{exp.desc}</p>}

                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2.5 mr-3 shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* LEADERSHIP TAB */}
            {activeTab === 'Leadership' && (
              <motion.div
                key="leadership"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative"
              >
                {leadershipExp.map((exp) => (
                  <motion.div key={exp.id} variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 flex flex-col items-start group">
                    <div className="bg-purple-50 p-3 rounded-xl mb-5 group-hover:bg-purple-600 transition-colors duration-300">
                      <exp.icon size={24} className="text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">{exp.role}</h3>

                    <div className="flex flex-col mb-5">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{exp.org}</h4>
                      <div className="flex items-center text-xs font-semibold text-gray-500 mt-2.5 bg-gray-50 px-2.5 py-1 rounded w-fit">
                        <Calendar size={12} className="mr-1.5" />
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="space-y-2.5 mt-auto w-full">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="h-1 w-1 rounded-full bg-blue-400 mt-2 mr-2 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === 'Projects' && (
              <motion.div
                key="projects"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
              >
                {projects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-blue-100 transition-all duration-500 relative group overflow-hidden">

                    {/* Subtle BG Gradient Accent */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gray-50 px-3 py-1 rounded-full text-xs font-bold text-gray-500 mb-4 inline-block tracking-wider uppercase">
                        {project.duration}
                      </div>
                      <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors text-gray-400">
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{project.desc}</p>

                    {/* Key Impact Metrics */}
                    <div className="space-y-3 mb-6 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center text-sm font-semibold text-blue-900">
                          <TrendingUp size={14} className="mr-2 text-blue-500" />
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
