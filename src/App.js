import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; //header
import Footer from './Footer'; //footer
import SplashPage from './SplashPage'; //home screen
import SplashScreen from './SplashScreen'; //after user registers
import LogInChild from './LogInChild'; //login screen
import LearnMore from './LearnMore'; //learn more screen
import RegisterChildForm from './RegisterChildForm'; //register screen

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
      <div className="flex flex-col min-h-screen">
        <Header /> {/* header */}
        <main className="flex-grow"> {/* top nav */}
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/login" element={<LogInChild />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/register" element={<RegisterChildForm />} />
          </Routes>
        </main>

        <Footer /> {/* footer */}
      </div>
      </div>
    </Router>
  );
};

export default App;
