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
    <footer id="contact" className="relative bg-[#1a1a1b] pt-24 pb-12 overflow-hidden text-gray-300">
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
              Ready to <span className="text-[#2563eb]">Collaborate?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              I'm open to new opportunities and exciting data projects. Let's discuss how we can turn data into impact together.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 w-full max-w-5xl mb-20">

            {/* Left Col: Contact Info */}
            <motion.div variants={itemVariants} className="flex-1 space-y-6">
              <div className="text-left mb-6">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-sm text-gray-400 mt-2">Feel free to reach out through any of these channels.</p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <a href="mailto:Ismailyousifofficial@gmail.com" className="group flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2563eb]/50 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl">
                  <div className="w-12 h-12 bg-[#2563eb]/10 text-[#2563eb] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-white font-bold text-sm mb-0.5">Email</h3>
                    <p className="text-sm text-gray-400 truncate">Ismailyousifofficial@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+601157688084" className="group flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2563eb]/50 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl">
                  <div className="w-12 h-12 bg-[#2563eb]/10 text-[#2563eb] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5">Phone</h3>
                    <p className="text-sm text-gray-400">+60 11-5768 8084</p>
                  </div>
                </a>

                {/* Location */}
                <div className="group flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2563eb]/50 rounded-2xl transition-all duration-300 backdrop-blur-md cursor-default shadow-lg hover:shadow-xl">
                  <div className="w-12 h-12 bg-[#2563eb]/10 text-[#2563eb] rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5">Location</h3>
                    <p className="text-sm text-gray-400">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Contact Form */}
            <motion.div variants={itemVariants} className="flex-[1.2] bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form action="https://formspree.io/f/xkoywyej" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-[#1a1a1b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-[#1a1a1b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
                  <textarea id="message" name="message" rows="4" required className="w-full bg-[#1a1a1b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all resize-none" placeholder="How can we help each other?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group mt-2 shadow-lg hover:shadow-blue-900/50">
                  Send Message
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Powered by Formspree (or your preferred form service)
                </p>
              </form>
            </motion.div>

          </div>

          <motion.div variants={itemVariants} className="w-full h-px bg-white/10 mb-12"></motion.div>

          {/* Socials & Identity */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">Ismail Yousif</h3>
              <p className="text-gray-500 text-sm flex items-center gap-1.5">
                Built with <Heart size={14} className="text-[#2563eb]" fill="currentColor" /> & Passion
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
                className="flex items-center justify-center p-3 bg-[#2563eb]/20 hover:bg-[#2563eb] text-[#2563eb] hover:text-white rounded-full transition-all duration-300"
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
