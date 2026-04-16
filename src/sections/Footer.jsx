import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Briefcase,
  ArrowUpRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer id="contact" className="relative bg-black pt-24 pb-12 overflow-hidden text-gray-300">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col items-center"
        >
          {/* Main Hook */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborate?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              I'm open to new opportunities and exciting data projects. Let's discuss how we can turn data into impact together.
            </p>
          </motion.div>

          {/* Interactive Contact Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mb-20">
            {/* Email */}
            <a href="mailto:Ismailyousifofficial@gmail.com" className="group flex flex-col items-center justify-center p-5 sm:p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-3xl transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Email</h3>
              <p className="text-sm text-gray-400 text-center truncate w-full max-w-[200px]">Ismailyousifofficial@gmail.com</p>
            </a>

            {/* Phone */}
            <a href="tel:+601157688084" className="group flex flex-col items-center justify-center p-5 sm:p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-3xl transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
              <p className="text-sm text-gray-400">+60 11-5768 8084</p>
            </a>

            {/* Location */}
            <div className="group flex flex-col items-center justify-center p-5 sm:p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-default">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Location</h3>
              <p className="text-sm text-gray-400">Kuala Lumpur, Malaysia</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12"></motion.div>

          {/* Socials & Identity */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">Ismail Yousif</h3>
              <p className="text-gray-500 text-sm flex items-center gap-1.5">
                Built with <Heart size={14} className="text-red-500" fill="currentColor" /> & Passion
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/smailyousif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full font-bold transition-all duration-300 group"
              >
                <Terminal size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ismailyousif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Briefcase size={20} />
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="mt-16 w-full text-center">
            <p className="text-xs text-gray-600 font-semibold tracking-wider">
              © {new Date().getFullYear()} ISMAIL YOUSIF MOHAMED RAMADAN. ALL RIGHTS RESERVED.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
