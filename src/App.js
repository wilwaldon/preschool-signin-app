import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; // Your Header component
import Footer from './Footer'; // Your Footer component
import SplashPage from './SplashPage';
import LogInChild from './LogInChild';
import LearnMore from './LearnMore';
import RegisterChildForm from './RegisterChildForm';
// Import other pages/components as needed

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure full height and flex layout */}
        <Header /> {/* Header included at the top */}

        {/* Main content area, expand to fill the space between Header and Footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/login" element={<LogInChild />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/register" element={<RegisterChildForm />} />
            {/* Define more routes as needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
