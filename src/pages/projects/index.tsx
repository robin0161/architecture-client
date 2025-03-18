"use client";

import React from "react";
import { motion } from "framer-motion";
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
