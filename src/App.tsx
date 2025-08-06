import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LeaderboardPage from "./pages/LeaderboardPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#about" element={<Home />} />
          <Route path="/#projects" element={<Home />} />
          <Route path="/#contact" element={<Home />} />
          <Route path="/leaderboardpage" element={<LeaderboardPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
