"use client";

import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingNav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [transparent, setTransparent] = React.useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 transition-colors duration-300 ${transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-sm"}`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          ARCH<span className="text-gray-500">STUDIO</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />
        </div>

        <button className="md:hidden text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, label }) => {
  return (
    <Link
      to={href}
      className="relative text-gray-900 hover:text-gray-600 transition-colors group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
    </Link>
  );
};

export default FloatingNav;
