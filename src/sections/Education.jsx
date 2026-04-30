import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Users, CheckCircle, Award, Star } from 'lucide-react';

const Education = () => {
  const highlights = [
    { text: "Final Year Project: Student Performance Prediction", icon: CheckCircle },
    { text: "Albukhary Foundation Full Scholarship", icon: Award },
    { text: "Specialization in Data Science & AI", icon: BookOpen },
    { text: "Global Collaboration (50+ Nationalities)", icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Matching the new Brand Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#2563eb] uppercase mb-2">Academic Foundation</h2>
          <div className="h-1 w-12 bg-[#2563eb] rounded-full hidden lg:block"></div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative pl-8 sm:pl-12">

          {/* Solid Professional Timeline Line (No Gradients) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-gray-100"
          ></motion.div>

          {/* Solid Royal Blue Dot */}
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >

            {/* University & Degree */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-[#2563eb] text-xs font-bold rounded-full uppercase tracking-wider">
                  2021 — 2025
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Star size={12} className="fill-gray-600" /> CGPA: 3.45
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-[#1a1a1b] leading-tight tracking-tight">
                Bachelor of Computer Science <br />
                <span className="text-[#2563eb] text-2xl sm:text-3xl">(Honours)</span>
              </h3>

              <div className="flex items-center mt-4 text-gray-500 font-semibold">
                <MapPin size={18} className="mr-2 text-[#2563eb]" />
                Albukhary International University, Malaysia
              </div>
            </motion.div>

            {/* Context */}
            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-gray-50 pl-6">
                Graduated with <span className="text-[#1a1a1b] font-bold">Second Class Upper</span> division.
                My education was defined by a cross-cultural environment, allowing me to approach
                AI and Data problems with a unique global perspective.
              </p>
            </motion.div>

            {/* Highlights Grid - Unified Accent Colors */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Key Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
                    <div className="bg-gray-50 group-hover:bg-[#2563eb] p-3 rounded-xl text-[#2563eb] group-hover:text-white transition-all">
                      <highlight.icon size={20} />
                    </div>
                    <p className="text-sm font-bold text-[#1a1a1b]">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;