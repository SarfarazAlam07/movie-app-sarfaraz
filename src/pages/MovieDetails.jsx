import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


// APICalling
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const MovieDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}&plot=full`);
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div className="text-center text-white mt-10 text-2xl">Loading details...</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex justify-center items-center">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-5 left-5 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
      >
        ⬅ Back
      </button>

      {/* Main Content Card */}
      <div className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row mt-10">
        
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : "https://placehold.co/400x600"} 
            alt={movie.Title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Information */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">{movie.Title}</h1>
          
          <div className="flex gap-4 mb-6 text-sm text-gray-400">
            <span className="border border-gray-600 px-2 py-1 rounded">{movie.Year}</span>
            <span className="border border-gray-600 px-2 py-1 rounded">{movie.Rated}</span>
            <span className="border border-gray-600 px-2 py-1 rounded">{movie.Runtime}</span>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {movie.Plot}
          </p>

          <div className="space-y-2">
            <p><strong className="text-blue-400">Genre:</strong> {movie.Genre}</p>
            <p><strong className="text-blue-400">Director:</strong> {movie.Director}</p>
            <p><strong className="text-blue-400">Actors:</strong> {movie.Actors}</p>
            <p><strong className="text-yellow-500">IMDb Rating:</strong> ⭐ {movie.imdbRating}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;