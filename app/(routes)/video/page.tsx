"use client"
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

export default function Page() {
  const [columns, setColumns] = useState(3);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const videoLinks = [
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728621775/Sequence_01-1_gw2u69.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728621600/output3_oxsplt.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728579048/3d_video1.1-2_tvdcia.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728579067/forest_animation_2_wl7igs.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728578502/Sequence_01_ujdj9j.mp4", type: "Reels" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728578907/T_shirts_soauwx.mp4", type: "Reels" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728578665/Final_Animation_Eevee_m5sxl6.mp4", type: "3D" },
    { url: "https://res.cloudinary.com/drl2qcn1t/video/upload/v1728639269/Intro_Video_5th_Simranpreet_Singh_Final_Render_lx2ver.mp4", type: "Reels" },
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

  // Spinner component
  const Spinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon"></div>
    </div>
  );

  return (
    <div className="w-[90%] mx-auto min-h-screen">
      <div className='text-center text-3xl font-bold my-10 text-neon font-bold'>
        <h1>Content</h1>
      </div>
      <div className="flex justify-center mb-6 space-x-4">
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            filter === 'all' 
              ? 'bg-neon text-black' 
              : 'text-gray-300 hover:text-neon'
          }`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            filter === '3D' 
              ? 'bg-neon text-black' 
              : 'text-gray-300 hover:text-neon'
          }`}
          onClick={() => handleFilterChange('3D')}
        >
          3D Animations
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            filter === 'Reels' 
              ? 'bg-neon text-black' 
              : 'text-gray-300 hover:text-neon'
          }`}
          onClick={() => handleFilterChange('Reels')}
        >
          Reels
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Masonry
          key={filter}
          breakpointCols={columns}
          className="flex w-auto -ml-4 sm:-ml-6 lg:-ml-8"
          columnClassName="pl-4 sm:pl-6 lg:pl-8 bg-clip-padding"
        >
          {filteredVideos.map((video, index) => (
            <div key={`${filter}-${index}`} className="mb-4 sm:mb-6 lg:mb-8">
              <video 
                loop 
                muted 
                autoPlay 
                playsInline
                className="w-full rounded-lg" 
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
}