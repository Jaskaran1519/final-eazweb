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
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728621775/Sequence_01-1_gw2u69.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728621600/output3_oxsplt.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728579048/3d_video1.1-2_tvdcia.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728579067/forest_animation_2_wl7igs.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728578502/Sequence_01_ujdj9j.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728578907/T_shirts_soauwx.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728578665/Final_Animation_Eevee_m5sxl6.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728639269/Intro_Video_5th_Simranpreet_Singh_Final_Render_lx2ver.mp4", type: "Reels" },
    {url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729180865/2_ojawl1.mp4", type:"Reels"},
    {url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729181046/Reel_Project_14_New_Graded_Output_High_Quality_-_Copy_t001ge.mp4", type:"Reels"},
    {url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729181450/Trip_Reel_2nd_Rendered_-_Copy_ldesnu.mp4", type:"Reels"},
    {url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729181537/ROR_5th_Reel_Ricademy_Skill_Improvement_Render_File_tr53hx.mp4", type:"Reels"},
    {url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729181867/Trip_Reel_2nd_Rendered_-_Copy_jsjlgp.mp4", type:"Reels"},
    {url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729182334/MB_ADD_trwvqp.mp4", type:"Reels"},
    { url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729529329/D04ABC1B615EE134CBA7F4E046B176BE_video_dashinit_vjacmj.mp4", type:"3D"},
    { url:"https://res.cloudinary.com/drl2qcn1t/video/upload/v1729529337/video_20241019_200457_edit_l0lclk.mp4", type:"3D"}
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
      <div className='text-center text-3xl font-bold my-10 text-neon font-bold'>
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
