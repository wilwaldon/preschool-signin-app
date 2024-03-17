// src/SplashScreen.js

import React from 'react';

const SplashScreen = ({ child, onContinue }) => {
  return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900 w-full">Thanks for Registering!</h1>
          <h2 className="text-base font-bold leading-7 text-gray-900 text-xl mb-5 w-full">Name: {child.name}</h2>
          <h2 className="text-base font-bold leading-7 text-gray-900 text-xl mb-10 w-full">Age: {child.age}</h2>
          <img src={child.photo} alt="Child" className="rounded-md w-full" />
          <button onClick={onContinue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-10 w-full" >Go to Sign-In</button>
      </div>
    </div>
  );
};

export default SplashScreen;
