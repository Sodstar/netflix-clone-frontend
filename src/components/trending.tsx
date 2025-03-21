"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Trending = ({ movies }: { movies: MovieType[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-8 relative">
      <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-10"
          onClick={() => scroll("left")}
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 w-full scrollbar-hide"
        >
          {movies.slice(0, 16).map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <div className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-300 w-44">
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg w-full h-80 object-cover"
                />
                <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-10"
          onClick={() => scroll("right")}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Trending;
