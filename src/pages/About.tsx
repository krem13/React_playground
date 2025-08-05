import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Welcome to my React sandbox</h2>
        <p className="text-gray-700 text-lg mb-4">
          Hi! I'm a frontend developer with experience in building web applications using React, TypeScript, and modern web technologies.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          I enjoy creating clean, user-friendly interfaces and solving challenging problems. This portfolio showcases some of my favorite projects.
        </p>
      </div>
    </div>
  );
};

export default About;