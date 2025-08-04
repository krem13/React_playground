import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
              <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Welcome to My Portfolio</h1>
                <p className="text-gray-700 text-lg mb-6 text-center">
                  Hi, I'm [Your Name], a passionate developer. Explore my projects, skills, and experience below!
                </p>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/projects"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
                  >
                    View Projects
                  </Link>
                  <a
                    href="#about"
                    className="w-full py-2 px-4 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition text-center"
                  >
                    About Me
                  </a>
                  <a
                    href="#contact"
                    className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
