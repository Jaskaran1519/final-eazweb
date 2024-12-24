import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Volume2, VolumeOff } from "lucide-react";

interface VideoWithButtonProps {
  videoSrc: string;
  buttonLink: string;
}

const ARvideo: React.FC<VideoWithButtonProps> = ({ videoSrc, buttonLink }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Initialize as muted

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start({
              x: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            });
          } else {
            setIsVisible(false);
            controls.start({
              x: 200, // Keep the slide out position consistent
              opacity: 0,
              transition: { duration: 0.2 },
            });
          }
        });
      },
      {
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative overflow-hidden mt-10" ref={containerRef}>
      <div className="w-[90%] mx-auto max-w-[1200px] relative overflow-hidden rounded-lg pb-32 sm:pb-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at center, transparent 60%, #0d0c0d),
              linear-gradient(to right, #0d0c0d 0%, transparent 10%, transparent 90%, #0d0c0d 100%),
              linear-gradient(to bottom, #0d0c0d 0%, transparent 10%, transparent 90%, #0d0c0d 100%)
            `,
          }}
        />
        <video
          src={videoSrc}
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted} // Control mute state with isMuted
          className="w-full aspect-video object-cover"
          style={{
            mask: "radial-gradient(circle at center, black 60%, transparent 100%)",
            WebkitMask:
              "radial-gradient(circle at center, black 60%, transparent 100%)",
          }}
        />
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 focus:outline-none"
          style={{ zIndex: 50 }} // Ensure it's above other elements
        >
          {isMuted ? <VolumeOff /> : <Volume2 />}
        </button>
      </div>

      <motion.button
        onClick={() => window.open(buttonLink, "_blank")}
        initial={{ x: 100, opacity: 0 }}
        animate={controls}
        className="group absolute bottom-8 right-6 text-neon mt-4 inline-flex items-center px-7 py-4 bg-transparent border border-neon rounded-full overflow-hidden transition-all duration-100 ease-in-out hover:text-black"
        style={{ zIndex: 40 }} // Ensure button is above the video
      >
        <span className="relative z-10 mr-2">Visit Website</span>
        <span className="absolute inset-0 bg-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        <span className="relative z-10 w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform rotate-45 group-hover:-rotate-45 transition-all duration-300 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </motion.button>
    </div>
  );
};

export default ARvideo;
