"use client"; // Ensure it's a client component

import Image from "next/image";
import { useState, useEffect } from "react";
import useScreenWidth from "@/hooks/useScreenWidth";

const ResponsiveHeroImage = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null); // No initial image
  const [loading, setLoading] = useState(true);
  const windowWidth = useScreenWidth();
  // const isMobile = windowWidth < 1024;
  const isSmallDesktop = windowWidth >= 1024 && windowWidth < 1366;
  // const isLargeDesktop = windowWidth >= 1366;

  useEffect(() => {
    // Ensure this runs only on the client
    const handleResize = () => {
      if (windowWidth >= 1024) {
        setImageSrc("/male-dev-desktop.svg");
      } else {
        setImageSrc("/male-dev.svg");
      }
      setLoading(false); // Hide loader once image is set
    };

    handleResize(); // Set the initial image
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div className="relative w-full  flex items-center justify-center">
      {!loading && imageSrc && (
        // <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <Image
          src={imageSrc}
          alt="Hero"
          width={
            imageSrc.includes("desktop") ? (isSmallDesktop ? 600 : 889) : 350
          }
          height={imageSrc.includes("desktop") ? 500 : 332}
          priority
          className="transition-opacity duration-500 opacity-100"
        />
      )}
    </div>
  );
};

export default ResponsiveHeroImage;
