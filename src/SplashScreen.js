// src/SplashScreen.js

import React from 'react';

const SplashScreen = ({ child, onContinue }) => {
  return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className='font-bold font-sans text-5xl mb-10 text-orange-500'>Log My Kid</h1>
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900 w-full">Thanks for Registering!</h1>
          <h2 className="text-base font-bold leading-7 text-gray-900 text-xl mb-5 capitalize">Name: {child.name}</h2>
          <h2 className="text-base font-bold leading-7 text-gray-900 text-xl mb-10 capitalize">Age: {child.age}</h2>
          <img src={child.photo} alt="Child" className="rounded-md w-60 shadow-lg shadow-cyan-500/50" />
          <button onClick={onContinue} className="bg-purple text-white font-bold py-4 px-4 rounded-full mt-10 w-full" >Go to Sign-In</button>
      </div>
    </div>
  );
};

export default SplashScreen;
