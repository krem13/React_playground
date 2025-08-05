import React from 'react';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Projects />
      </Layout>
    </BrowserRouter>
  );
}
