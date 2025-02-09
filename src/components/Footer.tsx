import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Modern Architects</h3>
            <p className="text-gray-400">
              Creating spaces that inspire and transform the way people live.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Architectural Design
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Urban Planning
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sustainable Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@modernarchitects.com</span>
              </li>
              <li>123 Architecture Ave</li>
              <li>Los Angeles, CA 90001</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Modern Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
