import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import FloatingNav from "@/components/navigation/FloatingNav";
import { Image } from "@/components/ui/image";
import { projectsData } from "@/data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  // Additional project details (would come from API in real app)
  const projectDetails = {
    client: "Residential Client",
    architect: "Sarah Johnson",
    area: "4,500 sq ft",
    completed: project.year,
    services: ["Architectural Design", "Interior Design", "Landscape Design"],
    challenge:
      "The client wanted a modern home that maximized natural light and views while maintaining privacy in a dense urban setting.",
    solution:
      "We designed a multi-level residence with strategic window placement, interior courtyards, and a series of interconnected volumes that create a sense of openness while screening views from neighbors.",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 px-4 sm:px-6 lg:px-8 pb-24"
      >
        <div className="max-w-7xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="relative w-full h-[70vh] mb-16 rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {project.fullDescription}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {projectDetails.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {projectDetails.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Project Details
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">CLIENT</h4>
                  <p className="text-gray-900">{projectDetails.client}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    ARCHITECT
                  </h4>
                  <p className="text-gray-900">{projectDetails.architect}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">AREA</h4>
                  <p className="text-gray-900">{projectDetails.area}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    COMPLETED
                  </h4>
                  <p className="text-gray-900">{projectDetails.completed}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    SERVICES
                  </h4>
                  <ul className="space-y-1">
                    {projectDetails.services.map((service, index) => (
                      <li key={index} className="text-gray-900">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ...project.additionalImages,
                ...projectDetails.additionalImages,
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-80 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={`/projects/${relatedProject.id}`}
                      className="block"
                    >
                      <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={relatedProject.imageUrl}
                          alt={relatedProject.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600">{relatedProject.category}</p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
