import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import RegisterChildForm from './RegisterChildForm';
import SplashPage from './SplashPage';
import LearnMore from './LearnMore'; // Ensure this is imported
import OriginalSplashScreen from './SplashScreen'; // If still needed
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [currentView, setCurrentView] = useState('splash');
  const [registeredChild, setRegisteredChild] = useState(null);
  const [currentChild, setCurrentChild] = useState('');
  const sigPad = useRef(null);

  const navigate = (view) => {
    setCurrentView(view);
  };

  const handleRegisterChild = (childData) => {
    setRegisteredChild(childData);
    toast.success(`${childData.name} has been registered successfully!`);
    setCurrentView('originalSplash'); // Or any other view you'd like to navigate to
  };

  const handleSign = (action) => {
    if (!currentChild.trim() || sigPad.current.isEmpty()) {
      toast.error("Please enter the child's name and provide a signature.");
      return;
    }
    toast.success(`${currentChild} ${action === 'in' ? 'signed in' : 'signed out'} successfully!`);
    setCurrentChild('');
    sigPad.current.clear();
    setCurrentView('splash'); // Or any other view you'd like to navigate to after signing
  };

  return (
    <div className="App bg-slate-100">
      <ToastContainer />
      {currentView === 'splash' && <SplashPage onNavigate={navigate} />}
      {currentView === 'register' && <RegisterChildForm onRegister={handleRegisterChild} />}
      {currentView === 'originalSplash' && registeredChild && (
        <OriginalSplashScreen child={registeredChild} onContinue={() => navigate('main')} />
      )}
      {currentView === 'main' && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Main sign in/out content here */}
        </div>
      )}
      {currentView === 'learnMore' && <LearnMore onNavigate={navigate} />}
    </div>
  );
};

export default App;
