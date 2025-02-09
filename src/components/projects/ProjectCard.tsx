import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  year?: string;
  location?: string;
  category?: string;
  fullDescription?: string;
  additionalImages?: string[];
}

const ProjectCard = ({
  id = "1",
  title = "Modern Villa Project",
  description = "Contemporary residential design with sustainable features",
  imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  year = "2023",
  location = "Los Angeles, CA",
  category = "Residential",
  fullDescription = "A stunning modern villa that seamlessly blends indoor and outdoor living. This project showcases sustainable architecture with its green roof, solar panels, and natural ventilation systems.",
  additionalImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "https://images.unsplash.com/photo-1600585153490-76fb20a32601",
  ],
}: ProjectCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden bg-white">
            <AspectRatio ratio={3 / 4}>
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </AspectRatio>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span>{year}</span>
                <span>•</span>
                <span>{location}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-white">
        <div className="grid gap-6 p-6">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{category}</span>
            <span>•</span>
            <span>{location}</span>
            <span>•</span>
            <span>{year}</span>
          </div>

          <div className="grid gap-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              {additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} detail ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {fullDescription}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              onClick={() => (window.location.href = `/projects/${id}`)}
              className="bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              View Case Study
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
