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

      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for detection
          if (rect.top <= 150 && rect.bottom >= 150) {
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
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4 sm:mt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex flex-col justify-center w-full max-w-[1100px] rounded-[36px] transition-all duration-300 border overflow-hidden ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-xl py-2 px-4 sm:px-6 border-white/40'
          : 'bg-white py-3.5 px-4 sm:px-6 shadow-sm border-gray-100'
          }`}
      >
        <div className="flex justify-between items-center w-full bg-transparent">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex-shrink-0 flex items-center pr-2"
          >
            <img
              src={ismailIcon}
              alt="Ismail Yousif Logo"
              className="h-9 sm:h-11 w-auto object-contain rounded-full shadow-sm hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-2 lg:mx-6 space-x-7 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[14px] tracking-tight transition-all duration-300 hover:text-[#2563eb] ${activeSection === link.href.substring(1)
                  ? 'text-[#2563eb] font-bold'
                  : 'text-gray-500 font-semibold'
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
              className="hidden md:inline-flex items-center justify-center px-8 py-2.5 text-[14px] font-bold text-white bg-[#2563eb] rounded-full hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none"
            >
              Contact Me
            </a>

            <button
              className="md:hidden p-2 bg-gray-100 text-gray-700 hover:text-black transition-colors focus:outline-none rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              <div className="flex flex-col pt-4 pb-2 w-full gap-1 border-t border-gray-100 mt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-2xl text-center text-[15px] transition-colors ${activeSection === link.href.substring(1)
                      ? 'bg-blue-50 text-[#2563eb] font-bold'
                      : 'text-gray-700 font-semibold hover:bg-gray-50'
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
                    className="w-full inline-flex items-center justify-center px-4 py-3.5 text-base font-bold text-white bg-[#2563eb] rounded-2xl shadow-md transition-colors hover:bg-blue-700"
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