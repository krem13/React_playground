import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GamesPage from "./pages/GamesPage";
import FormPage from "./pages/FormPage";
import MarketplacePage from "./pages/MarketplacePage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#about" element={<Home />} />
          <Route path="/#projects" element={<Home />} />
          <Route path="/#contact" element={<Home />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
