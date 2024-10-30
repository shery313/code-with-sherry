import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(''); // State to track the active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Set the clicked link as active
    setIsOpen(false); // Close the mobile menu on link click
  };

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-2xl z-50   shadow-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">&lt;Code<span className="text-teal-500">With</span><span>Sherry/&gt;</span></h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home','about', 'skills', 'projects', 'contact'].map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                className={`cursor-pointer relative hover:text-teal-400 ${activeLink === link ? 'text-teal-400 shadow-xl shadow-teal-500' : 'text-gray-300'}`}
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {activeLink === link && (
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-teal-400 " />
                )}
              </Link>
            ))}
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-50">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-teal-400 focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['about', 'skills', 'projects', 'contact'].map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                className={`block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeLink === link ? 'bg-gray-700 text-white' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
            
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
