import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-16 bg-gray-900 text-white">
      <div className="max-w-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Download My Resume</h2>
        <p className="text-lg text-gray-400 mb-8">
          Interested in learning more about my skills and experience? Download my resume to get all the details!
        </p>

        <a
          href="/Cv.pdf"
          download="Cv.pdf"
          className="inline-flex items-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors"
        >
          <FiDownload className="mr-2" /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Download;
