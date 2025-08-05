import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Games Leaderboard',
    page: '/leaderboardpage',
    description: 'This is a small component that displays Leaderbords for the Chess API games.',
    link: 'https://github.com/krem13/React_playground',
  },
  {
    title: 'Weather App',
    page: '/',
    description: 'A weather forecast app using OpenWeatherMap API and styled with Tailwind CSS.',
    link: 'https://github.com/krem13/React_playground',
  },
  {
    title: 'Portfolio Website',
    page: '/',
    description: 'My personal portfolio website showcasing my projects and skills.',
    link: 'https://github.com/krem13/React_playground',
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="border-b pb-4">
              <Link to={project.page}>
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </Link>
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