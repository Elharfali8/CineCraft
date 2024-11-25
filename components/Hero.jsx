'use client';

import { useState, useEffect } from 'react';
import { fetchNowPlayingMovies } from '@/utils/fetchNowPlaying';
import HeroHeadline from './HeroHeadline';
import Link from 'next/link';

const Hero = () => {
  const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [type, setType] = useState('movie')

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchNowPlayingMovies({type});
      setMovies(data);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      },10000); 

      return () => clearInterval(interval); 
    }
  }, [movies]);

  return (
    <section className="w-[95%] lg:w-[90%] h-[95%] lg:h-[90%] rounded-xl relative overflow-hidden shadow-lg">
      {/* Dynamic Background */}
      {movies.length > 0 && (
        <div
          className="absolute  inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[currentIndex].backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      )}

      {/* Overlay for Content */}
      <div className="relative z-10 w-full h-full bg-black bg-opacity-40 grid place-items-center ">
        <div className="container main-container ">
                  <HeroHeadline />
        </div>
      </div>
    </section>
  );
};

export default Hero;
