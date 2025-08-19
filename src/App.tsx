import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GamesPage from "./pages/GamesPage";
import FormPage from "./pages/FormPage";
import MarketplacePage from "./pages/MarketplacePage";
import GooglePage from "./pages/GooglePage";
import NewsPage from "./pages/NewsPage";

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
          <Route path="/google" element={<GooglePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
