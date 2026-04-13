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
    <section id="about" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">About Me</h2>
          <div className="h-1.5 w-24 bg-black mx-auto rounded-full"></div>
        </motion.div>

        {/* DOM Order: Image First (for mobile top), lg:flex-row-reverse for Desktop Image Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-12 lg:gap-20">

          {/* Image Container (Right on Desktop, Top on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-2/5 flex justify-center pb-6 lg:pb-0"
          >
            {/* Extremely reduced size, creative framing */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">

              {/* Backglow accent */}
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20"></div>

              {/* Subtle offset layer */}
              <div className="absolute inset-0 bg-gray-200 rounded-full transform translate-x-4 lg:translate-x-6 translate-y-4 lg:translate-y-6"></div>

              {/* Primary Image */}
              <img
                src={profileImg}
                alt="Ismail Yousif"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-8 border-white transition-transform duration-700 hover:scale-105"
              />

              {/* Creative floating Quote Accent (visible on larger screens) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-full shadow-xl border border-gray-100 z-20"
              >
                <Quote size={20} className="text-blue-500 fill-blue-500 opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Container (Left on Desktop, Bottom on Mobile) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Intro Text & Bold Heading */}
            <motion.div variants={itemVariants} className="prose prose-lg text-gray-600 max-w-none mx-auto lg:mx-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                Turning Challenges into <br className="hidden lg:block" />
                <span className="text-blue-600">
                  Data-Driven Impact
                </span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 leading-relaxed mb-4">
                I am a Data Analyst and Computer Science graduate passionate about using data and Artificial Intelligence to solve real-world problems.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-8">
                My journey from Sudan, has fundamentally shaped my resilience and commitment to creating meaningful impact across everything I do.
              </p>
            </motion.div>

            {/* Read More Toggle Button */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-black shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none"
              >
                {isExpanded ? 'Hide Story' : 'Read Full Story'}
                <span className="bg-gray-50 p-1.5 rounded-full group-hover:bg-gray-100 transition-colors">
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
            </motion.div>

            {/* Expandable Story Section */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden lg:mt-8"
                >
                  <div className="prose prose-base text-gray-600 max-w-none pt-4 pb-2 space-y-6 text-left">
                    <p>
                      My early life in Al Genaina wasn't easy journey, I faced overwhelming physical and socio-economic challenges, but education miraculously outshined them and became my ultimate beacon of hope.
                    </p>

                    {/* Styled Quote Box instead of regular blockquote */}
                    <div className="relative p-6 my-6 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                      <Quote className="absolute -top-2 -left-2 text-gray-50 w-24 h-24 transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
                      <p className="relative z-10 text-lg sm:text-xl font-semibold italic text-gray-800 text-center leading-relaxed">
                        "You will study no matter what, even if we have to sacrifice"
                      </p>
                      <p className="relative z-10 text-xs font-bold text-gray-400 mt-4 text-center uppercase tracking-[0.2em]">
                        — My Grandmother
                      </p>
                    </div>

                    <p>
                      Her unyielding support fueled my ambition. This drive ultimately led to a fully funded scholarship journey to Malaysia,
                      broadening my worldviews drastically and giving me an incredible opportunity to dive deeply into technology alongside different cultures across the world.
                    </p>
                    <p>
                      Today, my focus is relentlessly locked on Data Science and Artificial Intelligence. I am determined to leverage cutting-edge analytical tools
                      to inform decisions, uncover insights, and architect a brighter, universally-equitable data-driven future.
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
