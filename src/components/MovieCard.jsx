import React from "react";
import { Link } from "react-router-dom"; 
const MovieCard = ({ movie }) => {
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/400x600?text=No+Poster";

  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer group">
        {/* --- IMAGE SECTION --- */}
        <div className="relative">
          <img
            src={posterUrl}
            alt={movie.Title}
            className="w-full h-[400px] object-cover transition-opacity duration-300 group-hover:opacity-75"
          />

          {/* Type Badge (e.g., MOVIE/SERIES) - Image ke upar */}
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded-full shadow-sm">
            {movie.Type}
          </span>
        </div>

        {/* --- CONTENT SECTION (Title & Year) --- */}
        <div className="p-4">
          {/* Title */}
          <h3
            className="text-gray-900 dark:text-white text-lg font-semibold truncate"
            title={movie.Title}
          >
            {movie.Title}
          </h3>

          {/* Year & Details */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-400 text-sm flex items-center gap-1">
              {/* Ek chota sa calendar icon (optional) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clipRule="evenodd"
                />
              </svg>
              {movie.Year}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
