import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY; 
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`; // URL banaya
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Avengers');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // --- 1. THEME STATE ---
  const [theme, setTheme] = useState("dark");

  // --- 2. THEME CHANGE LOGIC ---
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const searchMovies = async (title) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    // --- 3. BACKGROUND COLOR UPDATE ---
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white p-8 transition-colors duration-300">
      
      {/* HEADER SECTION WITH TOGGLE BUTTON */}
      <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          MovieLand
        </h1>

        {/* --- 4. TOGGLE BUTTON (Sun/Moon) --- */}
        <button 
          onClick={handleThemeSwitch}
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition duration-200"
        >
          {theme === 'dark' ? (
            // Sun Icon (Light Mode ke liye)
            <span className="text-2xl">☀️</span>
          ) : (
            // Moon Icon (Dark Mode ke liye)
            <span className="text-2xl">🌙</span>
          )}
        </button>
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-500 dark:text-gray-400">Search for your favorite movies</p>
      </div>

      <SearchBar onSearch={(text) => setSearchTerm(text)} />

      {loading && <div className="text-center text-xl mt-5">Loading...</div>}
      {error && <div className="text-center text-red-500 mt-5">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;