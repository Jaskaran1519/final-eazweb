"use client"
import Loader from '@/components/Loader';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-css';

export default function Page() {
  const [columns, setColumns] = useState(3);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [visibleVideos, setVisibleVideos] = useState(4); // New state for visible videos
  const [loadingMore, setLoadingMore] = useState(false); // Loading state for loading more videos

  const videoLinks = [
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561791/Sequence_01-1_or2wwc.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731562173/output3_opoxtr.mp4", type: "CGI" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561289/eazweb_cosmetics_video_q7gfli.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561899/Sequence_01_oji4cg.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561639/T_shirts_g59ymv.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561210/3d_video1.1-2_dxr1fg.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561121/forest_animation_2_gbervt.mp4", type: "3D" },
    { url: "https://utfs.io/f/gT2gu5kz3l1ut46mkislc6bINSmTdukFxUXg3LBQvM0K5Hns", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731563117/MB_ADD_qyg4zl.mp4", type: "Reels" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561022/Intro_Video_5th_Simranpreet_Singh_Final_Render_s1en3m.mp4", type: "Reels" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731563931/Trip_Promotional_Reel_Rendered_File_1_bw2xhd.mp4", type: "Reels" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731565694/ROR_5th_Reel_Ricademy_Skill_Improvement_Render_File_bqz4or.mp4", type: "Reels" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731561432/Final_Animation_Eevee_tfg4ei.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/dtopsoqao/video/upload/v1731559642/Reel_Project_14_New_Graded_Output_High_Quality_ewo2bu.mp4", type: "Reels" },
  ];

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, [filter]);

  const filteredVideos = filter === 'all' 
    ? videoLinks 
    : videoLinks.filter(video => video.type === filter);

  const handleFilterChange = (newFilter:any) => {
    setFilter(newFilter);
  };

  const handleVideoClick = (index: number) => {
    if (activeVideoIndex === index) {
      // Clicking the active video again mutes it
      setActiveVideoIndex(null);
      if (videoRefs.current[index]) {
        videoRefs.current[index]!.muted = true;
      } 
    } else {
      // Mute previously active video
      if (activeVideoIndex !== null && videoRefs.current[activeVideoIndex]) {
        videoRefs.current[activeVideoIndex]!.muted = true;
      }
      // Unmute clicked video
      setActiveVideoIndex(index);
      if (videoRefs.current[index]) {
        videoRefs.current[index]!.muted = false;
        videoRefs.current[index]!.play(); // Ensure the video starts playing
      }
    }
  };

  // Spinner component
  const Spinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon"></div>
    </div>
  );

  const handleLoadMore = () => {
    setLoadingMore(true); // Set loading state to true
    setTimeout(() => { // Simulate loading delay
      setVisibleVideos(prev => prev + 4); // Load 4 more videos
      setLoadingMore(false); // Reset loading state
    }, 1000); // Adjust this delay as needed
  };

  const displayedVideos = filteredVideos.slice(0, visibleVideos);

  // New Intersection Observer for video playback control
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play(); // Play video if in viewport
        } else {
          video.pause(); // Pause video if out of viewport
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Observe each video element
    displayedVideos.forEach((_, index) => {
      if (videoRefs.current[index]) {
        observer.observe(videoRefs.current[index]!);
      }
    });

    return () => {
      // Cleanup observer on unmount
      displayedVideos.forEach((_, index) => {
        if (videoRefs.current[index]) {
          observer.unobserve(videoRefs.current[index]!);
        }
      });
    };
  }, [displayedVideos]); // Run effect when displayedVideos changes

  return (
    <div className="w-[90%] mx-auto min-h-screen">
      <div className='text-center text-3xl font-bold my-10 text-neon'>
        <h1>Content</h1>
      </div>
      <div className="flex justify-center mb-6 space-x-4">
        <button 
          className={`px-4 py-2 rounded-full hover:text-gray-900 text-sm font-medium transition-all duration-300 ease-in-out transform ${
            filter === 'all' 
              ? 'bg-neon text-black scale-105' 
              : 'text-gray-300 hover:text-neon hover:bg-gray-200 hover:scale-105'
          }`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-full hover:text-gray-900 text-sm font-medium transition-all duration-300 ease-in-out transform ${
            filter === '3D' 
              ? 'bg-neon text-black scale-105' 
              : 'text-gray-300 hover:text-neon hover:bg-gray-200 hover:scale-105'
          }`}
          onClick={() => handleFilterChange('3D')}
        >
          3D 
        </button>
        <button 
          className={`px-4 py-2 rounded-full hover:text-gray-900 text-sm font-medium transition-all duration-300 ease-in-out transform ${
            filter === 'Reels' 
              ? 'bg-neon text-black scale-105' 
              : 'text-gray-300 hover:text-neon hover:bg-gray-200 hover:scale-105'
          }`}
          onClick={() => handleFilterChange('Reels')}
        >
          Video Prod.
        </button>
        <button 
          className={`px-4 py-2 rounded-full hover:text-gray-900 text-sm font-medium transition-all duration-300 ease-in-out transform ${
            filter === 'CGI' 
              ? 'bg-neon text-black scale-105' 
              : 'text-gray-300 hover:text-neon hover:bg-gray-200 hover:scale-105'
          }`}
          onClick={() => handleFilterChange('CGI')}
        >
          CGI
        </button>
      </div>

      {isLoading ? (
        <Loader /> // Use Loader component for main loading state
      ) : (
        <Masonry
          key={filter}
          breakpointCols={columns}
          className="flex w-auto -ml-4 sm:-ml-6 lg:-ml-8"
          columnClassName="pl-4 sm:pl-6 lg:pl-8 bg-clip-padding"
        >
          {displayedVideos.map((video, index) => (
            <div key={`${filter}-${index}`} className="mb-4 sm:mb-6 lg:mb-8 relative">
              <div className={`
                rounded-lg overflow-hidden
                ${activeVideoIndex === index ? 'border-4 border-rainbow animate-rainbow-border' : ''}
              `}>
                <video 
                  ref={el => {videoRefs.current[index] = el}}
                  loop 
                  muted 
                  autoPlay 
                  playsInline
                  className={`w-full cursor-pointer
                    ${activeVideoIndex !== null && activeVideoIndex !== index ? 'brightness-50' : ''}
                  `}
                  onClick={() => handleVideoClick(index)}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {activeVideoIndex !== null && activeVideoIndex !== index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              )}
            </div>
          ))}
        </Masonry>
      )}
      {visibleVideos < filteredVideos.length && ( // Show button if there are more videos to load
        <div className="flex justify-center mt-4"> {/* Center the button */}
          <button onClick={handleLoadMore} className="px-4 py-2 bg-neon text-black rounded-full flex items-center">
            {loadingMore ? ( // Show spinner while loading
              <div className="spinner mr-2" /> // Add a spinner with margin for spacing
            ) : null}
            {loadingMore ? 'Loading...' : 'More Videos'} {/* Show loading text or button text */}
          </button>
        </div>
      )}
    </div>
  );
}
