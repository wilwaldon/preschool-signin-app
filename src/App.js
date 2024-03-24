import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import RegisterChildForm from './RegisterChildForm';
import SplashPage from './SplashPage';
import LearnMore from './LearnMore';
import Header from './Header';
import LogInChild from './LogInChild';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8 h-lvh">
        <ToastContainer />
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<SplashPage />} />
          <Route path="/register" element={<RegisterChildForm />} />
          <Route path="/login" element={<LogInChild />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
