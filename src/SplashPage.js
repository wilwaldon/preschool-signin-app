import React from 'react';

const SplashPage = ({ onNavigate }) => {
  const handleLearnMore = () => {
    // Your learn more action here
    // For example, navigating to a different view or opening a modal with more information
    console.log("Learn more action executed");
    // If you're using simple state management for navigation, it might look like this:
    // onNavigate('learnMoreView');
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer" onClick={() => onNavigate('register')}>Register</li>
            <li className="cursor-pointer" onClick={() => onNavigate('main')}>Sign In</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero bg-cover bg-center flex-1 flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
        <div className="text-center text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to KidLogger</h1>
          <p className="mb-8">Safeguarding your child's day, every day.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => onNavigate('register')}>Get Started</button>
          

          <button  className="bg-transparent border border-white hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onNavigate('learnMore')}>Learn More</button>
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