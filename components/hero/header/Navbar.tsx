import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4  max-w-[1300px] mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/whitelogo.webp" alt="Logo" width={150} height={150} />
        <ul className="flex hidden md:flex space-x-6 px-10 py-5 rounded-full text-lg text-gray-500 bg-black/30 backdrop-filter backdrop-blur-lg border border-zinc-800">
          <li><a href="/" className="hover:text-zinc-200 duration-500">Home</a></li>
          <li><a href="/about" className="hover:text-zinc-200 duration-500">About</a></li>
          <li><a href="#service" className="hover:text-zinc-200 duration-500">Services</a></li>
          <li><a href="/contact" className="hover:text-zinc-200 duration-500">Contact</a></li>
        </ul>
        <div className='px-6 py-3 rounded-full backdrop-filter backdrop-blur-lg cursor-pointer border border-zinc-800 hover:border-primary duration-500 bg-black/30'>
          Notify Me
        </div>
      </div>                    
    </nav>
  );
};

export default Navbar;