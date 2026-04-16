import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ismailIcon from '../assets/ismailicon.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar height + spacing
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4 sm:mt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex flex-col justify-center w-full max-w-[1100px] rounded-[36px] transition-all duration-300 border border-transparent overflow-hidden ${isScrolled
          ? 'bg-[#e2e4df]/95 backdrop-blur-md shadow-lg py-2.5 px-4 sm:px-6 border-white/40'
          : 'bg-[#e2e4df] py-3.5 px-4 sm:px-6 shadow-sm'
          }`}
      >
        <div className="flex justify-between items-center w-full bg-transparent">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex-shrink-0 flex items-center pr-2"
          >
            <img src={ismailIcon} alt="Ismail Yousif Logo" className="h-9 sm:h-11 w-auto object-contain rounded-full shadow-sm" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-2 lg:mx-6 space-x-7 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[15px] tracking-wide transition-all duration-300 hover:text-black ${activeSection === link.href.substring(1)
                  ? 'text-black font-extrabold'
                  : 'text-gray-600 font-semibold'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center space-x-4 pl-2 shrink-0">
            <a
              href="https://wa.me/+601157688084"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-7 py-3 md:py-2.5 text-[15px] font-bold text-black bg-gradient-to-r from-blue-400 to-purple-400 rounded-full hover:scale-[1.02] transition-all duration-300 focus:outline-none shadow-md"
            >
              Contact Me
            </a>

            <button
              className="md:hidden p-2 bg-black/5 text-gray-700 hover:text-black hover:bg-black/10 transition-colors focus:outline-none rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu inline dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden w-full"
            >
              <div className="flex flex-col pt-4 pb-2 w-full gap-1 border-t border-gray-300/30 mt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-2xl text-center text-[15px] transition-colors ${activeSection === link.href.substring(1)
                      ? 'bg-[#243e36] text-white font-bold shadow-md'
                      : 'text-gray-700 font-semibold hover:bg-black/5'
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="https://wa.me/+601157688084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3.5 text-base font-bold text-black bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-md transition-colors"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
