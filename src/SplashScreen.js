// src/SplashScreen.js

import React from 'react';

const SplashScreen = ({ child, onContinue }) => {
  return (
    <div>
      <h1>Thanks for Registering!</h1>
      <p>Name: {child.name}</p>
      <p>Age: {child.age}</p>
      <img src={child.photo} alt="Child" style={{ maxWidth: '200px', borderRadius: '10px' }} />
      <button onClick={onContinue}>Go to Sign-In</button>
    </div>
  );
};

export default SplashScreen;
