import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "tempo-routes";

// Pages
import Home from "./components/home";
import ProjectsPage from "./pages/projects/index";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ProjectDetailPage from "./pages/projects/[id]";

function App() {
  return (
    <>
      {/* For the tempo routes */}
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Add other routes here */}

        {/* Add this before any catchall route */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

export default App;
