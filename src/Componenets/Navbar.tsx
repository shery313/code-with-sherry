import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact', 'download'];

  return (
    <motion.nav
      className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
          : 'bg-gradient-to-b from-gray-900 to-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ position: 'sticky' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Image */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() => handleLinkClick('home')}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Logo Image Container */}
                  {/* <div className=" bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center overflow-hidden border border-purple-500/30">
                    
                  </div> */}
                  <img 
                      src="/logo.png" 
                      alt="Sheryar Logo" 
                      className="w-1/2 object-contain"
                      
                    />
                  {/* Animated dot */}
                  {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div> */}
                </div>
                <div className="hidden sm:block">

                  <div className="h-0.5 w-full bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onSetActive={(to) => setActiveLink(to)}
                  className={`relative px-4 py-2 rounded-lg cursor-pointer font-medium transition-all duration-300 ${
                    activeLink === link
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  
                  {activeLink === link && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Download CV Button */}
            <motion.a
              href="/Cv.pdf"
              download="Sheryar_Azhar_Resume.pdf"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${
                isOpen 
                  ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30' 
                  : 'bg-gray-800/50 hover:bg-gray-700/50'
              } transition-all duration-300`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? { 
          height: "auto", 
          opacity: 1,
          scale: 1 
        } : { 
          height: 0, 
          opacity: 0,
          scale: 0.95 
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut",
          height: { duration: 0.3 },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
        style={{ 
          overflow: 'hidden',
          transformOrigin: 'top right'
        }}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
          {navLinks.map((link) => (
            <motion.div
              key={link}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.indexOf(link) * 0.05 }}
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={(to) => setActiveLink(to)}
                className={`block px-4 py-3 rounded-lg cursor-pointer font-medium transition-all duration-300 ${
                  activeLink === link
                    ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-white border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                onClick={() => handleLinkClick(link)}
              >
                <div className="flex items-center justify-between">
                  <span>{link.charAt(0).toUpperCase() + link.slice(1)}</span>
                  {activeLink === link && (
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
          
          {/* Mobile Resume Button */}
          <motion.a
            href="/Cv.pdf"
            download="Sheryar_Azhar_Resume.pdf"
            className="block px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2 mt-4 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navLinks.length * 0.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;