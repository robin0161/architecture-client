import React from "react";
import HeroSlider from "./hero/HeroSlider";
import ProjectGrid from "./projects/ProjectGrid";
import ContactSection from "./contact/ContactSection";
import FloatingNav from "./navigation/FloatingNav";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />
      <HeroSlider />
      <ProjectGrid />
      <ContactSection />
    </div>
  );
};

export default Home;
