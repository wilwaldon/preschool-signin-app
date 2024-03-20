// src/LearnMore.js

import React from 'react';

const LearnMore = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Learn More About Us</h1>
      <p className="mt-2">Here is where you can add detailed information about your services or application.</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onNavigate('splash')}>Back to Home</button>
    </div>
  );
};

export default LearnMore;
