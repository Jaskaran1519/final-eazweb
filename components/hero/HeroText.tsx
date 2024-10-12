import Image from "next/image";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function HeroText() {
    return (
        <div className="w-full relative overflow-hidden">

        <div className="mt-16 text-center max-w-[90%] md:max-w-[700px] mx-auto">
            <h1 className={`${manrope.className} text-primary text-[2.75rem] my-10 md:text-[5rem] leading-[1.1] font-semibold bg-gradient-to-tr from-zinc-500 to-white text-transparent bg-clip-text`}>
                Design work, <br /> the efficient way
            </h1>
            <h2 className="mt-4 text-secondary md:max-w-[70%] mx-auto text-gray-500 text-[1.25rem] leading-tight">Innovative design and content services for business firms and emerging business weiry of typical aesthetic methodology. Arriving shortly</h2>
            <div className="flex flex-col items-center justify-center md:max-w-[70%] mx-auto mt-10">
                <div className="relative w-full">
                    <input type="text" placeholder="Enter your email" className="w-full text-[1rem] px-10 py-5 pr-40 rounded-full bg-transparent border border-gray-300" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#deff00] text-black font-semibold px-6 py-3 rounded-full">Get Notified</button>
                </div>
            </div>
        </div>
        <div className="relative w-full mx-auto mt-10">
            {/* Left gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-[#0d0c0d] to-transparent z-10"></div>
            
            <div className="flex justify-center gap-5 md:h-[400px] relative">
                <Image 
                    src="https://framerusercontent.com/images/71Lkazp81ZpTwq5E8mgETaQgA8.jpg"
                    alt="Hero Image"
                    width={220}
                    height={220}
                    className="w-[80px] h-[80px] md:w-[220px] md:h-[220px] pr-2 xl:absolute xl:left-16 xl:-top-60 rounded-[10%] object-cover"
                />
                <Image 
                    src="https://framerusercontent.com/images/zD5YOAhzOzuOk015DU7X7qNNGI.jpg?scale-down-to=512"
                    alt="Hero Image"
                    width={280}
                    height={280}
                    className="w-[80px] h-[80px] md:w-[280px] md:h-[280px] xl:absolute xl:left-36 xl:top-10 rounded-[10%] object-cover"
                />
                <Image 
                    src="https://framerusercontent.com/images/Br0m8k72i6obkxvmy0bdrdCw50Y.jpg"
                    alt="Hero Image"
                    width={220}
                    height={220}
                    className="w-[80px] h-[80px] md:w-[220px] md:h-[220px] xl:absolute xl:right-16 xl:-top-60 rounded-[10%] object-cover"
                />
                <Image 
                    src="https://framerusercontent.com/images/lRrPICMkVKTOrJaQQBoCo6ZxxA.jpg"
                    alt="Hero Image"
                    width={200}
                    height={200}
                    className="w-[80px] h-[80px] md:w-[200px] md:h-[200px] xl:absolute xl:top-24 rounded-[10%] object-cover"
                />
                <Image 
                    src="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg"
                    alt="Hero Image"
                    width={250}
                    height={250}
                    className="w-[80px] h-[80px] md:w-[250px] md:h-[250px] xl:absolute xl:right-36 xl:top-12 rounded-[10%] object-cover"
                />
            </div>
            
            {/* Right gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#0d0c0d] to-transparent z-10"></div>
            
            {/* New foggy bottom gradient */}
            <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0d0c0d] via-[#0d0c0d] to-transparent opacity-70 z-20"></div>
        </div>
        </div>
    )
}