import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import TalukaPage from "./pages/TalukaPage.jsx";
import VillagePage from "./pages/VillagePage.jsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";
import { whatsappNumber } from "./data/properties.js";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-estate-ink">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/taluka/:taluka" element={<TalukaPage />} />
          <Route path="/village/:village" element={<VillagePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/property/:projectId" element={<ProjectDetailsPage />} />
        </Routes>
        <Footer />
        <a
          href={`https://wa.me/${whatsappNumber}`}
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-estate-green text-sm font-bold text-white shadow-premium transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          WA
        </a>
      </div>
    </BrowserRouter>
  );
}
