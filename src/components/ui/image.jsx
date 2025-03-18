import React from "react";
import { cn } from "@/lib/utils";

const Image = ({ src, alt, width, height, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      loading="lazy"
      {...props}
    />
  );
};

export { Image };
