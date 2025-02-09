import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface FloatingNavProps {
  links?: Array<{ href: string; label: string }>;
  threshold?: number;
}

const FloatingNav = ({
  links = [
    { href: "/about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ],
  threshold = 100,
}: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setVisible(latest > threshold);
    });
  }, [scrollY, threshold]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center justify-center h-16 gap-8">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  );
};

export default FloatingNav;
