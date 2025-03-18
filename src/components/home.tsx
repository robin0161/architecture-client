"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingNav from "./navigation/FloatingNav";
import HeroSlider from "./hero/HeroSlider";
import ProjectGrid from "./projects/ProjectGrid";
import ContactSection from "./contact/ContactSection";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.section id="hero" style={{ opacity, scale }}>
          <HeroSlider />
        </motion.section>

        <section
          id="about"
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Modern Architecture Studio
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-16">
                We create spaces that inspire, innovate, and transform the way
                people live and work. Our award-winning designs combine
                functionality with stunning aesthetics, pushing the boundaries
                of modern architecture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: "✦",
                  title: "Design Excellence",
                  description:
                    "Creating innovative and sustainable architectural solutions",
                },
                {
                  icon: "◈",
                  title: "Expert Team",
                  description:
                    "Experienced architects and designers passionate about their craft",
                },
                {
                  icon: "◇",
                  title: "Sustainable Focus",
                  description:
                    "Committed to environmentally conscious design practices",
                },
              ].map((item, index) => (
                <ParallaxScroll key={index} offset={20}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-8 bg-white rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </ParallaxScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <ProjectGrid />
        </section>

        <section
          id="services"
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive architectural services tailored to your vision
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Architectural Design",
                  description:
                    "From concept to completion, we create stunning architectural designs",
                },
                {
                  title: "Interior Design",
                  description:
                    "Crafting beautiful and functional interior spaces",
                },
                {
                  title: "Urban Planning",
                  description:
                    "Creating sustainable and livable urban environments",
                },
                {
                  title: "Renovation",
                  description:
                    "Transforming existing spaces with modern design solutions",
                },
              ].map((service, index) => (
                <ParallaxScroll key={index} offset={30}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-8 bg-white rounded-lg shadow-lg text-center group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 relative z-10">
                      {service.description}
                    </p>
                  </motion.div>
                </ParallaxScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </motion.main>
    </div>
  );
};

export default Home;
