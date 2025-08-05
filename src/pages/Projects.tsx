import React from 'react';

const projects = [
  {
    title: 'Personal Blog',
    description: 'A full-stack blog platform built with React, Node.js, and MongoDB.',
    link: 'https://github.com/krem13/React_playground',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API and styled with Tailwind CSS.',
    link: 'https://github.com/krem13/React_playground',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects and skills.',
    link: 'https://github.com/krem13/React_playground',
  },
];

export default function Projects() {
  return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Projects</h2>
          <div className="space-y-6">
          {projects.map((project) => (
              <div key={project.title} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
              >
                  View on GitHub
              </a>
              </div>
          ))}
          </div>
      </div>
      </div>
  );
}