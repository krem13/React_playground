import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Layout>
    </BrowserRouter>
  );
}
