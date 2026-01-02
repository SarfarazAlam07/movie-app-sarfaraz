import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (inputValue.trim()) {
      onSearch(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto flex">
        
        {/* --- INPUT FIELD --- */}
        <input
          type="text"
          placeholder="Search for movies (e.g., Avengers, Batman)..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-5 py-3 text-lg text-white bg-gray-800 border border-gray-700 rounded-l-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 placeholder-gray-500"
        />

        {/* --- SEARCH BUTTON --- */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-r-full font-semibold transition duration-200 flex items-center"
        >
          {/* Search Icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;