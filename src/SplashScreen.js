// src/SplashScreen.js

import React from 'react';

const SplashScreen = ({ child, onContinue }) => {
  return (
    <div>
      <h1>Thanks for Registering!</h1>
      <p>Name: {child.name}</p>
      <p>Age: {child.age}</p>
      <img src={child.photo} alt="Child" className="rounded-md" />
      <button onClick={onContinue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-10">Go to Sign-In</button>
    </div>
  );
};

export default SplashScreen;
