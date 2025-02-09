import React from "react";
import { motion } from "framer-motion";
import FloatingNav from "@/components/navigation/FloatingNav";

const About = () => {
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
              About Our Studio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of passionate architects dedicated to creating
              innovative and sustainable architectural solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To transform spaces into extraordinary experiences that inspire
                and enhance the way people live, work, and interact with their
                environment.
              </p>
            </div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Architecture Studio"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries with cutting-edge design solutions",
              },
              {
                title: "Sustainability",
                description:
                  "Creating eco-friendly spaces for future generations",
              },
              {
                title: "Excellence",
                description: "Delivering exceptional quality in every project",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
