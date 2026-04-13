import React from 'react';
import { motion } from 'framer-motion';
import cvPdf from '../assets/Ismail_Ramadan_DA_CV.pdf';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Briefcase, 
  Download 
} from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col items-center text-center"
        >
          {/* Main Info */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Ismail Yousif Mohamed Ramadan
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-lg mx-auto">
            "Open to opportunities in Data Science, Analytics, and AI"
          </p>

          {/* Contact Details Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 mb-12 w-full border-t border-b border-gray-800 py-8">
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
              <div className="bg-gray-800/50 p-2.5 rounded-lg text-blue-400">
                <Mail size={20} />
              </div>
              <a href="mailto:Ismailyousifofficial@gmail.com" className="font-medium hover:underline decoration-blue-400 underline-offset-4">
                Ismailyousifofficial@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
              <div className="bg-gray-800/50 p-2.5 rounded-lg text-purple-400">
                <Phone size={20} />
              </div>
              <a href="tel:+601157688084" className="font-medium hover:underline decoration-purple-400 underline-offset-4">
                +601157688084
              </a>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
              <div className="bg-gray-800/50 p-2.5 rounded-lg text-green-400">
                <MapPin size={20} />
              </div>
              <span className="font-medium">
                Kuala Lumpur, Malaysia
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href="https://github.com/smailyousif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
            >
              <Terminal size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-semibold">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ismailyousif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800/50 hover:bg-blue-900/30 text-gray-300 hover:text-blue-400 rounded-xl border border-gray-700/50 hover:border-blue-800/50 transition-all duration-300 group"
            >
              <Briefcase size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          {/* Closing lines & Copyright */}
          <div className="w-full flex flex-col items-center">
            <p className="text-sm font-medium italic text-gray-500 mb-6 bg-gradient-to-r from-transparent via-gray-800/50 to-transparent px-8 py-2 rounded-full">
              Built with passion, resilience, and purpose.
            </p>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">
              © 2026 Ismail Yousif. All rights reserved.
            </p>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
