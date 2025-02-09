import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import FloatingNav from "@/components/navigation/FloatingNav";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    navigate("/");
    return null;
  }
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = project ? [project.imageUrl, ...project.additionalImages] : [];

  if (!project) {
    return <div>Project not found</div>;
  }

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
          <Button variant="ghost" className="mb-8" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 mb-8">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <div className="relative h-[600px] mb-12 group">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {[project.imageUrl, ...project.additionalImages].map(
                  (img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentImageIndex === index ? 1 : 0,
                        scale: currentImageIndex === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${index === 0 ? "main" : `detail ${index}`}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ),
                )}
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
                {[project.imageUrl, ...project.additionalImages].map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === index ? "w-8 bg-white" : "w-4 bg-white/60"}`}
                    />
                  ),
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
              >
                <ArrowLeftCircle className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev + 1) % images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
              >
                <ArrowRightCircle className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {project.additionalImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="col-span-12 md:col-span-6 relative group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
                <h2 className="text-2xl font-semibold mb-4">Design Approach</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.designApproach}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Details
                  </h3>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="text-gray-500">Client</dt>
                      <dd className="font-medium">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Location</dt>
                      <dd className="font-medium">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Year</dt>
                      <dd className="font-medium">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Size</dt>
                      <dd className="font-medium">{project.size}</dd>
                    </div>
                  </dl>
                </div>

                {project.awards && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Awards</h3>
                    <ul className="space-y-2 text-sm">
                      {project.awards.map((award, index) => (
                        <li key={index} className="text-gray-600">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-16 border-t pt-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
              <h2 className="text-2xl font-semibold mb-8 relative z-10">
                Project Timeline
              </h2>
              <div className="relative z-10">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
                {[
                  {
                    phase: "Planning & Design",
                    duration: "3 months",
                    description:
                      "Initial concept development and design planning",
                  },
                  {
                    phase: "Development",
                    duration: "12 months",
                    description:
                      "Construction and implementation of the design",
                  },
                  {
                    phase: "Completion",
                    duration: "2 months",
                    description: "Final touches and project handover",
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative grid grid-cols-2 gap-8 mb-8 ${index % 2 === 0 ? "" : "text-right"}`}
                  >
                    <div
                      className={
                        index % 2 === 0 ? "pr-12" : "col-start-2 pl-12"
                      }
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                          {phase.phase}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {phase.duration}
                        </p>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 border-t pt-16">
              <h2 className="text-2xl font-semibold mb-8">Similar Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData
                  .filter(
                    (p) =>
                      p.id !== project.id && p.category === project.category,
                  )
                  .slice(0, 3)
                  .map((similarProject, index) => (
                    <motion.div
                      key={similarProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard {...similarProject} />
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
