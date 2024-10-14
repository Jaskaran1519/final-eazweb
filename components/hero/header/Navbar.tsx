'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Navbar: React.FC = () => {
  useEffect(() => {
    console.log('Navbar component mounted');
  }, []);

  const handleScroll = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80 // This replaces your yOffset
    });
  };

  return (
    <nav className="w-full py-4  max-w-[1300px] mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/whitelogo.webp" alt="Logo" width={150} height={150} />
        <ul className="flex hidden md:flex space-x-6 px-10 py-5 rounded-full text-lg text-gray-500 bg-black/30 backdrop-filter backdrop-blur-lg border border-zinc-800">
          <li><a onClick={() => handleScroll('hero')} className="hover:text-zinc-200 duration-500 cursor-pointer">Home</a></li>
          <li><a onClick={() => handleScroll('work')} className="hover:text-zinc-200 duration-500 cursor-pointer">Work</a></li>
          <li><a onClick={() => handleScroll('service')} className="hover:text-zinc-200 duration-500 cursor-pointer">Services</a></li>
          <li><a onClick={() => handleScroll('contact')} className="hover:text-zinc-200 duration-500 cursor-pointer">Contact</a></li>
        </ul>
        <div className='px-6 py-3 rounded-full backdrop-filter backdrop-blur-lg cursor-pointer border border-zinc-800 hover:border-primary duration-500 bg-black/30'>
          Notify Me
        </div>
      </div>                    
    </nav>
  );
};

export default Navbar;
