import React from 'react';
//thank you page after user registers
const SplashScreen = ({ child, onContinue }) => {
  return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900 w-full">Thanks for Registering {child.name}!</h1>
          <img src={child.photo} alt="Child" className="rounded-md w-60 shadow-lg shadow-cyan-500/50" />
          <button onClick={onContinue} className="bg-purple text-white font-bold py-4 px-4 rounded-full mt-10 w-full" >Go to Sign-In</button>
      </div>
    </div>
  );
};

export default SplashScreen;
