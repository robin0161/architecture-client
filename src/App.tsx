import { Suspense, lazy } from "react";
import Footer from "@/components/Footer";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./pages/about";
import Services from "./pages/services";
import ProjectsPage from "./pages/projects";
import ProjectDetail from "./pages/projects/[id]";
import routes from "tempo-routes";

// Add loading component for better UX
const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
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
