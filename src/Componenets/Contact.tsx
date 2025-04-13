import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:w-1/2"
              variants={itemVariants}
            >
              <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-xl rounded-xl p-8 space-y-6 border border-gray-200 hover:border-teal-300 transition-all duration-300"
              >
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FiUser className="mr-2 text-teal-500" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FiMail className="mr-2 text-teal-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FiMessageSquare className="mr-2 text-teal-500" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none transition-all"
                    rows={5}
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 flex items-center justify-center gap-2 transition-all"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Submission Status */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 text-green-700 rounded-lg text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 text-red-700 rounded-lg text-center"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="lg:w-1/2 space-y-8"
              variants={itemVariants}
            >
              <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 hover:border-teal-300 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-teal-600">Other Ways to Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-teal-100 rounded-full mr-4">
                      <FiMail className="text-teal-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email Me</h4>
                      <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-teal-600 transition-colors">
                        your.email@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-teal-100 rounded-full mr-4">
                      <FaLinkedin className="text-teal-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                        linkedin.com/in/yourprofile
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-teal-100 rounded-full mr-4">
                      <FaGithub className="text-teal-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">GitHub</h4>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-teal-100 rounded-full mr-4">
                      <FaTwitter className="text-teal-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Twitter</h4>
                      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                        @yourhandle
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 hover:border-teal-300 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-teal-600">Let's Work Together</h3>
                <p className="text-gray-600 mb-4">
                  I'm currently open to new opportunities, collaborations, and interesting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                <p className="text-gray-600">
                  My typical response time is within 24-48 hours. For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;