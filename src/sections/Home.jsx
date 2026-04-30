import React from 'react';
import { motion } from 'framer-motion';
import cvPdf from '../assets/Ismail_Ramadan_DA_CV.pdf';
import { ArrowRight, Download } from 'lucide-react';

const Home = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Tracking and Scroll Logic
  const handleViewWork = (e) => {
    e.preventDefault();
    // Google Analytics Event Tracking
    if (window.gtag) {
      window.gtag('event', 'view_work_click', {
        'event_category': 'Engagement',
        'event_label': 'Home Hero Button'
      });
    }

    const element = document.getElementById('experience');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Refined Background - Modern Geometric */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute w-[600px] h-[600px] border-[1px] border-[#2563eb]/20 rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] border-[1px] border-gray-200 rounded-full"
          animate={{ scale: [1.02, 1, 1.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] text-[#2563eb] uppercase mb-6">
            Available for New Opportunities
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl md:text-[6.5rem] font-black text-[#1a1a1b] tracking-tighter mb-6 leading-[1]">
            Ismail Yousif
          </motion.h1>

          <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-8 flex flex-wrap justify-center items-center gap-3">
            <span>Data Analyst</span>
            <span className="text-blue-200 hidden sm:inline">/</span>
            <span>AI Engineer</span>
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 font-medium leading-relaxed">
            I build intelligent systems that turn complex data into actionable
            forward-looking insights.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Action: View Work */}
            <motion.a
              variants={buttonVariants}
              href="#experience"
              onClick={handleViewWork}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#1a1a1b] text-white rounded-full font-bold transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-2xl shadow-blue-900/20"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary Action: Resume */}
            <motion.a
              variants={buttonVariants}
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-white text-[#1a1a1b] border-2 border-gray-100 rounded-full font-bold transition-all duration-300 hover:border-[#2563eb] hover:text-[#2563eb] hover:scale-105"
            >
              Resume / CV
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;