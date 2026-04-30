import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/ismail.jpg';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Background Decoration - Cleaned up to match Home.jsx */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 transform origin-top translate-x-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#2563eb] uppercase mb-2">My Story</h2>
          <div className="h-1 w-12 bg-[#2563eb] rounded-full hidden lg:block"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12 lg:gap-20">

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Solid offset accent */}
              <div className="absolute inset-0 bg-[#2563eb]/10 rounded-3xl translate-x-4 translate-y-4"></div>

              {/* Primary Image with Square-to-Round Framing */}
              <img
                src={profileImg}
                alt="Ismail Yousif"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
              />

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-[#2563eb] p-4 rounded-2xl shadow-xl z-20"
              >
                <Quote size={24} className="text-white fill-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="prose prose-lg text-gray-600 max-w-none">
              <h3 className="text-3xl sm:text-4xl font-black text-[#1a1a1b] mb-6 leading-tight">
                Turning Challenges into <span className="text-[#2563eb]">Impact.</span>
              </h3>
              <p className="text-lg lg:text-xl font-semibold text-[#1a1a1b] mb-4">
                I am a Data Scientist and Computer Science graduate focused on architecting intelligent systems that solve real-world problems.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-500">
                My journey from Sudan has fundamentally shaped my resilience and commitment to creating meaningful progress through technology.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-3 px-8 py-3.5 bg-[#1a1a1b] rounded-full text-sm font-bold text-white shadow-lg hover:bg-black transition-all"
              >
                {isExpanded ? 'Hide Story' : 'Read My Journey'}
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </motion.div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="lg:mt-8"
                >
                  <div className="text-left space-y-6 border-l-4 border-gray-100 pl-6 py-2">
                    <p className="text-gray-600 leading-relaxed">
                      My early life in Al Genaina was a journey defined by perseverance. I faced significant socio-economic challenges, but education became my ultimate beacon of hope.
                    </p>

                    <div className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100">
                      <p className="text-lg font-bold italic text-[#1a1a1b] leading-relaxed">
                        "You will study no matter what, even if we have to sacrifice."
                      </p>
                      <p className="text-xs font-black text-[#2563eb] mt-4 uppercase tracking-widest">
                        — My Grandmother
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Her support led me to a fully funded scholarship in Malaysia, where I’ve spent the last few years diving deep into AI and Data Engineering.
                      Today, I am determined to leverage cutting-edge analytical tools to architect a brighter, more equitable future.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;