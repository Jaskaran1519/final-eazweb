import { Protest_Strike } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const heroFont = Protest_Strike({
    subsets: ["latin"],
    weight: "400",
    display: 'swap',
})

const projects = [
  {
    name: "Fizzi",
    imageSrc: "/work/fizzi.png",
    link: "https://fizzi-demo.vercel.app/"
  },
  {
    name:"Bawa",
    imageSrc:"/work/bawa.png",
    link:"http://bawajewels.com/"
  },
  {
    name:"Harmilap Boutique",
    imageSrc:"/work/harmilap.png",
    link:"http://harmilapboutique.com/"
  },
  {
    name: "Real Estate",
    imageSrc: "/work/realestate.png",
    link: "https://real-estate-web.pages.dev/"
  },
  {
    name: "Ricaverse",
    imageSrc: "/work/ricaverse.png",
    link: "https://ricaverse.in`"
    },
  {
    name: "Portfolio",
    imageSrc: "/work/jaskaran.png",
    link: "https://jaskaran1519.vercel.app"
    },
  {
    name: "Sharelit",
    imageSrc: "/work/sharelit.png",
    link: "https://sharelit.vercel.app"
    },
  {
    name: "Quizesty",
    imageSrc: "/work/quizesty.png",
    link: "https://quizesty.vercel.app"
    },
  {
    name: "Felina",
    imageSrc: "/work/felina.png",
    link: "https://felina1519.vercel.app"
    },
  {
    name: "Lift Lock",
    imageSrc: "/work/liftlock.png",
    link: "https://liftlock.in"
    },
  {
    name: "Sia Graphics",
    imageSrc: "/work/siagraphics.png",
    link: "https://siagraphics.vercel.app"
    },
];

export default function Page() {
    return (
        <div className="w-[90%] mx-auto max-w-[1200px] min-h-screen">
            <div className="flex items-center justify-between my-10">
                <Link href="/" className="text-white hover:text-black bg-transparent hover:bg-neon rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <h1 className={`text-5xl font-bold text-center ${heroFont.className}`}>Some of our work</h1>
                <div className="w-12"></div> {/* Spacer to balance the layout */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Link href={project.link} key={index} className="group" target="_blank" rel="noopener noreferrer">
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={project.imageSrc}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className={`text-3xl font-bold text-white opacity-0 transform translate-y-[50px] transition-all duration-300 ease-in-out
                                                   group-hover:opacity-100 group-hover:translate-y-0
                                                   group-hover:text-blue-200 group-hover:font-black ${heroFont.className}`}>
                                        {project.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
