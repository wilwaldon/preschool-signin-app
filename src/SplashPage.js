import React from 'react';

const SplashPage = ({ onNavigate }) => {
  const handleLearnMore = () => {
    console.log("Learn more action executed");
  
  };
  return (
    <div className="font-sans min-h-screen flex flex-col">

      {/* Hero Section */}
      <div className="relative bg-black text-white vh-50 ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="hero bg-cover bg-center flex-1 flex items-center justify-center min-h-[60vh]" style={{ backgroundImage: 'url(./hero.jpg)' }}>
        <div className="relative bg-cover bg-center h-96 items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to KidLogger</h1>
          <p className="mb-8">Safeguarding your child's day, every day.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => onNavigate('register')}>Get Started</button>
          

          <button  className="bg-transparent border border-white hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onNavigate('learnMore')}>Learn More</button>
        </div>
      </div>
      </div>

      {/* Content Area */}
      <div className="content p-4 bg-gray-50 flex-1">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <p>Check back soon for news and updates!</p>
      </div>
    </div>
  );
};

export default SplashPage;