"use client";

import Clients from "@/components/hero/Clients";
import { Description } from "@/components/hero/Description";
import Navbar from "@/components/hero/header/Navbar";
import HeroText from "@/components/hero/HeroText";
import { Services } from "@/components/hero/Services";
import Videos from "@/components/hero/Videos";
import { Work } from "@/components/hero/Work";
import Reviews from "@/components/hero/Reviews";
import Stats from "@/components/hero/Stats";
import Faq from "@/components/hero/Faq";
import Contact from "@/components/hero/Contact";
import Footer from "@/components/hero/Footer";
import { useRef, useState } from "react";
import ARvideo from "@/components/hero/ARvideo";

export default function Page() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <div className="sticky top-8 z-40">
        <Navbar />
      </div>
      <HeroText />
      <ARvideo
        videoSrc="https://res.cloudinary.com/dl9upfi3o/video/upload/v1734794496/ar_intro_l7dymc.mp4"
        buttonLink="https://ar-rust.vercel.app/"
      />
      <Clients />
      <Description />
      <Services />
      <Work />
      <Videos />
      <Reviews />
      <Stats />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
