import React from 'react';

const Header = ({ onNavigate }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="logo">
        {/* Replace with your logo */}
        <img src="./kidlogger.png" alt="Logo" className="h-10" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="cursor-pointer" onClick={() => onNavigate('splash')}>Home</li>
          <li className="cursor-pointer" onClick={() => onNavigate('register')}>Register</li>
          <li className="cursor-pointer" onClick={() => onNavigate('main')}>Sign In</li>
          <li className="cursor-pointer" onClick={() => onNavigate('learnMore')}>Learn More</li>
          {/* Add or remove navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;