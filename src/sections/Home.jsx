import React from 'react';
import { motion } from 'framer-motion';
import cvPdf from '../assets/Ismail_Ramadan_DA_CV.pdf';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
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

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.7 }
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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Subtle Animated Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-[100px] opacity-70"
          animate={{
            y: [-30, 30, -30],
            x: [20, -20, 20],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center pt-24 pb-12 mt-8 lg:mt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h2 variants={itemVariants} className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Welcome
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-[5.5rem] font-black text-black tracking-tighter mb-8 leading-[1.05] sm:leading-[1.05]">
            Ismail Yousif
          </motion.h1>

          <motion.div variants={itemVariants} className="w-24 h-1.5 bg-black rounded-full mb-10"></motion.div>

          <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-8 w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
            <span>Data Analyst</span>
            <span className="hidden sm:inline mx-4 text-gray-300">|</span>
            <span>Machine Learning Enthusiast</span>
          </motion.h3>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed mb-14 px-4 sm:px-0 font-medium">
            Passionate about turning  data into actionable insights to drive busines  decisions.
          </motion.p>

          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary Button */}
            <motion.a
              variants={buttonVariants}
              href="#experience"
              onClick={(e) => scrollToSection(e, 'experience')}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Outline Button */}
            <motion.a
              variants={buttonVariants}
              href={cvPdf}
              download="Ismail_Ramadan_DA_CV.pdf"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-black border-2 border-gray-200 rounded-full font-semibold transition-all duration-300 hover:border-black hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Download CV
              <Download size={18} className="text-gray-500 group-hover:text-black transition-colors" />
            </motion.a>


          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;
