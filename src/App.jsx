import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>

      <Footer />
      
    </div>
  );
};

export default App;