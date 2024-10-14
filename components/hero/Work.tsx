"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, easeInOut } from 'framer-motion';
import { useRef } from 'react';

interface ProjectCardProps {
    src: string;
    title: string;
    description: string;
    imageOnLeft: boolean;
    href: string;  
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, imageOnLeft, href }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { 
                duration: 0.5,
                ease: easeInOut
            } 
        },
    };

    const contentVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                duration: 0.5,
                delay: 0.2
            } 
        },
    };

    return (
        <div ref={ref} className={`flex flex-col md:flex-row ${imageOnLeft ? '' : 'md:flex-row-reverse'} items-center gap-10`}>
            <motion.div 
                className="w-full md:w-1/2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariants}
            >
                <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                    <Image src={src} alt={title} width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </a>
            </motion.div>
            <motion.div 
                className="w-full md:w-1/2 flex flex-col justify-center items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={contentVariants}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 hidden md:block">{title}</h2>
                <a href={href} target="_blank" rel="noopener noreferrer" className="group relative text-neon mt-4 items-center px-7 py-4 bg-transparent border border-neon rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:text-black hidden md:inline-flex">
                    <span className="relative z-10 mr-2">View Project</span>
                    <span className="absolute inset-0 bg-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45 group-hover:-rotate-45 transition-all duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </a>
            </motion.div>
        </div>
    );
};

export const Work = () => {
    const projects = [
        {
            src: '/work/realestate.png',
            title: 'Real Estate',
            description: 'Description for Project 1...',
            href: 'https://real-estate-web.pages.dev/'
        },
        {
            src: '/work/ricaverse.png',
            title: 'Ricaverse',
            description: 'Description for Project 3...',
            href: 'https://ricaverse.in/'
        },
        {
            src: '/work/jaskaran.png',
            title: 'Portfolio',
            description: 'Description for Project 2...',
            href: 'https://jaskaran1519.vercel.app/'
        }
    ];

    return (
        <div className="w-[90%] mx-auto my-10" id='work'>
            <div className="text-center">
                <h1 className="text-2xl font-bold text-neon">OUR WORK</h1>
                <p className="max-w-[800px] mx-auto text-center text-4xl my-6">
                    We have a wide range of work that we have done for our clients.
                </p>
            </div>
            <div className="w-full space-y-12 md:space-y-24 mt-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        imageOnLeft={index % 2 === 0}
                        href={project.href}  // New prop for project link
                    />
                ))}
            </div>
            <div className='w-full flex justify-center items-center mt-5'>
                <Link href='/project' className='group relative text-neon mt-4 inline-flex items-center px-7 py-4 bg-transparent border border-neon rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:text-black'>
                    <span className="relative z-10">More Work</span>
                    <span className="absolute inset-0 bg-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" style={{
                        borderRadius: '0 100px 100px 0'
                    }}></span>
                </Link>
            </div>
        </div>
    );
};
