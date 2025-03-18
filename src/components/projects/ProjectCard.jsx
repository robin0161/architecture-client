"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";

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
}) => {
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
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt={title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
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
            <div className="relative w-full h-[400px]">
              <Image
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {additionalImages.map((img, index) => (
                <div key={index} className="relative w-full h-48">
                  <Image
                    src={img}
                    alt={`${title} detail ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
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
            <Link to={`/projects/${id}`}>
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                View Case Study
              </Button>
            </Link>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
