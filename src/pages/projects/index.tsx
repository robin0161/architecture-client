import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import FloatingNav from "@/components/navigation/FloatingNav";
import { projectsData } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600">
              Explore our complete portfolio of innovative architectural designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
