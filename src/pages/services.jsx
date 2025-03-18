import React from "react";
import { motion } from "framer-motion";
import FloatingNav from "@/components/navigation/FloatingNav";
import { Image } from "@/components/ui/image";

const ServicesPage = () => {
  const services = [
    {
      title: "Architectural Design",
      description:
        "Comprehensive design services for residential, commercial, and cultural projects of all scales.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      details: [
        "Concept development and schematic design",
        "Design development and documentation",
        "3D visualization and modeling",
        "Material and finish selection",
      ],
    },
    {
      title: "Interior Design",
      description:
        "Thoughtful interior solutions that enhance the architectural experience and meet functional needs.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      details: [
        "Space planning and layout optimization",
        "Custom furniture and millwork design",
        "Lighting design and specification",
        "Art and accessory curation",
      ],
    },
    {
      title: "Urban Planning",
      description:
        "Strategic planning services for communities, campuses, and mixed-use developments.",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
      details: [
        "Master planning and site analysis",
        "Zoning and regulatory navigation",
        "Public space and streetscape design",
        "Community engagement and participatory design",
      ],
    },
    {
      title: "Sustainable Design",
      description:
        "Environmentally responsible solutions that minimize ecological impact and maximize efficiency.",
      image:
        "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80",
      details: [
        "LEED and passive house certification",
        "Energy modeling and analysis",
        "Sustainable material specification",
        "Renewable energy integration",
      ],
    },
  ];

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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of architectural and design
              services tailored to your specific needs and vision.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-gray-900 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"} relative h-[400px] rounded-lg overflow-hidden`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-32 bg-gray-50 p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule a consultation and discuss how we can
              bring your vision to life.
            </p>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-lg font-medium">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
