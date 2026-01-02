import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 py-6 mt-10 border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
      <p className="text-gray-600 dark:text-gray-400 font-medium">
        Made with <span className="text-red-500 animate-pulse">❤️</span> by{' '}
        <a 
          href="https://portfolio-web-saruu.netlify.app/" 
          className="text-blue-600 dark:text-blue-400 hover:underline font-bold"
        >
          Sarfaraz
        </a>
      </p>
      <p className="text-xs text-gray-400 mt-1">
        © {new Date().getFullYear()} MovieLand App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;