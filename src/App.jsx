import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "tempo-routes";

// Pages
import ProjectsPage from "./pages/projects/index";

function App() {
  return (
    <>
      {/* For the tempo routes */}
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}

      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        {/* Add other routes here */}

        {/* Add this before any catchall route */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

export default App;
