import Link from "next/link";

export default function Videos() {
  return (
    <div className="w-[90%] mx-auto max-w-[1000px] flex flex-col md:flex-row items-center justify-between gap-12 py-16">
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Captivating Video Content
        </h2>
        <p className="text-lg text-gray-300">
          Our videos showcase the essence of our work, bringing ideas to life
          through stunning visuals and compelling storytelling. Watch and be
          inspired by our creative process and results.
        </p>
        <div className="w-full  justify-center items-center mt-5 hidden md:flex">
          <Link
            href="/video"
            className="group relative text-neon mt-4 inline-flex items-center px-7 py-4 bg-transparent border border-neon rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:text-black"
          >
            <span className="relative z-10 mr-2">View More</span>
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
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 aspect-[5/4]">
        <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dtopsoqao/video/upload/v1731561639/T_shirts_g59ymv.mp4"
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-5 md:hidden">
        <Link
          href="/video"
          className="group relative text-neon mt-4 inline-flex items-center px-7 py-4 bg-transparent border border-neon rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:text-black"
        >
          <span className="relative z-10 mr-2">View More</span>
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
        </Link>
      </div>
    </div>
  );
}
