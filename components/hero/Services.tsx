'use client'
import { useEffect } from "react";
import Image from "next/image";
import Avatar from '../../components/hero/Avatar'

export function Services() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            const target = e.target as HTMLAnchorElement;
            const id = target.getAttribute('href')?.slice(1);
            if (id) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleClick as EventListener);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleClick as EventListener);
            });
        };
    }, []);

    return (
        <div id="service" className="w-[90%] mx-auto flex flex-col items-center justify-center my-16">
            <h1 className="text-2xl text-thin text-neon">
                WHAT YOU'LL GET
            </h1>
            <p className="max-w-[800px] mx-auto text-center md:text-5xl my-6">
            We resolve problems associated with creative procedures.
                 </p>
                 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%]">
                    <div className="w-full aspect-[9/10] rounded-[10%] bg-[#191919] min-h-[400px] md:h-auto flex items-center justify-center">
                        <Image src='/growth.png' alt="growth" width={500} height={500} className="w-[80%] mx-auto mt-6 rounded-xl" />
                    </div>
                    <div className="w-full aspect-[9/10] rounded-[10%] bg-[#191919] min-h-[400px] md:h-auto relative overflow-hidden">
                        <Image src='/growth1.png' alt="growth" width={500} height={500} className="w-[70%] absolute top-[10%] left-1/2 transform -translate-x-1/2 rounded-xl z-30" />
                        <Image src='/growth1.png' alt="growth" width={500} height={500} className="w-[80%] absolute top-[15%] left-1/2 transform -translate-x-1/2 rounded-xl z-30" />
                        <div className="absolute top-[30%] md:top-[40%] w-full leading-[1] flex flex-col pb-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#191919] via-[#191919] to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#191919] to-transparent z-10"></div>
                                <div className="flex gap-1 px-4 overflow-hidden">
                                    {[...Array(40)].map((_, i) => (
                                        <span key={i} className="text-white opacity-30">-</span>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#191919] via-[#191919] to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#191919] to-transparent z-10"></div>
                                <div className="flex gap-1 px-4 overflow-hidden">
                                    {[...Array(24)].map((_, i) => (
                                        <span key={i} className="text-white opacity-30">-</span>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#191919] via-[#191919] to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#191919] to-transparent z-10"></div>
                                <div className="flex gap-1 px-4 overflow-hidden">
                                    {[...Array(30)].map((_, i) => (
                                        <span key={i} className="text-white opacity-30">-</span>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#191919] via-[#191919] to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#191919] to-transparent z-10"></div>
                                <div className="flex gap-1 px-4 overflow-hidden">
                                    {[...Array(41)].map((_, i) => (
                                        <span key={i} className="text-white opacity-30">-</span>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-[80%] overflow-hidden mx-auto flex flex-col justify-end absolute bottom-4 sm:bottom-10 left-10 right-10 min-h-[120px] sm:min-h-0">
                        <h1 className="text-2xl font-semibold mb-1">Tailor-made Design</h1>
                        <p className="text-zinc-500 text-xl">We've got the expertise to make your vision a reality.</p>
                    </div>
                    </div>
                    
                    <div className="w-full aspect-[9/10] rounded-[10%] bg-[#191919] min-h-[400px] md:h-auto relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#191919] to-transparent z-10"></div>
                        <Image src='/growth2.png' alt="growth" width={500} height={500} className="w-[80%] mx-auto rounded-xl relative z-0" />
                        <div className="w-[80%] overflow-hidden mx-auto flex flex-col justify-end absolute bottom-10 left-10 right-10">
                            <h1 className="text-2xl font-semibold mb-1">Scalable as you grow</h1>
                            <p className="text-zinc-500 text-xl">We’re ready to meet your evolving needs.</p>
                        </div>
                    </div>
                 </div>
                 <div className="w-[90%] mt-14 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full p-10 rounded-[2rem] bg-gradient-to-b from-[#202020] to-[#191919] min-h-56 flex flex-col md:flex-row gap-10 overflow-hidden">
                        <div className="md:max-w-[60%] flex flex-col justify-center">
                            <h1 className="text-3xl mb-1">Workflow <br /> integration</h1>
                            <p className="text-zinc-500 text-xl mt-2">We’ve got the expertise to make your vision a reality.</p>
                        </div>
                        <div className="md:-ml-10">
                            <div className="flex gap-3">
                            <Image src='/longbox1/figma.png' alt="figma" width={75} height={75} className="p-3 bg-zinc-900 rounded-full" />
                            <Image src='/longbox1/notion.png' alt="figma" width={75} height={75} className="p-3 bg-zinc-900 rounded-full"/>
                            <Image src='/longbox1/github.png' alt="figma" width={75} height={75} className="p-3 bg-zinc-900 rounded-full" />
                            </div>
                            <div className="flex gap-3 mt-3 ml-10">
                            <Image src='/longbox1/X.png' alt="figma" width={75} height={75} className="p-3 bg-zinc-900 rounded-full" />
                            <Image src='/longbox1/blender.png' alt="figma" width={75} height={75} className="p-3 bg-zinc-900 rounded-full" />
                            <Image src='/longbox1/figma.png' alt="figma" width={75} height={75} className="p-3 bg-zinc-900 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className=" w-full p-10 rounded-[2rem] bg-gradient-to-b from-[#202020] to-[#191919] min-h-56 flex flex-col md:flex-row gap-10 overflow-hidden">
                        <div className="md:max-w-[60%] flex flex-col justify-center ">
                            <h1 className="text-3xl mb-1">Collabrate <br /> real-time</h1>
                            <p className="text-zinc-500 text-xl mt-2">Seamlessly connect all your existing apps.</p>
                        </div>
                        <div className="flex items-center">
                            <Avatar/>
                        </div>
                    </div>
                 </div>
                 <div className="w-full mt-5 hidden md:flex justify-center">
                    <div className="flex flex-wrap justify-center text-lg text-zinc-400 gap-5 items-center">
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919]">
                           <Image src='/star.png' width={25} height={25} alt="" />  Design Services 
                        </div>
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919]">
                           <Image src='/star.png' width={25} height={25} alt="" />  Content 
                        </div>
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919] hidden xl:flex">
                           <Image src='/star.png' width={25} height={25} alt="" />  Management 
                        </div>
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919]">
                           <Image src='/star.png' width={25} height={25} alt="" />  Website 
                        </div>
                    </div>
                 </div>
                 <div className="w-full mt-5  justify-center hidden md:flex">
                    <div className="flex flex-wrap justify-center text-lg text-zinc-400 gap-5 items-center">
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919] hidden xl:flex">
                           <Image src='/star.png' width={25} height={25} alt="" /> Premium Edits 
                        </div>
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919]">
                           <Image src='/star.png' width={25} height={25} alt="" />  Marketing 
                        </div>
                        <div className="px-6 flex items-center gap-3 py-4 rounded-xl bg-[#191919]">
                           <Image src='/star.png' width={25} height={25} alt="" />  Branding 
                        </div>
                        
                    </div>
                 </div>
        </div>
    )
}
