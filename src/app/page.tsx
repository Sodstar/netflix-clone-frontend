import React from "react";
import Link from "next/link";
import { getAllMovies } from "@/service/movie.services";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

async function Home() {
  const movies = await getAllMovies();
  const featuredMovie = movies.results[0];
  const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;

  console.log(IMAGE_BASE_URL);

  return (
    <div className="bg-black text-white min-h-screen">

          <header className="flex justify-between items-center p-6 bg-black fixed w-full top-0 z-10">
      <a href="/">
        <img src="/logo.png" className="w-36" />
      </a>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Нүүрх уудас</Link>
          </li>
          <li>
            <Link href="#">Кино</Link>
          </li>
          <li>
            <Link href="#">TV шоу</Link>
          </li>
          <li>
            <Link href="#">Миний жагсаалт</Link>
          </li>
        </ul>
      </nav>
    </header>

      <div className="h-7"></div>
      {featuredMovie && (
        <div
          className="relative w-full h-[500px] bg-cover bg-center mt-16"
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${featuredMovie.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-8 flex flex-col justify-end">
            <h1 className="text-5xl font-bold mb-4">{featuredMovie.title}</h1>
            <p className="text-lg max-w-xl">{featuredMovie.overview}</p>
            <div className="mt-4">
              <Link href={`/movie/${featuredMovie.id}`}>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700">
                  Тоглуулах
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* <Trending movies={movies.results} /> */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Үзэлт ихтэй кино</h2>
        <div className="flex overflow-x-auto space-x-8 w-full">
          {movies.results.slice(0, 16).map((movie: MovieType) => (
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
      </div>
      
      <footer className="bg-gray-900 p-6 text-center text-gray-400 mt-10 sticky top-[100vh]">
      <p>&copy; 2025 Netflix Clone. Ямарч зохиогчийн эрхгүй.</p>
    </footer>
    
    </div>
  );
}

export default Home;
