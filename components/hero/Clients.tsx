import Image from "next/image"

export default function Clients() {
    return (
        <div className=" w-[90%] mx-auto flex flex-col items-center justify-center my-10">
            <h1 className="text-2xl text-zinc-500">Already chosen by leaders</h1>
            <div className="relative w-full mt-8 overflow-hidden">
                <div className="flex justify-center items-center gap-[8%] ">
                    <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-[#0d0c0d] to-transparent z-10"></div>
                    <ImageWrapper src="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg" alt="Client 2" />
                    <ImageWrapper src="/brands/switchfixx.png" alt="Client 1" />
                    <ImageWrapper src="/brands/siagraphics.png" alt="Client 3" />    
                    <ImageWrapper src="/brands/liftlock.png" alt="Client 4" />    
                    <ImageWrapper src="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg" alt="Client 5" />    
                    <ImageWrapper src="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg" alt="Client 5" />    
                    <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-[#0d0c0d] to-transparent z-10"></div>
                </div>
            </div>
        </div>
    )
}

export function ImageWrapper({ src, alt }: { src: string, alt: string }) {
    return (
        <div className="min-w-44 h-auto relative overflow-hidden">
            <Image src={src} alt={alt} width={96} height={96} className="filter grayscale opacity-80" /> {/* Adjusted filter for gray-600 effect */}
        </div>
    )
}
