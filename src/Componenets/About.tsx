import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Profile Image */}
          <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
            <img
              src="/s.jpg"
              alt="Sheryar Azhar"
              className="rounded-lg shadow-lg w-48 h-48 object-cover"
            />
          </div>

          {/* About Text */}
          <div className="md:w-2/3 text-lg text-gray-700">
            <p className="mb-4">
              Hello! I'm Sheryar Azhar, a passionate web application developer with expertise in crafting efficient and user-friendly applications. With a background in information Techonology, I specialize in both front-end and back-end development, using modern technologies to build seamless digital experiences.
            </p>
            <p className="mb-4">
              I'm proficient in frameworks like Django and React, and I strive to stay updated with the latest industry trends. My goal is to develop solutions that are not only functional but also aesthetically pleasing and responsive across all devices.
            </p>
            <p>
              When I'm not coding, I enjoy playing cricket, which keeps me motivated and creative. Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">HTML</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">CSS</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">JavaScript</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">React</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">Django</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">Python</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">TypeScript</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
