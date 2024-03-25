import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-10 p-4 md:p-6">
      <div className="logo">
        <h1 className="text-violet-600 font-extrabold text-2xl cursor-pointer">
          <Link to="/" className="no-underline text-violet-600">KidLogger</Link>
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-8 font-semibold">
          <li><Link to="/" className="text-black no-underline hover:text-violet-600">Home</Link></li>
          <li><Link to="/register" className="text-black no-underline hover:text-violet-600">Register</Link></li>
          <li><Link to="/login" className="text-black no-underline hover:text-violet-600">Sign In</Link></li>
          <li><Link to="/learn-more" className="text-black no-underline hover:text-violet-600">Learn More</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
