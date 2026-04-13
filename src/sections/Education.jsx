import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, Users, CheckCircle, Award } from 'lucide-react';

const Education = () => {
  const highlights = [
    { text: "Final Year Project (FYP)", icon: CheckCircle },
    { text: "Fully funded scholarship", icon: Award },
    { text: "Focus on AI & Machine Learning", icon: BookOpen },
    { text: "Global collaboration (50+ nationalities)", icon: Users },
  ];

  const coreValues = ["Adab", "Akhlaq", "Aqidah", "Amanah", "Amalan"];

  // Framer motion variants
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

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">Education</h2>
          <div className="h-1.5 w-20 bg-black mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Layout Container */}
        <div className="relative pl-6 sm:pl-10">

          {/* Vertical Gradient Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-2 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full"
          ></motion.div>

          {/* Timeline Dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute left-[-10px] top-6 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-sm"
          ></motion.div>

          {/* Right Content Blocks Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-10 sm:gap-12 pt-4"
          >

            {/* Primary Info (Block 1) */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight tracking-tighter">
                Bachelor of Computer Science
                <span className="block text-xl sm:text-2xl text-blue-600 font-bold mt-2 sm:mt-3">
                  (Data Science Specialization)
                </span>
              </h3>
              <div className="flex items-center text-gray-600 font-semibold text-base sm:text-lg">
                <MapPin size={20} className="mr-2 text-gray-400" />
                Albukhary International University
              </div>
            </motion.div>

            {/* Description (Block 2) */}
            <motion.div variants={itemVariants}>
              <div className="text-gray-600 leading-relaxed space-y-5 text-lg">
                <p>
                  During my studies at <span className="font-semibold text-gray-800">Albukhary International University</span>, I built a strong foundation in computer science while advancing my skills in data analysis, machine learning, and artificial intelligence.
                </p>
                <p>
                  I collaborated with students from over 50+ countries, gaining valuable experience working seamlessly across diverse cultures and developing unique perspectives for solving complex problems.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid (Block 3) */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Experience Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="bg-white group-hover:bg-blue-600 p-2.5 rounded-lg text-gray-400 group-hover:text-white shadow-sm transition-all duration-300">
                      <highlight.icon size={20} className="stroke-[2.2px]" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 leading-snug mt-1.5">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Values / Badges (Block 4) */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">University Core Values</h4>
              <div className="flex flex-wrap gap-3">
                {coreValues.map((value, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-bold text-gray-600 hover:border-purple-300 hover:text-purple-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {value}
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
