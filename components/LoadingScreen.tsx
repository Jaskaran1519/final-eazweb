"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Londrina_Sketch } from 'next/font/google';


const mainFont = Londrina_Sketch({
    subsets:["latin"],
    weight:['400']
})

const LoadingScreen = () => {
  const [text, setText] = useState(''); // Keep track of typed text
  const [isVisible, setIsVisible] = useState(true); // New state for visibility
  const loadingText = "Eazweb";
  let index = 0;

  useEffect(() => {
    const typeLetter = () => {
      if (index < loadingText.length) {
        setText((prev) => prev + loadingText.charAt(index));
        index++;
        setTimeout(typeLetter, 300); // Adjust typing speed here
      } else {
        setTimeout(() => {
          setIsVisible(false); // Hide loading screen after typing
        }, 1000); // Wait 1 second after typing is complete
      }
    };

    typeLetter();
  }, []);

  return (
    <div id="loading-screen" className={`fixed inset-0 flex items-center justify-center bg-[#0d0c0d] z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <h1 className={`text-white text-6xl md:text-8xl font-bold ${mainFont.className}`}> {/* Added mainFont class */}
        {"EAZWEB".split('').map((letter, i) => (
          <motion.span 
            key={i} 
            initial={{ y: 30, opacity: 0 }} // Check if this is visible within the parent
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: i * 0.3, duration: 0.5 }} 
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default LoadingScreen;
