import React from "react";
import { motion } from "framer-motion";
import FloatingNav from "@/components/navigation/FloatingNav";
import { Image } from "@/components/ui/image";

const AboutPage = () => {
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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate architects dedicated to creating
              spaces that inspire and endure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2005, our studio began with a simple mission: to
                create thoughtful, sustainable architecture that positively
                impacts people's lives and the environment.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've grown from a small team of three to a
                diverse group of architects, designers, and planners working
                across residential, commercial, and cultural projects worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines innovative design thinking with a deep
                respect for context, history, and the natural environment. We
                believe that great architecture should not only be beautiful but
                also functional, sustainable, and meaningful to the communities
                it serves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Architecture studio"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainability",
                  description:
                    "We prioritize environmentally responsible design in all our projects, from material selection to energy efficiency.",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace new technologies and design approaches to create forward-thinking solutions to complex architectural challenges.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork and partner closely with clients, communities, and consultants throughout the design process.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Principal Architect",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                },
                {
                  name: "David Chen",
                  role: "Design Director",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
                },
                {
                  name: "Maria Rodriguez",
                  role: "Project Manager",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
                },
                {
                  name: "James Wilson",
                  role: "Sustainability Lead",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
