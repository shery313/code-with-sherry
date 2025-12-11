import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the data to your backend here
      console.log("Form submitted:", formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'Sheryarsatti6@gmail.com', link: 'mailto:sheryarsatti6@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+92 307 5304856', link: 'tel:+923075304856' },
    { icon: <FiMapPin />, label: 'Location', value: 'Islamabad , Pakistan', link: '#' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/shery313', color: 'hover:text-gray-100 hover:bg-gray-800' },
    { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://linkedin.com/in/sheryar', color: 'hover:text-blue-100 hover:bg-blue-600' },
    { icon: <FaTwitter />, label: 'Twitter', link: 'https://twitter.com/sheryar', color: 'hover:text-sky-100 hover:bg-sky-500' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', link: 'https://wa.me/1234567890', color: 'hover:text-green-100 hover:bg-green-500' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 mb-6"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-300">Get In Touch</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                Let's Build
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
                Together
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Have a project in mind or want to collaborate? I'd love to hear about it.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information - Left Column */}
            <motion.div 
              className="lg:col-span-1 space-y-8"
              variants={itemVariants}
            >
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    className="group block"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    custom={index}
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-3 bg-gray-800/50 border border-white/10 rounded-lg hover:border-purple-500/30 transition-all ${social.color}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-lg">{social.icon}</div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="font-medium">Available for work</span>
                  </div>
                  <div className="text-sm text-purple-400">24-48h response</div>
                </div>
                <p className="text-sm text-gray-400">
                  I'm currently open to new opportunities and collaborations. Let's discuss your project!
                </p>
              </div>
            </motion.div>

            {/* Contact Form - Right Column */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <div className="relative group">
                {/* Form glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                
                {/* Form container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="flex items-center gap-2 text-gray-300 font-medium mb-3">
                        <div className="p-1.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg">
                          <FiUser className="text-purple-400" />
                        </div>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="flex items-center gap-2 text-gray-300 font-medium mb-3">
                        <div className="p-1.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg">
                          <FiMail className="text-purple-400" />
                        </div>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="flex items-center gap-2 text-gray-300 font-medium mb-3">
                        <div className="p-1.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg">
                          <FiMessageSquare className="text-purple-400" />
                        </div>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                        rows={6}
                        placeholder="Tell me about your project, timeline, and budget..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <FiSend />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    {/* Submission Status */}
                    <div className="min-h-[60px]">
                      {submitStatus === 'success' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-400 rounded-lg text-center backdrop-blur-sm"
                        >
                          🎉 Message sent successfully! I'll get back to you within 24 hours.
                        </motion.div>
                      )}
                      {submitStatus === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 text-red-400 rounded-lg text-center backdrop-blur-sm"
                        >
                          ⚠️ Oops! Something went wrong. Please try again or contact me directly via email.
                        </motion.div>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* Response Time Note */}
              <motion.div 
                className="mt-8 flex items-center gap-4 p-4 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-500/20 rounded-xl backdrop-blur-sm"
                variants={itemVariants}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg">
                    <span className="text-purple-400">⏱️</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-300 mb-1">Fast Response Time</h4>
                  <p className="text-sm text-gray-400">I typically respond to inquiries within 24 hours during weekdays.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="mt-24 text-center pt-12 border-t border-white/10"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Start a Project?</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's work together to bring your ideas to life. I'm excited to hear about your project and explore how we can create something amazing.
            </p>
            <motion.a
              href="mailto:Sheryarsatti6@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
              Send Quick Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;