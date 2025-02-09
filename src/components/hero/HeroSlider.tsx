import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSliderProps {
  images?: string[];
  interval?: number;
  titles?: string[];
  descriptions?: string[];
}

import { useInView } from "framer-motion";

const HeroSlider = ({
  images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "https://images.unsplash.com/photo-1600585153490-76fb20a32601",
  ],
  interval = 5000,
  titles = [
    "Modern Residential Design",
    "Sustainable Architecture",
    "Urban Development",
  ],
  descriptions = [
    "Award-winning residential project in Los Angeles",
    "Eco-friendly commercial building in New York",
    "Mixed-use development in Chicago",
  ],
}: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="relative w-full h-[900px] bg-black overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={images[currentIndex]}
              alt={titles[currentIndex]}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-32 left-16 z-20 text-white"
            >
              <h1 className="text-6xl font-bold mb-4">
                {titles[currentIndex]}
              </h1>
              <p className="text-xl">{descriptions[currentIndex]}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default HeroSlider;
