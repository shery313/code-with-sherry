import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/shery313', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/sheryar', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://twitter.com/sheryar', label: 'Twitter' },
    { icon: <FiMail />, href: 'mailto:contact@sheryar.dev', label: 'Email' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { name: 'Resume', href: '#download' },
    { name: 'Blog', href: '#', disabled: true },
    { name: 'Services', href: '#' },
    { name: 'Testimonials', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-purple-600/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Sheryar Azhar
                </h2>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-800/50 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/10 transition-all group"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-2 ${
                      link.disabled 
                        ? 'text-gray-600 cursor-not-allowed' 
                        : 'text-gray-400 hover:text-purple-400 hover:pl-2 transition-all duration-300 group'
                    }`}
                  >
                    {link.disabled && (
                      <span className="text-xs px-1.5 py-0.5 bg-gray-800 rounded text-gray-500">Soon</span>
                    )}
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg text-purple-400">
                  <FiMail />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:contact@sheryar.dev" className="text-gray-300 hover:text-purple-400 transition-colors">
                    contact@sheryar.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg text-purple-400">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/1234567890" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-500/20 rounded-xl">
              <p className="text-sm text-gray-300 mb-2">Stay Updated</p>
              <p className="text-xs text-gray-400">Subscribe for updates on new projects and articles.</p>
              <motion.button
                className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>Made with</span>
            <FiHeart className="text-red-400 animate-pulse" />
            <span>by Sheryar Azhar</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 text-center"
          >
            © {currentYear} Sheryar Azhar. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs text-gray-500 flex items-center gap-4"
          >
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#home"
            className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            aria-label="Back to top"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;