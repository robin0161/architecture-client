"use client";

import React from "react";
import { motion } from "framer-motion";
import FloatingNav from "@/components/navigation/FloatingNav";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Architectural Design",
      description:
        "Comprehensive architectural solutions for residential and commercial projects",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
    },
    {
      title: "Interior Design",
      description:
        "Creating functional and aesthetically pleasing interior spaces",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Urban Planning",
      description: "Developing sustainable urban environments and master plans",
      image: "https://images.unsplash.com/photo-1529497584159-d2751c707c85",
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly solutions for modern architectural challenges",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive architectural solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
