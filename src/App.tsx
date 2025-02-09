import { Suspense } from "react";
import Footer from "@/components/Footer";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./pages/about";
import Services from "./pages/services";
import ProjectsPage from "./pages/projects";
import ProjectDetail from "./pages/projects/[id]";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
