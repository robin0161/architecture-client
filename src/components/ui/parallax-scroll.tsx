import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxScroll = ({
  children,
  offset = 50,
  className = "",
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};
